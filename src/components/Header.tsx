const Header = () => {
  return (
    <header>
      <nav className="py-5 w-100 nav">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h1>福福堂</h1>
            <ul className="d-flex">
              <li>最新消息</li>
              <li>醫師介紹</li>
              <li>診所介紹</li>
              <li>服務項目</li>
              <li>文章分享</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
