import "bootstrap/dist/css/bootstrap.min.css"
import Card from "@/components/card"
import { useFetchingCategory } from "@/fetcher/fetchCategory"
import { useState } from "react"

export default function dummy(){
    const [selectValue, setSelectValue] = useState("tv")
    const {categories,passingSelectValue} = useFetchingCategory(selectValue)
    return(
        <>
        <ol>
            {
                categories.map((item,index) => 
                    <li key={index}>{item}</li>
                )
            }
        </ol>
        <p>select value : {selectValue}</p>
        <p>transform selected value : {passingSelectValue}</p>
        <select value={selectValue} onChange={(e)=>{setSelectValue(e.target.value)}}>
            {
                categories.map((item,index) => 
                <option key={index} value={item}>{item}</option>
                )
            }
        </select>
        </>
    )
}