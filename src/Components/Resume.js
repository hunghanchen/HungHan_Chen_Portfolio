import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return <div style={{ marginBottom: 50 }} key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} &emsp; <span><i className="fa fa-bookmark"></i></span><em className="date">{education.graduated}</em></p>
          <ul>
            {education.description.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </div>
      })
      var work = this.props.data.work.map(function (work) {
        return (<div style={{ marginBottom: 50 }} key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">{work.title}&emsp;<span><i className="fa fa-clock-o"></i></span> <em className="date">{work.years}</em></p>
          <ul>
            {work.description.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </div>
        )
      })

    }

    return (
      <section id="resume">

        <div className="row work">

          <div className=" header-col" style={{ textAlign: 'center', marginBottom: 80 }}>
            <h1><span>Work experience</span></h1>
          </div>

          <div className=" main-col">
            <div style={{ marginBottom: 50 }}>
              <h3>RBC</h3>
              <p className="info">DevOps Developer&emsp;<span><i className="fa fa-clock-o"></i></span> <em className="date">May 2021 - Aug 2021</em></p>
              <ui>
                <li>Developed and bug fixed Jenkins’s pipeline and maintained continuous integration (CI) and Continuous deployment (CD) processes</li>
                <li>Deployed SonarQube in OpenShift building Dockerfile and YAML file to configure Toad Database, CPU size, and documentation"</li>
                <li>Developed JUnit test for REST API and GraphQL projects to achieve the team's target coverage"</li>
                <li>Developed new features and fixed bugs through Spring Framework</li>
              </ui>
            </div>
            <div style={{ marginBottom: 50 }}>
              <h3>CIBC</h3>
              <p className="info">Application Production Analyst&emsp;<span><i className="fa fa-clock-o"></i></span> <em className="date">Sep 2020 - Dec 2020</em></p>
              <ui>
                <li>Monitored applications performance using Dynatrace, and Grafana to analyze application’s instances e.g. Response time, failure rate, average throughput, etc.</li>
                <li>Analyzed correlates real-time data and diagnose logs and batch file to support applications using Splunk and OpenShift"</li>
                <li>Developed web application to scrape various banks rates and special offers and compare using Python, Beautiful Soup library, and Selenium</li>
                <li>Explored alternate features and implement new tools in order to be more user-friendly</li>
              </ui>
            </div>
            <div style={{ marginBottom: 50 }}>
              <h3>TD</h3>
              <p className="info">Developer&emsp;<span><i className="fa fa-clock-o"></i></span> <em className="date">Jan 2020 - Apr 2020</em></p>
              <ui>
                <li>Designed and developed automation switch working environment script using Python</li>
                <li>Create automated CI/CD pipeline which set up for bitbucket branch, build automation, and deploy in the Wildfly server using Jenkins</li>
                <li>Worked on mainframe with credit team modify programs and JCL to generate standard mortgage reports</li>
                <li>Used AngularJS services to integrate with RESTful APIs calls to Java backend, and web design</li>
                <li>Developed new of existing features and fix bugs through Java, and PostgreSQL</li>
                <li>Involved in Agile/SCRUM process, participate daily meeting and work on tasks in sprints</li>
              </ui>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="row education">

          <div className=" header-col" style={{ textAlign: 'center', marginBottom: 80 }}>
            <h1><span>Education</span></h1>
          </div>


          <div className="main-col">
            <div className="row item">
              <div className="twelve columns">
                <div style={{ marginBottom: 50 }}>
                  <h3>Sheridan Institute of Technology and Advanced Learning</h3>
                  <p className="info">Advanced Diploma &emsp; <span><i className="fa fa-bookmark"></i></span><em className="date">2018 - 2021</em></p>
                  <ul>
                  <li>• Graduated with a strong academic standing GPA of 3.8/4.0</li>
                  <li>• Sheridan Student Union/ International Student Community</li>
                  <li>• Obtained 3 terms of internship as a Developer at TD Bank, CIBC, and RBC</li>
                  </ul>
                </div>
                <div style={{ marginBottom: 50 }}>
                  <h3>National Taipei University of Business</h3>
                  <p className="info">Bachelor of Department of International Business &emsp; <span><i className="fa fa-bookmark"></i></span><em className="date">2009 - 2013</em></p>
                  <ul>
                  <li>• International trade expertise, finance expertise, management expertise and ethics, innovation and integration ability</li>
                  <li>• Internship in department of insurance at Fubon bank for four months and passed Personal insurance representative exam to obtained certificate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="row skill">



          <div className=" header-col" style={{ textAlign: 'center', marginBottom: 80 }}>
            <h1><span>Skills</span></h1>
          </div>

          <div className="main-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 80 }}>


            <table className="table table-striped w-auto" style={{ width: '100%' }}>

              <thead>
                <tr style={{ color: "white", backgroundColor: "#077187" }} >
                  <th></th>
                  <th>Technologies</th>
                  <th>Knowledge</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr style={{ backgroundColor: '#e5f0f1' }}>
                  <th scope="row" >#</th>
                  <td>Programing Languages</td>
                  <td>Java, Spring, Python, C#.NET, RESTful API</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr className="table-info" style={{ backgroundColor: '#f5f5f5' }}>
                  <th scope="row">#</th>
                  <td>Web development</td>
                  <td>JavaScript , Angular, ReactJS, Web Scraping</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr style={{ backgroundColor: '#e5f0f1' }}>
                  <th scope="row">#</th>
                  <td>Mobile development</td>
                  <td>iOS development, Andriod development</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr className="table-info" style={{ backgroundColor: '#f5f5f5' }}>
                  <th scope="row">#</th>
                  <td>Database</td>
                  <td>MySQL, MongoDB, PostgreSQL, Scala, Flume, Hadoop</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr style={{ backgroundColor: '#e5f0f1' }}>
                  <th scope="row">#</th>
                  <td>Software and Framwork</td>
                  <td>Linux/Unix, Git, Jenkins, Spring Boot, AWS, Terraform, OpenShift</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>

              </tbody>


            </table>


          </div>
        </div>
      </section >
    );
  }
}

export default Resume;
