import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var description = this.props.data.description;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">Hung-Han Chen</h1>
                  <h3>Software Engineer</h3>
                  <hr />

                  <ul className="social">
                  <li><a href="https://www.linkedin.com/in/hunghan-chen-70710b8b/"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="https://github.com/hunghanchen?tab=repositories"><i className="fa fa-github"></i></a></li>
                  <li><a href="mailto:chenhung@sheridancollege.ca"><i className="fa fa-envelope"></i></a></li>
                  <li><a href="https://drive.google.com/file/d/1319ctMOiyQAMVY0KBTEeHUdIo_f8DlJ5/view?usp=sharing"><i className="fa fa-download"></i></a></li>
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
