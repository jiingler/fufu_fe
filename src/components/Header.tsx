const Header = () => {
  return (
    <header>
      <nav className="py-5 w-100 nav">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h1>福福堂</h1>
            <div className="d-flex">
              <ul className="menu d-flex">
                <li>
                  <a>最新消息</a>
                </li>
                <li>
                  <a>醫師介紹</a>
                </li>
                <li>
                  <a>診所介紹</a>
                </li>
                <li>
                  <a>服務項目</a>
                </li>
                <li>
                  <a>文章分享</a>
                </li>
              </ul>
              <ul className="text-size d-flex align-items-center">
                <li className="medium">大</li>
                <li className="large">大</li>
                <li className="xlarge">大</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
