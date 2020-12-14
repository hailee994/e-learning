import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DANG_NHAP_USER } from "../../Redux/Constans/ClientConst";

export default function DangNhap() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const [error, setError] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let err = "";

    if (value.trim() === "") {
      err = name + " không được bỏ trống";
    }

    let values = { ...user, [name]: value };
    let errors = { ...error, [name]: err };

    setUser(values);
    setError(errors);
    setUser({
      ...user,
      [name]: value,
    });
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
          Đăng nhập
        </button>
      );
    } else {
      return (
        <button type="submit" className="btn btn-success" disabled>
          Đăng nhập
        </button>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: DANG_NHAP_USER,
      user,
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">ĐĂNG NHẬP</h1>
      <form className="text-center" onSubmit={handleSubmit}>
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
        {renderButton()}
      </form>
    </div>
  );
}
