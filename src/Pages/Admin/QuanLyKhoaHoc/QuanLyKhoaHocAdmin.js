import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_DANH_SACH_KHOA_HOC_ADMIN,
  XOA_KHOA_HOC_ADMIN,
} from "../../../Redux/Constans/AdminConst";

export default function QuanLyKhoaHocAdmin() {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Mã khóa học",
      dataIndex: "maKhoaHoc",
      key: "name",
      render: (text) => <a>{text}</a>,
      width: 150,
    },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      key: "name",
      width: 150,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "age",
      width: 200,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "address 1",
      witdh: 500,
      ellipsis: true,
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngayTao",
      key: "address 2",
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      key: "address 3",
    },
    {
      title: "Danh mục khóa học",
      dataIndex: "danhMucKhoaHoc",
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
            <button className="btn btn-outline-success mr-3">Cập nhật</button>
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDelete(action.maKhoaHoc)}
            >
              Xóa
            </button>
          </>
        );
      },
    },
  ];

  const { dsKhoaHocAdmin } = useSelector((state) => state.AdminReducer);

  useEffect(() => {
    dispatch({
      type: GET_DANH_SACH_KHOA_HOC_ADMIN,
    });
  }, [dsKhoaHocAdmin]);

  const dsKhoaHocData = dsKhoaHocAdmin.map((khoaHoc, i) => {
    return {
      key: i,
      maKhoaHoc: khoaHoc.maKhoaHoc,
      tenKhoaHoc: khoaHoc.tenKhoaHoc,
      hinhAnh: <img src={khoaHoc.hinhAnh} alt="" width={150} height={80} />,
      moTa: khoaHoc.moTa,
      ngayTao: khoaHoc.ngayTao,
      nguoiTao: khoaHoc.nguoiTao.hoTen,
      danhMucKhoaHoc: khoaHoc.danhMucKhoaHoc.tenDanhMucKhoaHoc,
    };
  });

  const handleDelete = (maKh) => {
    dispatch({
      type: XOA_KHOA_HOC_ADMIN,
      maKh,
    });
  };

  return (
    <>
      <h3 className="text-center admin__user--text">DANH SÁCH KHÓA HỌC</h3>
      <Table className="table" columns={columns} dataSource={dsKhoaHocData} />
    </>
  );
}
