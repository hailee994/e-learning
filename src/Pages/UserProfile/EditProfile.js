import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_THONG_TIN_USER } from "../../Redux/Constans/ClientConst";
import { history } from "../../Utils/history";

export default function EditProfile() {
  const dispatch = useDispatch();

  const [editUser, setEditUser] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "GP05",
    maLoaiNguoiDung: "HV",
    email: "",
  });
  const [error, setError] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    email: "",
  });

  const { thongTinUser } = useSelector((state) => state.ClientReducer);

  useEffect(() => {
    setEditUser({
      ...editUser,
      taiKhoan: thongTinUser?.taiKhoan,
      matKhau: thongTinUser?.matKhau,
      hoTen: thongTinUser?.hoTen,
      soDT: thongTinUser?.soDT,
      email: thongTinUser?.email,
    });
  }, [thongTinUser]);

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

    let values = { ...editUser, [name]: value };
    let errors = { ...error, [name]: err };

    setEditUser(values);
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
        <>
          <button type="submit" className="btn btn-success mr-4">
            Cập nhật
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={handleCancel}
          >
            Hủy
          </button>
        </>
      );
    } else {
      return (
        <>
          <button type="submit" className="btn btn-success mr-4" disabled>
            Cập nhật
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={handleCancel}
          >
            Hủy
          </button>
        </>
      );
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: EDIT_THONG_TIN_USER,
      editUser,
    });
  };

  const handleCancel = () => {
    document.getElementById("form-edit").reset();
    history.push("/thongtinhocvien");
  };

  return (
    <form
      className="text-center edit_Form"
      id="form-edit"
      onSubmit={handleEdit}
    >
      <div className="form-group text-left">
        <p>Họ và tên:</p>
        <input
          type="text"
          name="hoTen"
          className="form-control"
          onChange={handleChange}
          value={editUser?.hoTen}
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
          value={editUser?.taiKhoan}
          disabled
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
          value={editUser?.matKhau}
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
          value={editUser?.email}
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
          value={editUser?.soDT}
          pattern="^[0-9]+$"
        />
        <p className="text-danger mt-2">{error?.soDT}</p>
      </div>

      {renderButton()}
    </form>
  );
}
