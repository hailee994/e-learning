import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LAY_KHOA_HOC_DANH_MUC } from "../../Redux/Constans/ClientConst";

export default function KhoaHocTheoMuc(props) {
  // console.log(props.match.params.danhmuc);
  const dispatch = useDispatch();
  let maDM = props.match.params.danhmuc;
  useEffect(() => {
    dispatch({
      type: LAY_KHOA_HOC_DANH_MUC,
      maDM,
    });
  }, [maDM]);

  const { khoaHocDM } = useSelector((state) => state.ClientReducer);

  const renderKhoaHocDM = () => {
    return khoaHocDM.map((item, i) => {
      return (
        <div className="col-sm-12 col-lg-4 mb-5" key={i}>
          <div className="card item">
            <img className="card-img-top" src={item.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title">{item.tenKhoaHoc}</h4>
              <p className="card-text">{item.moTa}</p>
              <NavLink
                className="btn btn-success btn-see"
                to={"/khoahoc/" + item.maKhoaHoc}
              >
                Xem thêm
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container khoaHocTheoMuc">
      <div className="row">{renderKhoaHocDM()}</div>
    </div>
  );
}
