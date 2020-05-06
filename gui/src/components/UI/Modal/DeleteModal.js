import React from "react";
import Button from "../Button/Button";

const DeleteModal = ({
  show,
  deleteFunction,
  cancelFunction,
  redirectFunction,
}) => {
  const classes = ["Modal", show ? "ModalOpen" : "ModalClosed"];
  return (
    <div className={classes.join(" ")}>
      <h1>Are you sure you want to delete?</h1>
      <Button
        btnType="Danger"
        clicked={() => {
          redirectFunction() 
          deleteFunction();
        }}
      >
        Yes
      </Button>
      <Button btnType="Info" clicked={cancelFunction}>
        No
      </Button>
    </div>
  );
};
export default DeleteModal;
