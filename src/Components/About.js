import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="/myPhoto.PNG" alt="Hung-Han Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <ul>
                <li>● Experienced in Java, Spring Boot, Python, Jenkins, Django, Maven, AngularJS, database design, MySQL, Mainframe, , and Restful API through hand-on projects and internship experience</li>
                <li>● Deployed SonarQube in OpenShift building Dockerfile and yaml file to configure Toad Database, CPU size and documentation</li>
                <li>● Developed automated Python script which manages to switch different working environments</li>
                <li>● Monitored and analysed applications performance through Grafana, Dynatrace, OpenShift, and Splunk</li>
                <li>● Create automated CI/CD pipeline which set up for bitbucket branch, build automation, and deploy in the Wildfly server using Jenkins</li>
                <li>● Developed personal Airplane schedule tracker website through Django, RESTful API, Angular and PostgreSQL skills</li>
              </ul>   
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="/Hung-Han Chen - Resume.pdf" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
