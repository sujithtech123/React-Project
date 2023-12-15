

 function Login(){
     return(
  <>
    <div className="log">
      <form>
        <div className="Login">
        <h1 align="center">Login Form</h1>
        </div>
        <div className="User">
          <legend>User Name</legend>
           <input type="text" placeholder="User Name" required/>
        </div>
        <br></br>
        <div className="User">
            <legend>Email Id</legend>
            <input type="text"placeholder="Email Id" required/>
        </div>
        <br></br>
        <div className="User">
            <legend>Passwerd</legend>
            <input type="text"placeholder="Passwerd" required/>
        </div>
        <br></br>
        <div>
           <input type="Checkbox"/>Remind me
          <a href="a">Forget Passwerd</a>
        </div>
        <br></br>
        <div>
          <button>Login</button>
        </div>
     </form>
    </div>
  </>
)
}
 export default Login;
 
