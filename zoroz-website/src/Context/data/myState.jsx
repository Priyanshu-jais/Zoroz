import React from 'react'
import { useState,useEffect } from 'react';
import myContext from './myContext'
import { fireDB } from "../../Firebase/FirebaseConfig";
import { toast } from 'react-toastify';
import { Timestamp,addDoc,collection,onSnapshot,orderBy,query } from 'firebase/firestore';
import { setDoc,deleteDoc,doc } from 'firebase/firestore';
import {getDocs} from "firebase/firestore";




export const MyState = (props) => {
   const [mode, setMode] = useState("light");

   const toggleMode = () => {
     if (mode === "light") {
       setMode("dark");
       document.body.style.backgroundColor = "rgb(17, 24, 39)";
     } else {
       setMode("light");
       document.body.style.backgroundColor = "white";
     }
   }

   const [loading,setLoading]=useState(false);

   //about product
   const [products, setProducts] = useState({
     title: null,
     price: null,
     imageUrl: null,
     category: null,
     description: null,
     time: Timestamp.now(),
     date: new Date().toLocaleString("en-US", {
       month: "short",
       day: "2-digit",
       year: "numeric",
     }),
   });

   //Add Product function
   const addProduct = async () => {
     if (
       products.title == null ||
       products.price == null ||
       products.imageUrl == null ||
       products.category == null ||
       products.description == null
     ) {
       return toast.error("Please fill all fields");
     }
     const productRef = collection(fireDB, "products");
     setLoading(true);
     try {
       await addDoc(productRef, products);
       toast.success("Product Add successfully");

       setTimeout(()=> {
        window.location.href = "/dashboard"
       },800);

       getProductData();
       closeModal();
       setLoading(false);
     } catch (error) {
       console.log(error);
       setLoading(false);
     }
     setProducts("");
   };

   const [product, setProduct] = useState([]);

   //Get Product
   const getProductData = async () => {
     setLoading(true);
     try {
       const q = query(
         collection(fireDB, "products"),
         orderBy("time")
         // limit(5)
       );
       const data = onSnapshot(q, (QuerySnapshot) => {
         let productsArray = [];
         QuerySnapshot.forEach((doc) => {
           productsArray.push({ ...doc.data(), id: doc.id });
         });
         setProduct(productsArray);
         setLoading(false);
       });
       return () => data;
     } catch (error) {
       console.log(error);
       setLoading(false);
     }
   };

   const edithandle = (item) => {
     setProducts(item);
   };
   // update product
   const updateProduct = async (item) => {
     setLoading(true);
     try {
       await setDoc(doc(fireDB, "products", products.id), products);
       toast.success("Product Updated successfully");
       getProductData();
       setLoading(false);
       setTimeout(() => {
        window.location.href = "/dashboard";
       },800);
     } catch (error) {
       setLoading(false);
       console.log(error);
     }
     setProducts("");
   };

  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted successfully");
      setLoading(false);
      getProductData();
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false);
    }
  };

    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
      setLoading(true);
      try {
        const result = await getDocs(collection(fireDB, "orders"));
        const ordersArray = [];
        result.forEach((doc) => {
          ordersArray.push(doc.data());
          setLoading(false);
        });
        setOrder(ordersArray);
        console.log(ordersArray);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

const [user, setUser] = useState([]);

const getUserData = async () => {
  setLoading(true);
  try {
    const result = await getDocs(collection(fireDB, "users"));
    const usersArray = [];
    result.forEach((doc) => {
      usersArray.push(doc.data());
      setLoading(false);
    });
    setUser(usersArray);
    console.log(usersArray);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

useEffect(() => {
  getProductData();
  getOrderData();
  getUserData();
}, []);

const [searchkey, setSearchkey] = useState("");
const [filterType, setFilterType] = useState("");
const [filterPrice, setFilterPrice] = useState("");

  return (
    <myContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        updateProduct,
        edithandle,
        deleteProduct,
        order,
        user,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}

