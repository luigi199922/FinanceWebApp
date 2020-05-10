const request = require("supertest");
const { userOneId, userOne, setupDatabase } = require("./fixtures/db");
const app = require("../src/app");
const User = require("../src/models/User");

beforeEach(setupDatabase);

test("Should signup a new user", async () => {
  const response = await request(app)
    .post("/users/create")
    .send({
      username: "Luis",
      email: "luisalfonsopreciado@example.com",
      password: "MyPass777!",
    })
    .expect(201);

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // Assertions about the response
  expect(response.body).toMatchObject({
    user: {
      username: "Luis",
      email: "luisalfonsopreciado@example.com",
    },
    token: user.tokens[0].token,
  });
  expect(user.password).not.toBe("MyPass777!");
});

test("Should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);

  // Assert that the database was changed correctly
  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
});

test("Should fail to login user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "BadCredentials@email.com",
      password: "BadPassword",
    })
    .expect(400);
});

test("Should get profile for user with Authentication", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should NOT get profile for unAuth user", async () => {
  await request(app).get("/users/me").send().expect(401);
});

test("Should delete account for user", async () => {
  const response = await request(app)
    .delete("/users/delete")
    .send()
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});

test("Should NOT delete account for unAuth user", async () => {
  await request(app).delete("/users/delete").send().expect(401);
});

test("Should upload avatar image", async () => {
  jest.setTimeout(8000); //Give it more time to upload
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "tests/fixtures/profile-pic.jpg")
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

test("Should update valid user fields", async () => {
  const newUserData = {
    name: "Luis",
    username: "Alfonso",
    email: "alfonsoluispreciado@example.com",
  };
  const response = await request(app)
    .patch("/users/me")
    .send(newUserData)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);

  expect(response.body).toMatchObject(newUserData);

  const user = await User.findById(userOneId);
  expect(user).toMatchObject(newUserData);
});

test("Should NOT update invalid user fields", async () => {
  const newUserData = {
    address: "Alfonso",
  };
  await request(app)
    .patch("/users/me")
    .send(newUserData)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(400);
});

test("Should get the User Watchlist", async () => {
  await request(app)
    .get("/users/watchlist")
    .send()
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);
});

test("Should add security and update User Watchlist", async () => {
  const securityData = {
    symbol: "BA",
  };
  await request(app)
    .patch("/users/watchlist")
    .send(securityData)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);

  const res = await request(app)
    .get("/users/watchlist")
    .send()
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);

  expect(res.body.length).toBe(1);

  const feedback = await request(app)
    .patch("/users/watchlist")
    .send(securityData)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);
  // console.log(feedback.body)
  // expect(feedback.body).toEqual("Security is already in your Portfolio")
});

test("Should get User Portfolio", async () => {
  const res = await request(app)
    .get("/users/portfolio")
    .send()
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);
  expect(res.body.securities.length).toBe(0);
});

test("Should add Security to User Portfolio", async () => {
  const securityData = {
    symbol: "BA",
  };
  const res = await request(app)
    .patch("/users/portfolio")
    .send(securityData)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);
  expect(res.body).toBeDefined();
  const res2 = await request(app)
    .get("/users/portfolio")
    .send()
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);
  expect(res2.body.securities.length).toBe(1);
});

test("Should delete Security from User Portfolio", async () => {
  const securityData = {
    symbol: "AAPL",
  };
  const res = await request(app)
    .delete("/users/portfolio")
    .send(securityData)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .expect(200);
  expect(res.body).toBeDefined();
  console.log(res.body)
});
