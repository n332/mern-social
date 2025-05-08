import "./login.css"

export default function Login() {
  return (
    <div className="login" >
        <div className="loginWrapper">
            
            <div className="loginLeft">
                <h3 className="loginLogo">DuckSocial</h3>
                <span className="loginDesc">Quack Quack Quack !! Connect with your duckies :)</span>
            </div>

            <div className="loginRight">
                <div className="loginBox">
                    <input  placeholder="Email"  className="loginInput" />
                    <input  placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegister">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
