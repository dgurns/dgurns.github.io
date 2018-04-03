import React from 'react';
import PropTypes from 'prop-types';

export default function Project() {
  return (
    <div className="project">
      <div className="project__image">
        <img src="images/LivingSketchbook1.png" alt="LS1" />
      </div>
      <div className="project__infoContainer">
        <div className="project__infoSection">
          Living Sketchbook Vol. 1: Boyhood Home
        </div>
        <div className="project__infoSection">
          <div className="project__appStoreImage">
            <a href="https://itunes.apple.com/us/app/living-sketchbook-vol-1-boyhood-home/id1209783393?ls=1&mt=8">
              <img src="images/AppStore.png" alt="AS" />
            </a>
          </div>
          <div className="project__appStoreImage">
            <a href="https://play.google.com/store/apps/details?id=com.livingsketchbook1">
              <img src="images/GooglePlay.png" alt="GP" />
            </a>
          </div>
        </div>
        <div className="project__infoSection">
          <a href="https://medium.com/@dgurns/building-the-living-sketchbook-app-231a1cf5252">
            Read about the build process
          </a>
        </div>
      </div>
    </div>
  );
}

// Project.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   linkText: PropTypes.string,
//   linkHref: PropTypes.string,
//   appStoreLink: PropTypes.string,
//   playStoreLink: PropTyeps.string
// }
