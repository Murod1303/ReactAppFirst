import "./header.css";

const Header = () => {
  return(
    <>
    <header className="site-header">
    <div className="container">
    <div className="site-header__wrapper">
    <strong className="site-header__strong">
    Where in the world?
    </strong>
    <div className="wrapper-darkMode">
    <button className="darkMode" id="darkMode" type="button"></button>
    <span className="darkMode__text">
    Dark Mode
    </span>
    </div>
    </div>
    </div>
    </header>
    </>
    )
  }
  
  export default Header