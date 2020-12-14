import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  LAY_DS_KHOA_HOC_CHO_DUYET,
  XOA_KHOA_HOC,
} from "../../Redux/Constans/ClientConst";
import { history } from "../../Utils/history";

export default function ListKhoaHocDk(props) {
  const dispatch = useDispatch();
  const { thongTinUser } = useSelector((state) => state.ClientReducer);

  const renderKhoaHocGhiDanh = () => {
    return thongTinUser.chiTietKhoaHocGhiDanh?.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.tenKhoaHoc}</td>
          <td>
            <a
              className="text-danger"
              onClick={() => handleDelete(item.maKhoaHoc)}
            >
              <span>
                <i className="fa fa-trash-alt"></i>
              </span>{" "}
              Hủy đăng ký
            </a>
          </td>
        </tr>
      );
    });
  };

  const handleDelete = (maKhoaHoc) => {
    let huyKhoaHoc = {};
    huyKhoaHoc.taiKhoan = thongTinUser.taiKhoan;
    huyKhoaHoc.maKhoaHoc = maKhoaHoc;
    dispatch({
      type: XOA_KHOA_HOC,
      huyKhoaHoc,
    });
    history.push("/");
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Tên khóa học</th>
            <th></th>
          </tr>
        </thead>

        <tbody>{renderKhoaHocGhiDanh()}</tbody>
      </table>
      <NavLink className="navHide" exact to="/thongtinhocvien">
        <i class="fa fa-angle-double-left"></i> Trở về
      </NavLink>
    </div>
  );
}
