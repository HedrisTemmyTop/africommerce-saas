import { configureStore } from '@reduxjs/toolkit';
import { addFormReducers } from './add-seller-form';
import { cartReducers } from './cart-slice';
import { uiReducers } from './ui-Slice';
import { subscribeReducers } from './subscribeModal';
// import { loginSliceReducer } from './LoginSlice';
import allSellerSlice from './allSellerSlice';

const store = configureStore({
  reducer: {
    cart: cartReducers,
    ui: uiReducers,
    form: addFormReducers,
    subscribe: subscribeReducers,
    all_sellers: allSellerSlice,

    // login: loginSliceReducer,
  },
});
export default store;
