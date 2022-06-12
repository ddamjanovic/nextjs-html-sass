import Navbar from '../Navbar/Navbar';
import classes from './Layout.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

const Layout = ({ children, isHomePage, shadow }) => {
  let cx = classNames.bind(classes);

  return (
    <>
      <Navbar isHomePage={isHomePage} shadow={shadow} />
      <div className="main-container">
        <div
          className={cx({
            contentWrapper: true
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
