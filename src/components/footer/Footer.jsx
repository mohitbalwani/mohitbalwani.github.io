import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Mohit's Portfolio</h3>
          <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br />
            Please wait for a while all major projects will be listed soon. Till then keep visiting. Connect with me over live chat!</p>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="#home"><i className="fas fa-chevron-circle-right"></i> home</a>
          <a href="#about"><i className="fas fa-chevron-circle-right"></i> about</a>
          <a href="#skills"><i className="fas fa-chevron-circle-right"></i> skills</a>
          <a href="#education"><i className="fas fa-chevron-circle-right"></i> education</a>
          <a href="#work"><i className="fas fa-chevron-circle-right"></i> work</a>
          <a href="#experience"><i className="fas fa-chevron-circle-right"></i> experience</a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <p> <i className="fas fa-envelope"></i>mohitbalwani5@gmail.com</p>
          <p> <i className="fas fa-map-marked-alt"></i>Pune, India - 411041</p>
          <div className="share">
            <a href="https://www.linkedin.com/in/mohitbalwani" className="fab fa-linkedin" target="_blank"></a>
            <a href="https://github.com/mohitbalwani" className="fab fa-github" target="_blank"></a>
            <a href="mailto:mohitbalwani5@gmail.com" className="fas fa-envelope" target="_blank"></a>
            <a href="https://twitter.com/_MohitBalwani" className="fab fa-twitter" target="_blank"></a>
            <a href="https://www.instagram.com/mohitbalwani/" className="fab fa-instagram" target="_blank"></a>
            {/* <a href="https://www.youtube.com/c/</na>" className="fab fa-youtube" target="_blank"></a> */}
          </div>
        </div>
      </div>
      <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="#"> Mohit Balwani</a></h1>
    </section>
  );
};

export default Footer;
