import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="row">
         <div className="twelve columns">
            <ul className="social-links">
               <li><a href="https://www.facebook.com/ed.friesema" target="_blank"><i className="fa fa-facebook"></i></a></li>
               <li><a href="#"><i className="fa fa-twitter"></i></a></li>
               <li><a href="https://www.linkedin.com/in/ed-friesema-97b05632/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
               <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
               <li><a href="https://github.com/efriesema" target="_blank"><i className="fa fa-github"></i></a></li>
            </ul>
            <ul className="copyright">
               <li>&copy; Copyright 2014 CeeVee</li>
               <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
            </ul>
         </div>
         <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
   </footer>
    );
  }
}

export default Footer;
