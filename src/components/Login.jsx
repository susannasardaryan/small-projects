import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState(JSON.parse(localStorage.getItem('loginInfo')).username || '');
    const [password, setPassword] = useState(JSON.parse(localStorage.getItem('loginInfo')).password || '');
    const [usernameWarningMessage, setUsernameWarningMessage] = useState('');
    const regexp = /^[a-zA-Z0-9]+$/;

    const handleUsernameChange = ({ target }) => {
        setUsername(target.value);
        if (!regexp.test(target.value)) {
            setUsernameWarningMessage('Your Username must icnlude only letters and number from 0-9');
            setDisabled(true);
        }
        else setUsernameWarningMessage('')
    }

    const handlePasswordChange = ({ target }) => {
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
                <input type="text" onChange={handleUsernameChange} value={username} required />
            </label>
            <span>{usernameWarningMessage}</span>

            <label >
                Password
                <input type="text" onChange={handlePasswordChange} value={password} required />
            </label>
            <button onClick={handleLoginClick} disabled={!!usernameWarningMessage || !password}>Login</button>
        </form>
    )
}

export default Login;