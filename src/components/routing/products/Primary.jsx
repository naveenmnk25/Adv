import { useDispatch, useSelector } from "react-redux";
import PrimaryCard from "./productCard";
import React, { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../../../redux/actions/productAction.JS";

function PrimaryPage() {
    const dispatch = useDispatch();
    const fetchProductList = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err);
        })
        dispatch(setProducts(response.data));
    }
    useEffect(() => {
        fetchProductList();
    }, [])
    return (<>
        <h3>Product List</h3>
        <PrimaryCard />
    </>);
}

export default PrimaryPage;