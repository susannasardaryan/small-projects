import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameWarningMessage, setUsernameWarningMessage] = useState('');
    


    const handleUsernameChange = ({target}) => {
        setUsername(target.value);
        if(target.value.includes('..') || target.value.includes('/') || target.value.includes('&')) setUsernameWarningMessage('Your Username must icnlude only letters and number from 0-9')
        else setUsernameWarningMessage('')
    }

    const handlePasswordChange = ({target}) => {
        setPassword(target.value);
    }

    const handleLoginClick = () => {
        localStorage.setItem('loginInfo', JSON.stringify({
            username, password
        }))
    }
    return (
        <form className="login-form">
            <label className="login">
                Username
                <input type="text" onChange={handleUsernameChange} value={username}/>
                <span>{usernameWarningMessage}</span>
            </label>
            <label >
                Password
                <input type="text" onChange={handlePasswordChange} value={password}/>
                {/* <span>{warningMessage}</span> */}
            </label>
            <button onClick={handleLoginClick}>Login</button>
        </form>
    )
}

export default Login;