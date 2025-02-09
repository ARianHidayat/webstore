import { useState,useEffect } from "react"

// saya latihan untuk passing value, yang nantinya saya akan gunakan untuk di terapkan di fitur pagination

export function useFetchingCategory (selectValue){
    const [categories, setCategories] = useState([])
    const [passingSelectValue, setPassingSelectValue] = useState(selectValue)

    const transform = () => {
        setPassingSelectValue("kamu telah memilih " + selectValue.toUpperCase())
    }

    const doFetchCategory = async () => {
        try {
            const fetching = await fetch("https://fakestoreapi.in/api/products/category")
            const response = await fetching.json()
            setCategories(response.categories)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        doFetchCategory()
    },[])

    useEffect(()=>{
        transform()
    },[selectValue])

    return {categories,passingSelectValue}
}