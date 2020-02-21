import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2><FormattedMessage id="app.footer.contact" /></h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/rfsx0829">
                  GitHub
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/rfsx0829/my-mainpage-src">
                  <FormattedMessage id="app.footer.sourcecode" />
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2><FormattedMessage id="app.footer.friendlinks" /></h2>
              <div>
                <a href="https://www.zhaoj.in/">赵今师傅</a>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2><FormattedMessage id="app.footer.community" /></h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://buuoj.cn/">BUUCTF</a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://stackoverflow.com/">
                  <FormattedMessage id="app.footer.stackoverflow" />
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2><FormattedMessage id="app.footer.thanks" /></h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://ant.design/">Ant Design</a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-motion/ant-design-3.x-landing-page">3.x-landing-page</a>
                <span> - </span>
                <FormattedMessage id="app.footer.3.x-landing-page" />
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">reactjs</a>
                <span> - </span>
                <FormattedMessage id="app.footer.reactjs" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col>
          <a target="_blank" rel="noopener noreferrer" href="http://www.beian.miit.gov.cn/"><span style={{ marginRight: 12 }}>冀ICP备20001504号</span></a>
          <span style={{ marginRight: 0 }}>Powered By </span>
          <a target="_blank" rel="noopener noreferrer" href="https://ant.design/">Ant Design</a>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
