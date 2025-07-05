/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { CircularProgress, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "../store/store";
import { getCart } from "../features/cart/cartSlice";
import Header from "./Header";
import { getUser } from "../features/account/accountSlice";


function App() {

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = async () => {
    await dispatch(getUser());
    await dispatch(getCart());

    //getCart
    //getUser
    // dispatch(setUser(JSON.parse(localStorage.getItem("user")!)));

    // requests.Account.getUser()
    //   .then(user => {
    //     setUser(user);
    //     localStorage.setItem("user", JSON.stringify(user));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     dispatch(logout());
    //   });
   
    // requests.Cart.get()
    //   .then(cart => dispatch(setCart(cart)))
    //   .catch(error => console.log(error))
    //   .finally(() => setLoading(false));

    
  }

  useEffect(() => {

    initApp().then(() => setLoading(false));

  }, []);

  if (loading) return <CircularProgress />;

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header/>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App