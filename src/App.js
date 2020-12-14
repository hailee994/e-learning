import "./App.scss";
import { MainTemplate } from "./Templates/MainTemplate";
import Home from "./Pages/Home/Home";
import { Switch } from "react-router-dom";
import KhoaHocTheoMuc from "./Pages/KhoaHocTheoMuc/KhoaHocTheoMuc";
import { HomeTemplate } from "./Templates/HomeTemplate";
import KhoaHoc from "./Pages/KhoaHoc/KhoaHoc";
import DangNhap from "./Components/FormLayout/DangNhap";
import { FormTemplate } from "./Templates/FormTemplate";
import DangKy from "./Components/FormLayout/DangKy";
import { UserTemplate } from "./Templates/UserTemplate";
import UserProfileComponent from "./Components/User/UserProfileComponent";
import EditUserComponent from "./Components/User/EditUserComponent";
import DanhSachKhoaHocDk from "./Components/User/DanhSachKhoaHocDk";
import { AdminTemplate } from "./Templates/AdminTemplate";
import QuanLyNguoiDungAdmin from "./Pages/Admin/QuanLyNguoiDung/QuanLyNguoiDungAdmin";
import ThemNguoiDungAdmin from "./Pages/Admin/QuanLyNguoiDung/ThemNguoiDungAdmin";
import QuanLyKhoaHocAdmin from "./Pages/Admin/QuanLyKhoaHoc/QuanLyKhoaHocAdmin";
import ThemKhoaHocAdmin from "./Pages/Admin/QuanLyKhoaHoc/ThemKhoaHocAdmin";

function App() {
  return (
    <Switch>
      <HomeTemplate exact path="/" Component={Home} />

      <MainTemplate exact path="/danhmuc/:danhmuc" Component={KhoaHocTheoMuc} />
      <MainTemplate exact path="/khoahoc/:makhoahoc" Component={KhoaHoc} />

      <FormTemplate exact path="/dangnhap" Component={DangNhap} />
      <FormTemplate exact path="/dangky" Component={DangKy} />

      <UserTemplate
        exact
        path="/thongtinhocvien"
        Component={UserProfileComponent}
      />
      <UserTemplate
        exact
        path="/chinhsuathongtin"
        Component={EditUserComponent}
      />
      <UserTemplate
        exact
        path="/khoahocdadangky"
        Component={DanhSachKhoaHocDk}
      />

      <AdminTemplate
        exact
        path="/admin/quanlynguoidung"
        Component={QuanLyNguoiDungAdmin}
      />
      <AdminTemplate
        exact
        path="/admin/themnguoidung"
        Component={ThemNguoiDungAdmin}
      />
      <AdminTemplate
        exact
        path="/admin/quanlykhoahoc"
        Component={QuanLyKhoaHocAdmin}
      />
      <AdminTemplate
        exact
        path="/admin/themkhoahoc"
        Component={ThemKhoaHocAdmin}
      />
    </Switch>
  );
}

export default App;
