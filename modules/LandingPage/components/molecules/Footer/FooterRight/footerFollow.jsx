import classes from './footerFollow.module.scss';
import ImageLoader from '../../../../../../common/components/atoms/ImageLoader/ImageLoader';

const FollowUs = ({ title, assets }) => {
  return (
    <div className={classes.main}>
      <div className={classes.follow}>
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
        <div className={classes.images}>
          <div className={classes.imageStyle}>
            <ImageLoader
              alt="linkedin follow image"
              name="linkedinimage"
              src={assets?.Linkedin}
              width={44}
              height={44}
            />
          </div>

          <div className={classes.imageStyle}>
            <ImageLoader
              alt="facebook follow image"
              name="facebookimage"
              src={assets?.Facebook}
              width={44}
              height={44}
            />
          </div>

          <div className={classes.imageStyle}>
            <ImageLoader
              alt="twitter follow image"
              name="twitterimage"
              src={assets?.Twitter}
              width={44}
              height={44}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
