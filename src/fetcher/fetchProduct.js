import { useEffect, useState } from "react";


export function useFetchingProduct({pageNumber,searchValue}){
    const [products, setProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [limit, setLimit] = useState(10)
    const [numberSelected, setNumberSelected] = useState(pageNumber) // 1
    const paginationFormula = (pageNumber - 1) * limit

    const doFetchProduct = async () => {
        setIsLoading(true)
        try {
            const fetching = await fetch(`https://dummyjson.com/products/search?q=${searchValue}&limit=${limit}&skip=${paginationFormula}`)
            const response = await fetching.json()
            setProducts(response.products)
            setTotalProducts(response.total)
            setIsLoading(false)
        } catch (error) {
            console.error(error.message)
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        doFetchProduct()
    },[pageNumber,searchValue])

    return {products,isLoading,totalProducts,limit,searchValue}
}