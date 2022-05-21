import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("apiLoginID", email);
    formData.append("apiPassword", password);
    formData.append("deviceID", "98989a");
    formData.append("pushToken", "88897878988da");
    formData.append("deviceModel", "iphone 12");

    console.log(formData);

    await axios
      .post(
        "http://api.telemetrix.sg/index.php/api/1/authenticate/login",
        formData
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

    // fetch("http://api.telemetrix.sg/index.php/api/1/authenticate/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     apiLoginID: email,
    //     apiPassword: password,
    //     deviceID: "0978785553",
    //     pushToken: "kjhdfkjdhjhfkd",
    //     deviceModel: "iphone  12",
    //   }),
    //   headers: { "Content-Type": "application/json;charset=utf-8" },
    // }).then((res) => res.json());

    // return (
    //   fetch("http://api.telemetrix.sg/index.php/api/1/authenticate/login"),
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/form-data",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       apiLoginID: email,
    //       apiPassword: password,
    //       deviceID: "0978785553",
    //       pushToken: "kjhdfkjdhjhfkd",
    //       deviceModel: "iphone  12",
    //     })
    //       .then((response) => response.JSON())
    //       .then((responseJson) => {
    //         console.log(responseJson);
    //       }),
    //   }
    // );

    // const body = new FormData();
    // body.append("apiLoginID", email);
    // body.append("apiPassword", password);
    // body.append("deviceID", "98989a");
    // body.append("pushToken", "88897878988da");
    // body.append("deviceModel", "iphone 12");

    // const response = axios({
    //   method: "post",
    //   url: "http://api.telemetrix.sg/index.php/api/1/authenticate/login",
    //   data: body,
    //   config: { headers: { "Content-Type": "mulipart/form-data" } },
    // })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // console.log(e);
  };

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
};

export default Login;
