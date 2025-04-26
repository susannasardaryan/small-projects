import { useState } from "react";

const Login = () => {
  const userInfo = JSON.parse(localStorage.getItem("loginInfo"));

  const [userLoginInfo, setUserLoginInfo] = useState(userInfo ?? {});

  const [usernameWarningMessage, setUsernameWarningMessage] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const regexp = /^[a-zA-Z0-9]+$/;
  const disabled = !!usernameWarningMessage || !userLoginInfo.password;

  const handleUsernameChange = ({ target }) => {
    setUserLoginInfo({ ...userLoginInfo, username: target.value });

    if (target.value.trim() === "") {
      setUsernameWarningMessage("Username cannot be empty.");
    } else if (!regexp.test(target.value)) {
      setUsernameWarningMessage(
        "Your Username must include only letters and number from 0-9"
      );
    } else setUsernameWarningMessage("");
  };

  const handlePasswordChange = ({ target }) => {
    setUserLoginInfo({ ...userLoginInfo, password: target.value });
  };

  const handleLoginClick = () => {
    localStorage.setItem("loginInfo", JSON.stringify(userLoginInfo));
    alert("Your data logged");
  };

  return (
    <form className="login-form">
      <label className="login">
        Username
        <input
          type="text"
          onChange={handleUsernameChange}
          value={userLoginInfo.username}
          required
        />
      </label>
      <span style={{ color: "brown" }}>{usernameWarningMessage}</span>

      <label className="password">
        Password
        <input
          type="checkbox"
          checked={passwordShow}
          onChange={() => setPasswordShow(!passwordShow)}
        />
        <input
          type={passwordShow ? "text" : "password"}
          onChange={handlePasswordChange}
          value={userLoginInfo.password}
          required
        />
      </label>
      <button
        onClick={handleLoginClick}
        disabled={disabled}
        className="login-button"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
