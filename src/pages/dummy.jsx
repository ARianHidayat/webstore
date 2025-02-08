import "bootstrap/dist/css/bootstrap.min.css"
import Card from "@/components/card"

export default function dummy(){
    return(
        <div className="d-flex flex-row text-center justify-content-center align-items-center vh-100" style={{backgroundColor: "#ccc"}}>
            <div className="d-flex fex-row align-items-center">
                <h3 className="text-center">Loading  </h3>
                <div class="spinner-border spinner-border-sm ms-2" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}