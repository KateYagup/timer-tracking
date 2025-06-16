import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__appStarter">AppStarter</div>
      <div className="footer__author">
        <p className='created'>
          Created with   <img className='heart' src="src/components/footer/Heart Filled Icon.jpg" alt="" />
            by <span className='sergey'>Sergey Azovskiy</span>
        </p>
        <p className="year">© AppStarter, 2017</p>
      </div>
      <div className="footer__icons">
        <div className="footer__icon left">
          <img src="src/components/footer/icon_1.jpg" alt="" />
        </div>
        <div className="footer__icon">
          <img src="src/components/footer/icon_2.jpg" alt="" />
        </div>
        <div className="footer__icon right">
          <img src="src/components/footer/icon_3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
