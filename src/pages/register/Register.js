import "./register.css"

export default function Register() {
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
                        <input placeholder="username" className="loginInput" />
                        <input placeholder="password" className="loginInput" />
                        <input placeholder="password Again" className="loginInput" />
                        <button className="loginBtn">Sign Up</button>
                        <button className="loginRegisterButton">Log Into Accaunt</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
