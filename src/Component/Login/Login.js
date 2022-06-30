import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [loggedin, setIsloggedin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    params.append("apiLoginID", "jayashibu@gmail.com");
    params.append("apiPassword", "password");
    params.append("deviceID", "87687678678");
    params.append("pushToken", "896897897");
    params.append("deviceModel", "099089899e");

    await axios
      .post(
        "http://api.telemetrix.sg/index.php/api/1/authenticate/login",
        params,
        {
          headers: { "content-type": "application/x-www-form-urlencoded" },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);

        if (res.data.code === 200) {
          console.log(res.data.code);
          setIsloggedin(!loggedin);
        }
      });
  };

  if (loggedin) {
    console.log("Successfull login");
    console.log(loggedin);
    return <div>Logged in</div>;
  } else {
    console.log(loggedin);
    return (
      <div>
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <div className="ui form">
                <form>
                  <div className="field">
                    <label>Email</label>
                    <div className="ui left icon input">
                      <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <i className="user icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <i className="lock icon"></i>
                    </div>
                  </div>
                  <div
                    className="ui blue submit button"
                    onClick={onSubmitHandler}
                  >
                    Login
                  </div>
                </form>
              </div>
            </div>
            <div className="middle aligned column">
              <div className="ui big button">
                <i className="signup icon"></i>
                Sign Up
              </div>
            </div>
          </div>
          <div className="ui vertical divider">Or</div>
        </div>
      </div>
    );
  }
};

export default Login;
