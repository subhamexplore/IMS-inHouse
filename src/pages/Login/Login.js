import React, { useState } from "react";
import character from "../../assets/images/login-char.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [toastClass, setToastClass] = useState("")
  const fail = () => {toast("Incorrect credentials!"); setToastClass("toast-container-fail")};
  const success = () => {toast("Login Successfull"); setToastClass("toast-container-success")};
  const nav = useNavigate();
  const [look, setLook] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const buttonCheck = formData.email.length > 0 && formData.password.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSave = async () => {
    await axios
      .post("http://localhost:9595/auth/login", formData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("AuthToken", res.data.jwtToken);
      })
      .catch((err) => console.error(err));

    localStorage.getItem("AuthToken") === "undefined"
      ? nav("/login")
      : setTimeout(() => {
          nav("/");
        }, 2000);
    localStorage.getItem("AuthToken") === "undefined" ? fail() : success();
  };

  console.log(formData);

  return (
    <div className="login-section">
      <ToastContainer
        autoClose={2000}
        position="top-center"
        className={toastClass}
        toastClassName="dark-toast"
      />
      <div className="login-form">
        <div className="login-form-left">
          <div className="login-left-text">
            <p className="fs-4" style={{ color: "white", fontWeight: "600" }}>
              LOGO
            </p>
            <p className="fs-6" style={{ color: "white" }}>
              Welcome to our Inventory Management System! Please log in or
              register to access your inventory data and streamline your
              business operations.
            </p>
          </div>
          <div className="char-img-div">
            <img className="char-img" src={character} alt="" />
          </div>
        </div>
        <div className="login-form-right">
          <form onSubmit={(e) => handleSubmit(e)}>
            <p>WELCOME BACK</p>
            <p className="fs-5" style={{ fontWeight: "600" }}>
              Log In to your Account
            </p>
            <div className="data-input-fields-login">
              <TextField
                margin="dense"
                label="Email"
                placeholder="johnson_doe"
                type="email"
                fullWidth
                name="email"
                id="email form-textfield"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                required
                // id="form-textfield"
              />
            </div>

            <div className="data-input-fields-login" id="eye-id">
              <TextField
                margin="dense"
                label="Password"
                placeholder="*******"
                type={`${look ? "text" : "password"}`}
                fullWidth
                name="password"
                id="password form-textfield"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
                required
                // id="form-textfield"
              />
              {look ? (
                <PiEyeLight className="eye" onClick={() => setLook(false)} />
              ) : (
                <PiEyeSlashLight
                  className="eye"
                  onClick={() => setLook(true)}
                />
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div className="form-check" style={{ textAlign: "left" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  //   onChange={(e) => handleInputChange(e)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {" "}
                  Remember me{" "}
                </label>
              </div>

              <div
                onClick={() => nav("/forget-password")}
                style={{ fontWeight: "600", cursor: "pointer" }}
              >
                Forget Password?{" "}
              </div>
            </div>
            <div className="data-buttons">
              <Button
                id="input-btn-submit"
                className="submit"
                variant="outlined"
                // onClick={() => nav("/")}
                onClick={handleSave}
                disabled={buttonCheck ? false : true}
              >
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
