import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./Pages/home/Home";
import Order  from "./Pages/order/Order";
import  Cart  from "./Pages/cart/Cart";
import  Dashboard  from "./Pages/admin/dashboard/Dashboard";
import { NoPage } from "./Pages/nopage/Nopage";
import { MyState } from "./Context/data/myState";
import  Login  from "./Pages/registration/Login";
import SignUp from "./Pages/registration/SignUp";
import ProductInfo from "./Pages/productInfo/ProductInfo";
import  AddProduct  from "./Pages/admin/dashboard/page/AddProduct";
import  UpdateProduct  from "./Pages/admin/dashboard/page/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  AllProduct  from "./Pages/allproducts/Allproduct";
import { Children } from "react";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard/>
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/allproducts" element={<AllProduct />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </MyState>
  );
  
}

export default App;

//user
const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user');
  if(user){
    return children;
  }else{
    return <Navigate to={"/login"}/>
  }
}

//admin
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if(admin.user.email==='adminpriyanshu@gmail.com'){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
};
