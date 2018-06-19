import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import styles from './IndexPage.less';
import $ from 'jquery';
import {
  Layout,
  Menu,
  Dropdown,
  Icon,
  Pagination,
} from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class IndexPage extends React.Component {
  toggleCollapse() {
    const { dispatch } = this.props;
    dispatch({
      type: 'indexPage/toggleCollapse'
    })
  }
  componentDidMount() {
    $('.ant-pagination-item-active').siblings('.ant-pagination-item, .ant-pagination-jump-next').hide();
  }
  pageChange() {
    setTimeout(() => {
      $('.ant-pagination-item-active').show().siblings('.ant-pagination-item, .ant-pagination-jump-next, .ant-pagination-jump-prev').hide();
    })
  }
  render() {
    const { indexPage } = this.props;
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to={{ pathname: "/setting", }}>
            <span>设置</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <span className={styles.logout}>退出</span>
        </Menu.Item>
      </Menu>
    );
    const itemRender = (current, type, originalElement) => {
      if (type === 'prev') {
        return <span>Previous</span>;
      } else if (type === 'next') {
        return <span>Next</span>;
      }
      return originalElement;
    }
    return (
      <Layout>
        <Header>
          <header className={styles.header}>
            <img style={{ cursor: 'pointer' }} src="/src/assets/imgs/logo.png" width="70" alt="DESPACITO" />
            <span className={styles.title}>DESPACITO</span>
            <div className={styles.userarea}>
              <span>欢迎您：</span>
              <Dropdown overlay={menu}>
                <span className={styles.username}>
                  发如雪 <Icon type="down" />
                </span>
              </Dropdown>
            </div>
          </header>
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsed={indexPage.isMenuCollapsed}
            trigger={null}
            style={{ paddingBottom: 45 }}
          >
            <div style={{ width: 200, position: 'relative' }}>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={indexPage.isMenuCollapsed}
              >
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span>Option 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="inbox" />
                  <span>Option 3</span>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </SubMenu>
              </Menu>

            </div>
            <div onClick={this.toggleCollapse.bind(this)} className={styles.btnExplanWrap} style={{ width: indexPage.isMenuCollapsed ? 80 : '' }}>
              <Icon type={indexPage.isMenuCollapsed ? "menu-unfold" : "menu-fold"} />
            </div>
          </Sider>
          <Content className={styles.content}>
            <div>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <p>12345</p>
              <Pagination
                onShowSizeChange={this.pageChange.bind(this)}
                onChange={this.pageChange.bind(this)}
                total={500}
                showSizeChanger
                showQuickJumper
                itemRender={itemRender}
              />
            </div>
          </Content>
        </Layout>
        <Footer>
          <div className={styles.footer}>
            <span>@版权所有</span>
          </div>
        </Footer>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
};

export default connect(({ indexPage }) => ({
  indexPage,
}))(IndexPage);
