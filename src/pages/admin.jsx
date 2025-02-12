import "bootstrap/dist/css/bootstrap.min.css"
import Card from "@/components/card"
import { useRouter } from "next/router"
import DetailProduct from "@/components/productDetail"

export default function Admin(){
    const router = useRouter()
    return(
        <>
        <DetailProduct/>
        <p>This is Admin page, i use this page to check a component, is it work or not.</p>
        <button className="btn btn-success mx-2 " type="button" onClick={()=> router.push('/')}>Back to Home</button>
        </>
    )
}