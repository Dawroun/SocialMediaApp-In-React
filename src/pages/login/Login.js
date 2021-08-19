import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">DawrounSocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on DawrounSocial</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="email" className="loginInput" />
                        <input placeholder="password" className="loginInput" />
                        <button className="loginBtn">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Accaunt</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
