import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer >

     <div className="row" >
        <div className="twelve columns">
           <ul className="social-links">
           <li><a href="https://www.linkedin.com/in/hunghan-chen-70710b8b/"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="https://github.com/hunghanchen?tab=repositories"><i className="fa fa-github"></i></a></li>
                  <li><a href="mailto:chenhung@sheridancollege.ca"><i className="fa fa-envelope"></i></a></li>
                  <li><a href="/Hung-Han Chen - Resume.pdf"><i className="fa fa-download"></i></a></li>           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
