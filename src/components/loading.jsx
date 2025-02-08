import "bootstrap/dist/css/bootstrap.min.css"
export default function Loading (){
    return(
        <>
            <div className="d-flex flex-row text-center justify-content-center align-items-center vh-100" >
                <div className="d-flex fex-row align-items-center">
                    <h3 className="text-center">Loading  </h3>
                    <div className="spinner-border spinner-border-sm ms-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    )
}