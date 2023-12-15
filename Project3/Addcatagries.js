
function Addcatagries(){
    return(
        <>
        <div className="Addcatagries">
        <div>
            <h1>Add Catagries</h1>
        </div>
        <div>
            <legend>Catagry Id</legend>
            <input text="text" placeholder="Enter" required/>
        </div>
        <br></br>
        <div>
            <legend>Catagry Name</legend>
            <input text="text" placeholder="Enter" required/>
        </div>
        <br></br>
        <div>
            <button>Add catagries</button>
            <button>Reset</button>
        </div>
        </div>
        </>
    )
}
export default Addcatagries;