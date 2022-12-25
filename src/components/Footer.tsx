import logoWhiteV from '../assets/logo/Fufutang-logo-white-line-v.svg';
import { Link } from 'react-router-dom';
import facebook from '../assets/logo/fb.png';
import instagram from '../assets/logo/instagram.png';
import line from '../assets/logo/line.png';

const Footer = () => {
  return (
    <footer className="bg-secondary footer">
      <div className="container top-half d-md-flex align-items-center">
        <div className="logo">
          <img src={logoWhiteV} alt="logo" />
        </div>
        <div className="links ms-md-3">
          <div className="d-md-flex justify-content-around">
            <div className="link mb-md-0 mb-3">
              <h5 className="title">網站連結</h5>
              <ul className="list">
                <li className="py-2">
                  <Link to="/news">最新消息</Link>
                </li>
                <li className="py-2">
                  <Link to="/doctors">醫師介紹</Link>
                </li>
                <li className="py-2">
                  <Link to="/clinics">診所介紹</Link>
                </li>
                <li className="py-2">
                  <a>服務項目</a>
                </li>
                <li className="py-2">
                  <a>文章分享</a>
                </li>
              </ul>
            </div>
            <div className="link mb-md-0 mb-3">
              <h5 className="title">聯絡資訊</h5>
              <ul className="list">
                <li className="py-2">
                  <p>
                    代表電話：
                    <a href="07-xxx-xxxx" type="tel">
                      07-xxx-xxxx
                    </a>
                  </p>
                </li>
                <li className="py-2">
                  <p>代表地址：高雄市xxxxxxxxxxxxxxx</p>
                </li>
              </ul>
            </div>
            <div className="link mb-md-0 mb-3">
              <h5 className="title">關注我們</h5>
              <div className="d-flex">
                <a href="" className="me-3">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="" className="me-3">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="" className="me-3">
                  <img src={line} alt="line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-half">
          <p className="copyright text-center">Copyright © 2023 福福堂 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
