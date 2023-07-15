import { Routes, Route } from "react-router-dom";

import { useEffect } from 'react';
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getUsersAndGetAdmin,
} from './utils/firebase/firebase.utils';

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
import { setAdminUser, setCurrentUser } from "./store/user/user.action";

import { GlobalStyle } from "./global.styles";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
      if(user) {
        console.log(user?.email)
        getUsersAndGetAdmin(user.email).then((adminUser) => {
          if(adminUser)
            dispatch(setAdminUser(adminUser));
        })
        
      } else {
        dispatch(setAdminUser(null));
      }

      
    });

    return unsubscribe;
  });

  

  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
