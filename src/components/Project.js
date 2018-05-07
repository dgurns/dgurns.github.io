import React from 'react';
import PropTypes from 'prop-types';

export default function Project(props) {
  const {
    imageFile,
    title,
    description,
    descriptionLink,
    appStoreLink,
    playStoreLink,
    webLink,
  } = props;

  return (
    <div className="project">
      <img
        src={`/public/images/${imageFile}`}
        alt={imageFile}
        className="project__image"
      />
      <div className="project__infoContainer">
        <div className="project__infoSection">{title}</div>
        <div className="project__infoSection">
          {webLink &&
            <a href={webLink} className="button">
              View on web
            </a>
          }
          {appStoreLink &&
            <a href={appStoreLink}>
              <img
                src="/public/images/AppStore.png"
                alt="App Store"
                className="project__appStoreImage"
              />
            </a>
          }
          {playStoreLink &&
            <a href={playStoreLink}>
              <img
                src="/public/images/GooglePlay.png"
                alt="Google Play"
                className="project__appStoreImage"
              />
            </a>
          }
        </div>
        <div className="project__infoSection">
          {descriptionLink && description
            ? <a href={descriptionLink}>{description}</a>
            : <span className="project__description">{description}</span>
          }
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  imageFile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  descriptionLink: PropTypes.string,
  appStoreLink: PropTypes.string,
  playStoreLink: PropTypes.string,
  webLink: PropTypes.string
};
