import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Register } from "./Register";
import Account from "./Account";
import Login from "./Login";
import Cart from "./Cart";
// import { useSelector } from "react-redux";
import { listen } from "../app/listener";
import { useEffect } from "react";
import Checkout from "./Checkout";
import Invoices from "./Invoice";

const Ruter = () => {
    // const auth = useSelector(state => state.auth);

    useEffect(() => {
        listen();
    }, [])
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account/*" element={<Account />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout/*" element={<Checkout />} />
                    <Route path="/invoices/:id" element={<Invoices />} />
                    {/* <Route path="/login">
                        {auth.user ? <Redirect to="/" /> : <Login />}
                    </Route> */}
                    {/* <Route path="about" render={() => <Redirect to="about-us" />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Ruter;