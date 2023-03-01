const iniState = {
  numberCart: 0,
  carts: [],
};
var data = JSON.parse(localStorage.getItem('CART'));
// var initialState = data ? data : {numberCart: 0, carts: []};

function cartReducer(state = iniState, action) {
  switch (action.type) {
    case "GET_NUMBER_CART":
      return {
        ...state.numberCart,
      };
    case "ADD_CART":
      if (state.numberCart == 0) {
        let newCart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.image,
          unit_price: action.payload.unit_price,
        };
        state.carts.push(newCart);
      } else {
        let check = false;
        state.carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let newCart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            unit_price: action.payload.unit_price,
          };
          state.carts.push(newCart);
        }
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case "INCREASE_QUANTITY":
      state.numberCart++;
      state.carts.find((item) => {
        return item.id == action.payload;
      }).quantity++;
      return {
        ...state,
      };
    case "DECREASE_QUANTITY": {
      state.numberCart--;
      state.carts.find((item) => {
        return item.id == action.payload;
      }).quantity--;
      return {
        ...state,
      };
    }
    case "DELETE_CART": {
      let quantity = state.carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity,
        carts: state.carts.filter((item) => {
          return item.id != state.carts[action.payload].id;
        }),
      };
    }
    case "UPDATE_CART":
      let old_quantity = state.carts.find((item) => {
        return (item.id = action.payload);
      }).quantity;
      state.carts.find((item) => {
        return (item.id = action.payload);
      }).quantity = action.payload.quantity;
      state.numberCart -= old_quantity;
      state.numberCart += action.payload.quantity;
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default cartReducer;
