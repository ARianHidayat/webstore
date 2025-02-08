import { useEffect, useState } from "react";


export function useFetchingProduct(){
    const [products, setProducts] = useState([])

    const doFetchProduct = async () => {
        try {
            const fetching = await fetch("https://fakestoreapi.in/api/products")
            const response = await fetching.json()
            setProducts(response.products)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        doFetchProduct()
    },[])

    return {products}
}