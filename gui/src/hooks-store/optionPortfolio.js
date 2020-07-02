import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    ADD_OPTION: (portfolio, action) => {
      const newPortfolio = { ...portfolio };
      const option = action.option;
      option.contractName = option.contractName.replace("LONG", "");
      option.contractName = option.contractName.replace("SHORT", "");
      option.contractName += action.direction;
      if (option.contractName in newPortfolio) {
        newPortfolio[option.contractName].amount += 1;
      } else {
        option.amount = 1;
        newPortfolio[option.contractName] = option;
      }
      return newPortfolio;
    },

    REMOVE_OPTION: (portfolio, action) => {
      return delete portfolio[action.contract];
    },

    CLEAR_PORTFOLIO: () => ({}),
  };
  initStore(actions, {});
};

export default configureStore;
