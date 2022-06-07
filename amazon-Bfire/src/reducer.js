export const initialState = {
   basket: [
  //   {
  //     id: "651356135613",
  //     title: "Apple iphone 11pro max",
  //     price: 29.9,
  //     rating: 5,
  //     image: "https://m.media-amazon.com/images/I/61itOh+Je8L._AC_UY218_.jpg",
  //   },
  //   {
  //     id: "34837423357",
  //     title: "Apple iphone 11pro max",
  //     price: 29.9,
  //     rating: 4,
  //     image: "https://m.media-amazon.com/images/I/61itOh+Je8L._AC_UY218_.jpg",
  //   },
  //   {
  //     id: "3547305347835",
  //     title: "Apple iphone 11pro max",
  //     price: 29.9,
  //     rating: 3,
  //     image: "https://m.media-amazon.com/images/I/61itOh+Je8L._AC_UY218_.jpg",
  //   },
   ],
  // user: null,
};

//this is a selector ???? the purpose is it willl give some info
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0)

//here action is like add or remove items from the basket
//function reducer(state, action) {
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {

    //newcase
    case "SET_USER":
      return {
        ...state, user: action.user
      }

    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    //Logic of adding items to basket
    // break;
    // case "REMOVE_FRPM_BASKET":
    // Logic of removing items from basket.....
    //   return { ...state };


    case "REMOVE_FROM_BASKET":
      // Logic of removing items from basket.....
      //and updating the basket after removing

      //we cloned the basket
      let newBasket = [...state.basket];

      //we check to see if product exists,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //items exists in basket, remove it.....
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }

      return { ...state, basket: newBasket };
    // break;
    default:
      return state;
  }
};
export default reducer;
