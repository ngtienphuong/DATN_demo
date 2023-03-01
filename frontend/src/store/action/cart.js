export function AddCart(data) {
  return {
    type: "ADD_CART",
    payload: data,
  };
}
export function UpdateCart(data) {
  return {
    type: "UPDATE_CART",
    payload: data,
  };
}
export function DeleteCart(data) {
  return {
    type: "DELETE_CART",
    payload: data,
  };
}
export function IncreaseQuantity(data) {
  return {
    type: "INCREASE_QUANTITY",
    payload: data,
  };
}
export function DecreaseQuantity(data) {
  return {
    type: "DECREASE_QUANTITY",
    payload: data,
  };
}
