import Menu from './Menu';

const Header = () => {
  return (
    <header>
      <nav className="py-md-5 py-2 w-100 nav">
        <div className="container wrap w-100 d-flex align-items-center">
          <div className="w-100 d-flex justify-content-between">
            <h1>福福堂</h1>
            <div className="d-flex">
              <Menu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
