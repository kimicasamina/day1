const initialValue = {
  showModal: false,
};

const habitsReducer = (ui = initialValue, action) => {
  switch (action.type) {
    case "GET_UI":
      return ui;

    case "OPEN_MODAL":
      return {
        ...ui,
        showModal: true,
      };

    case "CLOSE_MODAL":
      return {
        ...ui,
        showModal: false,
      };

    default:
      return ui;
  }
};

export default uiReducer;
