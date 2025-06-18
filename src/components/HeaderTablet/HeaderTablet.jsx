import './headerTablet.scss';
import React from 'react';

const HeaderTablet = () => {
  return (
    <div className="header">
      <div className="navPanel">
        <div className="navPanel__left">AppStarter</div>
        <div className="navPanel__right">
          <a className="navPanel__right-menu">Features</a>
          <a className="navPanel__right-menu">Video Tour</a>
          <a className="navPanel__right-menu">Reviews</a>
          <a className="navPanel__right-menu">Pricing</a>
          <button className="button button__white">GET IT FREE</button>
        </div>
      </div>
      <div className="tablet">
        <div className="tablet__logo">
          <img className="tablet__logo-img" src="/public/A.jpg" alt="" />
        </div>
        <div className="tablet__text">
          <span className="boldText">AppStarter.</span> Best landing page for web and mobile apps
        </div>
        <div className="tablet__bottoms">
          <button className="button button__orange">Download Now</button>
          <button className="button button__white">Watch Video</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTablet;
