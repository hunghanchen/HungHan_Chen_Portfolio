import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return <div style={{marginBottom: 50}} key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} &emsp; <span><i className="fa fa-bookmark"></i></span><em className="date">{education.graduated}</em></p>
          <ul>
            {education.description.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </div>
      })
      var work = this.props.data.work.map(function (work) {
        return (<div style={{marginBottom: 50}} key={work.company}>
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

          <div className=" header-col" style={{textAlign: 'center',marginBottom: 80}}>
            <h1><span>Work experience</span></h1>
          </div>

          <div className=" main-col">
            {work}
          </div>
        </div>
        <hr></hr>

        <div className="row education">
          
        <div className=" header-col" style={{textAlign: 'center',marginBottom: 80}}>
            <h1><span>Education</span></h1>
          </div>
         

          <div className="main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>



        <div className="row skill">

          

          <div className=" header-col" style={{textAlign: 'center',marginBottom: 80}}>
            <h1><span>Skills</span></h1>
          </div>
          
          <div className="main-col" style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginBottom: 80}}>


            <table className="table table-striped w-auto" style={{width: '100%'}}>

              <thead>
                <tr style={{color : "white" ,backgroundColor: "#077187"}} >
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
                <tr style={{backgroundColor:'#e5f0f1'}}>
                  <th scope="row" >#</th>
                  <td>Programing Languages</td>
                  <td>Java, Spring, Python, C#.NET, RESTful API</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr className="table-info" style={{backgroundColor:'#f5f5f5'}}>
                  <th scope="row">#</th>
                  <td>Web development</td>
                  <td>JavaScript , Angular, ReactJS, Web Scraping</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr style={{backgroundColor:'#e5f0f1'}}>
                  <th scope="row">#</th>
                  <td>Mobile development</td>
                  <td>iOS development, Andriod development</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr className="table-info" style={{backgroundColor:'#f5f5f5'}}>
                  <th scope="row">#</th>
                  <td>Database</td>
                  <td>MySQL, MongoDB, PostgreSQL, Scala, Flume, Hadoop</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr style={{backgroundColor:'#e5f0f1'}}>
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
