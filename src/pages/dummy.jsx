import "bootstrap/dist/css/bootstrap.min.css"
import Card from "@/components/card"
import { useFetchingCategory } from "@/fetcher/fetchCategory"
import { useState } from "react"

export default function dummy(){
    return(
        <>
        <div className="position-absolute position-absolute top-0 start-0 bottom-0 end-0 bg-dark bg-opacity-25">
            <div className="card m-3 position-absolute position-absolute top-50 start-50 translate-middle" style={{maxWidth: "700px"}}>
                <div className="d-flex p-2">
                    <div>
                        <img src="https://placehold.co/200x300" alt="dummy image"/>
                    </div>
                    <div className="d-flex align-item-center">                    <div className="card-body d-flex flex-column justify-content-center">
                            <h5 className="card-title bold fs-4 mb-3">Essence Mascara Lash Princess</h5>
                            <p style={{textAlign: "justify"}}><small>Deskripsi The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</small></p>
                            <p>tags : beauty,mascara</p>
                            <p>stock : 5</p>
                            <p>$9.99</p>
                            <div className="d-flex justify-content-end">
                            <button className="btn btn-danger">Close</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, architecto, in voluptate eveniet delectus voluptatem quisquam ratione beatae possimus non repellendus blanditiis, aliquid iste recusandae maxime exercitationem expedita incidunt. Autem maiores similique molestiae vero, labore sint delectus id quas culpa, optio at blanditiis cupiditate magni ea nobis tempora illo velit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, architecto, in voluptate eveniet delectus voluptatem quisquam ratione beatae possimus non repellendus blanditiis, aliquid iste recusandae maxime exercitationem expedita incidunt. Autem maiores similique molestiae vero, labore sint delectus id quas culpa, optio at blanditiis cupiditate magni ea nobis tempora illo velit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, architecto, in voluptate eveniet delectus voluptatem quisquam ratione beatae possimus non repellendus blanditiis, aliquid iste recusandae maxime exercitationem expedita incidunt. Autem maiores similique molestiae vero, labore sint delectus id quas culpa, optio at blanditiis cupiditate magni ea nobis tempora illo velit.</p>
        </>
    )
}