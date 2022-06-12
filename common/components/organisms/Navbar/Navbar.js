import Link from 'next/link';
import classes from './Navbar.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { getNavbarContent } from '../../../services/content/navbarContentService';

const Navbar = ({ isHomePage, shadow }) => {
  const [navContent, setNavContent] = useState([]);

  useEffect(async () => {
    setNavContent(await getNavbarContent());
  }, []);

  return <div></div>
};

export default Navbar;
