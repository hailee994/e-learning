import { NavLink, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { ACCESSTOKEN, USER_LOGIN } from "../Utils/Config";
import { history } from "../Utils/history";

export const AdminTemplate = (props) => {
  const { Component, ...restParams } = props;
  const [state, setState] = useState({
    collapsed: false,
  });
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(ACCESSTOKEN);
    history.push("/");
  };

  return (
    <Route
      {...restParams}
      render={(restRoute) => {
        return (
          <>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider
                collapsible
                collapsed={state.collapsed}
                onCollapse={onCollapse}
              >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <div
                    key="1"
                    className="text-center"
                    style={{ height: "70px", padding: "5% 0" }}
                  >
                    <img
                      src="https://picsum.photos/60/60"
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <Menu.Item key="2">
                    <h3
                      style={{
                        color: "orange",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      CyberLearn
                    </h3>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    icon={<UserOutlined />}
                    title="Danh mục người dùng"
                  >
                    <Menu.Item key="3">
                      <NavLink exact to="/admin/quanlynguoidung">
                        Quản lý người dùng
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <NavLink exact to="/admin/themnguoidung">
                        Thêm người dùng
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    icon={<BookOutlined />}
                    title="Danh mục khóa học"
                  >
                    <Menu.Item key="6">
                      <NavLink exact to="/admin/quanlykhoahoc">
                        Quản lý khóa học
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="8">
                      <NavLink exact to="/admin/themkhoahoc">
                        Thêm khóa học
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <Menu.Item
                    key="9"
                    icon={<LogoutOutlined />}
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Content style={{ margin: "0 16px" }}>
                  {/* <Breadcrumb style={{ margin: "10px 0" }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                  </Breadcrumb> */}
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                  >
                    <Component {...restRoute} />
                  </div>
                </Content>
                <Footer
                  className="footer"
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  <h3>CyberLearn</h3>
                </Footer>
              </Layout>
            </Layout>
          </>
        );
      }}
    />
  );
};
