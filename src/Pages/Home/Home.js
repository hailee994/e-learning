import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  LAY_DS_KHOA_HOC_DANG_KY,
  LAY_KHOA_HOC_MOI,
} from "../../Redux/Constans/ClientConst";
import KhoaHocMoi from "./KhoaHocMoi/KhoaHocMoi";
import ThongKe from "./ThongKe";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LAY_KHOA_HOC_MOI,
    });
  }, []);

  return (
    <div>
      <div className="carousel mb-5">
        {/* <img className="img-fluid" src="./public/img/home-img.jpg" /> */}
        <div className="bg"></div>

        <div className="container carousel_text">
          <div className="col-sm-12 col-lg-6">
            <p>Học lập trình với các khóa học chất lượng để đi làm!</p>
            <h1 className="text-light">CỘNG ĐỒNG HỌC LẬP TRÌNH MIỄN PHÍ</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <ThongKe />
          <KhoaHocMoi />
        </div>
      </div>
    </div>
  );
}
