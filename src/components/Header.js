import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = ({ setOpen }) => {
  const success = () => {
    toast("Logout Successfull!");
  };
  const nav = useNavigate();
  return (
    <div className="header">
      <div className="" style={{ fontSize: "1.5rem" }}>
        LOGO
      </div>
      <div className="header-buttons">
        <button className="header-button mx-2" onClick={() => setOpen(true)}>
          Register
        </button>
        <button
          className="header-button"
          onClick={() => {
            success();
            localStorage.removeItem("AuthToken");
            nav("/login");
          }}
        >
          Logout
        </button>
        <ToastContainer
        autoClose={2000}
        position="top-center"
        className="toast-container-fail"
        toastClassName="dark-toast"
      />
      </div>
    </div>
  );
};

export default Header;
