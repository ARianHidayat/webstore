import "bootstrap/dist/css/bootstrap.min.css"
import Card from "@/components/card"
import Navbar from "@/components/navbar"

export default function dummy(){
    return(
        <>
        <Navbar></Navbar>
        <p>This is Dummy page, i use this page to check a component, is it work or not.</p>
        <Card/>
        </>
    )
}