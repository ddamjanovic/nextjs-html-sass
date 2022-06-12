import classes from './footerInformation.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FooterInformation = ({ title, links }) => {
  const router = useRouter();

  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <h1>{title}</h1>
      </div>
      <div className={classes.list}>
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <Link href={`/${link.route}`}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterInformation;
