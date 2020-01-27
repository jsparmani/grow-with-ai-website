import React from "react";
import {
    Layout,
    Menu,
    Breadcrumb,
    Icon,
    Typography,
    Input,
    Button,
    message,
    Modal
} from "antd";
import "./App.css";
import axios from "axios";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const success = () => {
    const hide = message.loading("Action in progress..", 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
};

class App extends React.Component {
    state = {
        collapsed: false,
        loading: false,
        iconLoading: false,
        modalVisible: false,
        data: "",
        search_text: ""
    };

    getResults = () => {
        this.setState({loading: true});
        success();
        let url = `https://growwithai.pythonanywhere.com/predict_api?value=${this.state.search_text}`;
        console.log(url);
        axios
            .get(url)
            .then(res => {
                this.setState({data: res.data});
                this.setState({
                    loading: false,
                    modalVisible: true,
                    search_text: ""
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({loading: false});
            });
    };

    componentDidMount() {
        document.title = "Grow With AI";
    }

    enterIconLoading = () => {
        this.setState({iconLoading: true});
    };

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
                    <Header style={{background: "#fff", padding: 0}}>
                        <Typography.Title className="title" ellipsis underline>
                            Twitter Sentimental Analysis
                        </Typography.Title>
                    </Header>
                    <Content style={{margin: "0 16px"}}>
                        <Breadcrumb style={{margin: "16px 0"}}>
                            <Breadcrumb.Item>Twitter </Breadcrumb.Item>
                            <Breadcrumb.Item>Analysis</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                background: "#fff",
                                minHeight: 360,
                                textAlign: "center"
                            }}
                        >
                            Enter any #s, keywords below for further processing
                            <Modal
                                title="Your graphical result"
                                centered
                                visible={this.state.modalVisible}
                                onOk={() =>
                                    this.setState({modalVisible: false})
                                }
                                onCancel={() =>
                                    this.setState({modalVisible: false})
                                }
                            >
                                <img
                                    src={`data:image/jpeg;base64,${this.state.data}`}
                                    width="450"
                                />
                            </Modal>
                            <div
                                style={{
                                    padding: 24,
                                    marginTop: 50
                                }}
                            >
                                <Input
                                    size="large"
                                    placeholder="Get your results"
                                    allowClear
                                    name="search_text"
                                    value={this.state.search_text}
                                    onChange={e => {
                                        this.setState({
                                            [e.target.name]: e.target.value
                                        });
                                    }}
                                    onPressEnter={() => {
                                        this.getResults();
                                    }}
                                />
                                <Button
                                    shape="round"
                                    ghost
                                    type="primary"
                                    loading={this.state.loading}
                                    onClick={this.getResults}
                                    size="large"
                                    style={{
                                        margin: 35
                                    }}
                                >
                                    Get Results!
                                </Button>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{textAlign: "center"}}>
                        Grow With AI ©2020
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
