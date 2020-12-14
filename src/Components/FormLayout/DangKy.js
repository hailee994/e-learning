import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DANG_KY_USER } from "../../Redux/Constans/ClientConst";

export default function DangKy() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "GP05",
    email: "",
  });
  const [error, setError] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, pattern } = e.target;
    let err = "";

    if (value.trim() === "") {
      err = name + " không được bỏ trống";
    }
    if (type === "number" || type === "email") {
      const regex = new RegExp(pattern);

      if (!regex.test(value)) {
        err = name + " không đúng định dạng";
      }
    }

    let values = { ...user, [name]: value };
    let errors = { ...error, [name]: err };

    setUser(values);
    setError(errors);
  };

  const renderButton = () => {
    let valid = true;
    for (let item in error) {
      if (error[item] !== "") {
        valid = false;
      }
    }
    if (valid) {
      return (
        <button type="submit" className="btn btn-success">
          Đăng ký
        </button>
      );
    } else {
      return (
        <button type="submit" className="btn btn-success" disabled>
          Đăng ký
        </button>
      );
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch({
      type: DANG_KY_USER,
      user,
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">ĐĂNG KÝ</h1>
      <form className="text-center" onSubmit={handleSignUp}>
        <div className="form-group text-left">
          <p>Họ và tên:</p>
          <input
            type="text"
            name="hoTen"
            className="form-control"
            onChange={handleChange}
          />
          <p className="text-danger mt-2">{error?.hoTen}</p>
        </div>

        <div className="form-group text-left">
          <p>Tên tài khoản:</p>
          <input
            type="text"
            name="taiKhoan"
            className="form-control"
            onChange={handleChange}
          />
          <p className="text-danger mt-2">{error?.taiKhoan}</p>
        </div>

        <div className="form-group text-left">
          <p>Mật khẩu:</p>
          <input
            type="password"
            name="matKhau"
            className="form-control"
            onChange={handleChange}
          />
          <p className="text-danger mt-2">{error?.matKhau}</p>
        </div>

        <div className="form-group text-left">
          <p>Email:</p>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            pattern='^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$'
          />
          <p className="text-danger mt-2">{error?.email}</p>
        </div>

        <div className="form-group text-left">
          <p>Số điện thoại:</p>
          <input
            type="number"
            name="soDT"
            className="form-control"
            onChange={handleChange}
            pattern="^[0-9]+$"
          />
          <p className="text-danger mt-2">{error?.soDT}</p>
        </div>

        {renderButton()}
      </form>
    </div>
  );
}
