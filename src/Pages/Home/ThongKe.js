import React from "react";

export default function ThongKe() {
  return (
    <div className="container thongKe mb-5">
      <div className="row">
        <div className="col-sm-12 col-lg-4 text-center mb-5">
          <img src="./public/img/feature-1.png" alt="" />
          <p className="mt-3">Trên 18.643 học viên</p>
        </div>

        <div className="col-sm-12 col-lg-4 text-center mb-5">
          <img src="./public/img/feature-2.png" alt="" />
          <p className="mt-3">8+ khóa học dành cho bạn</p>
        </div>

        <div className="col-sm-12 col-lg-4 text-center mb-5">
          <img src="./public/img/feature-3.png" alt="" />
          <p className="mt-3">Học bất cứ lúc nào, bất cứ nơi đâu</p>
        </div>
      </div>
    </div>
  );
}
