import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_DANH_SACH_NGUOI_DUNG_ADMIN,
  GET_THONG_TIN_USER_ADMIN,
  XOA_NGUOI_DUNG_ADMIN,
} from "../../../Redux/Constans/AdminConst";

export default function QuanLyNguoiDungAdmin() {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      key: "name",
      render: (text) => <a>{text}</a>,
      width: 150,
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "age",
      width: 200,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "address 1",
      witdh: 300,
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "address 2",
    },
    // {
    //   title: "Mật khẩu",
    //   dataIndex: "matKhau",
    //   key: "address 3",
    // },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "address 4",
    },
    {
      title: "",
      dataIndex: "handle",
      key: "address 5",
      align: "right",
      render: (record, action) => {
        return (
          <>
            <button
              className="btn btn-outline-success mr-3"
              onClick={() => handleUser(action.taiKhoan)}
            >
              Cập nhật
            </button>

            <button
              className="btn btn-outline-danger"
              onClick={() => handleDelete(action.taiKhoan)}
            >
              Xóa
            </button>
          </>
        );
      },
    },
  ];
  const { dsNguoiDung } = useSelector((state) => state.AdminReducer);

  const dsNguoiDungData = dsNguoiDung.map((nguoiDung, i) => {
    return {
      key: i,
      hoTen: nguoiDung.hoTen,
      taiKhoan: nguoiDung.taiKhoan,
      email: nguoiDung.email,
      soDt: nguoiDung.soDt,
      maLoaiNguoiDung: nguoiDung.maLoaiNguoiDung,
    };
  });

  useEffect(() => {
    dispatch({
      type: GET_DANH_SACH_NGUOI_DUNG_ADMIN,
    });
  }, [dsNguoiDung]);

  const handleDelete = (taiKhoan) => {
    dispatch({
      type: XOA_NGUOI_DUNG_ADMIN,
      taiKhoan,
    });
  };

  const handleUser = (taiKhoan) => {
    let user = {};
    user.taiKhoan = taiKhoan;
    dispatch({
      type: GET_THONG_TIN_USER_ADMIN,
      user,
    });
  };

  return (
    <>
      <h3 className="text-center admin__user--text">DANH SÁCH NGƯỜI DÙNG</h3>
      <Table className="table" columns={columns} dataSource={dsNguoiDungData} />
    </>
  );
}
