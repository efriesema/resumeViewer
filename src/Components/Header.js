import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header id="home">

        <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	       <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	          <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul> 

         </nav> 

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">What's your Dream?</h1>
            <h3>My name is <span>Edward Friesema</span>. I'm a Las Vegas-based <span>application developer</span>.  My mission is to 
            use the tremendous power of modern computing to help you break through your obstacles and achieve your goals. 
            <a className="smoothscroll" href="#about"> Start scrolling</a> to learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
               <li><a href="https://www.facebook.com/ed.friesema" target="_blank"><i className="fa fa-facebook"></i></a></li>
               <li><a href="#"><i className="fa fa-twitter"></i></a></li>
               <li><a href="https://www.linkedin.com/in/ed-friesema-97b05632/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
               <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
               <li><a href="https://github.com/efriesema" target="_blank"><i className="fa fa-github"></i></a></li>
               
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

    </header>
    );
  }
}

export default Header;
