import classes from './button.module.scss';
import classNames from 'classnames/bind';

const STYLES = ['btnPrimarySolid', 'btnPrimaryOutlined', 'btnWhite'];

const SIZES = ['btnDefault', 'btnWide', 'btnTight'];

let cx = classNames.bind(classes);

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  customClass,
  disabled,
}) => {
  return (
    <div>
      {' '}
      <button
        className={`${cx({
          btn: true,
          btnPrimarySolid: buttonStyle == 'btnPrimarySolid',
          btnPrimaryOutlined: buttonStyle == 'btnPrimaryOutlined',
          btnWhite: buttonStyle == 'btnWhite',
          btnWhiteHover: buttonStyle == 'btnWhiteHover',
          btnLandingPage: buttonStyle == 'btnLandingPage',
          btnDefault: buttonSize == 'btnDefault',
          btnWide: buttonSize == 'btnWide',
          btnTight: buttonSize == 'btnTight',
          btnShort: buttonSize == 'btnShort',
          btnSmall: buttonSize == 'btnSmall',
        })} ${customClass}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};
