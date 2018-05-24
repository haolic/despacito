import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { Layout, Menu, Dropdown, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function IndexPage() {
  
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
  return (
    <Layout>
      <Header>
        <header className={styles.header}>
          <img style={{cursor: 'pointer'}} src="/src/assets/imgs/logo.png" width="100" alt="DESPACITO" />
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
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
