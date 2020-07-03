import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    
    ADD_OPTION: (state, action) => {
      const newPortfolio = { ...state.portfolio };
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
      return { ...state, portfolio: newPortfolio };
    },

    REMOVE_OPTION: (state, action) => {
      const newPortfolio = { ...state.portfolio };
      delete newPortfolio[action.contract];
      return { ...state, portfolio: newPortfolio };
    },

    CLEAR_PORTFOLIO: (state, action) => {
      return { ...state, portfolio: {} };
    },

    SET_AMOUNT: (state, action) => {
      const newPortfolio = { ...state.portfolio };
      newPortfolio[action.option].amount = action.amount;
      return { ...state, portfolio: newPortfolio };
    },

    ADD_STOCK: (state, action) => {
      return { ...state, stock: action };
    },
  };
  initStore(actions, { portfolio: {} });
};

export default configureStore;
