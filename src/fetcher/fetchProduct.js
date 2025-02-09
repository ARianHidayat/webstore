import { useEffect, useState } from "react";


export function useFetchingProduct(){
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const doFetchProduct = async () => {
        setIsLoading(true)
        try {
            const fetching = await fetch("https://dummyjson.com/products?limit=10")
            const response = await fetching.json()
            setProducts(response.products)
            setIsLoading(false)
        } catch (error) {
            console.error(error.message)
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        doFetchProduct()
    },[])

    return {products,isLoading}
}