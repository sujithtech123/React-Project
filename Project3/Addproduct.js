
function Addproduct(){
    return(
        <>
        <div className="Addproduct">
            <form>
                <div className="Addproduct1">
                <h1>Add Product</h1>
                </div>
                <div>
                <legend>Product Id</legend>
                <input text="text" placeholder="Enter" required/>
                </div>
                <br></br>
                <div>
                    <legend>Product Name</legend>
                    <input text="text" placeholder="Enter" required/>
                </div>
                <br></br>
                <div>
                    <legend>Product Price</legend>
                    <input text="text" placeholder="Enter" required/>
                </div>
                <br></br>
                <div>
                    <legend>Product Quality</legend>
                    <input text="text" placeholder="Enter" required/>
                </div>
                <br></br>
                <div>
                    <button>Addproduct</button>
                </div>
            </form> 
        </div>
        </>
    )
}

export default Addproduct;