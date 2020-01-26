import React from "react";
import {Layout, Menu, Breadcrumb, Icon} from "antd";
import "./App.css";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class App extends React.Component {
    state = {
        collapsed: false
    };

    componentDidMount() {
        document.title = "Grow With AI";
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <Layout style={{minHeight: "100vh"}}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        <Menu.Item>
                            <Icon type="edit" />
                            <span className="logo-text"> Grow With AI</span>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Sentiment Analysis</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Other extra features</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>Clients</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="team" />
                                    <span>Team</span>
                                </span>
                            }
                        >
                            <Menu.Item key="6">Paras Madan</Menu.Item>
                            <Menu.Item key="7">Jay Parmani</Menu.Item>
                            <Menu.Item key="8">Prakhar Jindal</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>Docs</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: "#fff", padding: 0}} />
                    <Content style={{margin: "0 16px"}}>
                        <Breadcrumb style={{margin: "16px 0"}}>
                            <Breadcrumb.Item>Twitter </Breadcrumb.Item>
                            <Breadcrumb.Item>Analysis</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                background: "#fff",
                                minHeight: 360
                            }}
                        >
                            This is the twitter sentimental analysis page
                        </div>
                    </Content>
                    <Footer style={{textAlign: "center"}}>
                        Grow With AI ©2019
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
