import { useState } from 'react';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onClick = () => {
    setShowMenu(!showMenu);
    const root = document.querySelector('#root') as HTMLDivElement;
    root.style.overflowY = showMenu ? 'auto' : 'hidden';
  };
  return (
    <div>
      <ul className="menu d-md-flex d-none">
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
      <div className="hamburger d-md-none d-block position-absolute" onClick={onClick}>
        <span className={`material-icons ${showMenu ? 'black' : 'white'}`}>
          {showMenu ? 'close' : 'menu'}
        </span>
      </div>
      <div className={`phone-menu position-absolute ${showMenu ? 'show' : 'hide'}`}>
        <ul className="list">
          <li className="py-3">
            <a>最新消息</a>
          </li>
          <li className="py-3">
            <a>醫師介紹</a>
          </li>
          <li className="py-3">
            <a>診所介紹</a>
          </li>
          <li className="py-3">
            <a>服務項目</a>
          </li>
          <li className="py-3">
            <a>文章分享</a>
          </li>
        </ul>
      </div>

      {/* <ul className="text-size d-flex align-items-center">
        <li className="medium">大</li>
        <li className="large">大</li>
        <li className="xlarge">大</li>
      </ul> */}
    </div>
  );
};

export default Menu;
