import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LAY_DANH_MUC } from "../../../Redux/Constans/ClientConst";

export default function DanhMuc() {
  const { danhMuc } = useSelector((state) => state.ClientReducer);

  const renderDanhMuc = () => {
    return danhMuc.map((item, i) => {
      return (
        <div className="col-4 mb-3 text-center" key={i}>
          <button className="btn btn-success btn-see">{item.tenDanhMuc}</button>
        </div>
      );
    });
  };

  return (
    <div className="container danhMucHome">
      <h2 className="text-center text">DANH MỤC CÁC KHÓA HỌC</h2>
      <div className="row">{renderDanhMuc()}</div>
    </div>
  );
}
