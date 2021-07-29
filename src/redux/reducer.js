const initialState = {
  loadingImg: false,
  itemsImg: [],
  loadingModal: false,
  modalImg: [],
  modalActivity: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'loading/img/start':
      return {
        ...state,
        loadingImg: true,
      };
    case 'loading/img/success':
      return {
        ...state,
        loadingImg: false,
        itemsImg: action.payload,
      };
    case 'loading/modalImg/start':
      return {
        ...state,
        loadingModal: true,
        modalActivity: true,
      };
    case 'loading/modalImg/success':
      return {
        ...state,
        modalImg: action.payload,
        loadingModal: false,
      };
    case 'delete/modal':
      return {
        ...state,
        modalActivity: false,
      };

    default:
      return state;
  }
};
