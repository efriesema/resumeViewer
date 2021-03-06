import React, { Component } from 'react';


class Resume extends Component {
  render() {
        if(this.props.data){
            var education = this.props.data.education.map(function(edu){
                return <div key={edu.school} className="row item">
                         <div className="twelve columns">
                            <h3>{edu.school}</h3>
                            <p className="info">{edu.degree}<span>&bull;</span> <em className="date">{edu.graduated}</em></p>
                            <p>{edu.description}</p>
                         </div>
                       </div>
            });
            var work = this.props.data.work.map(function(job){
                return<div key={job.company} className="row item">
                         <div className="twelve columns">
                          <h3>{job.company}</h3>
                            <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>
                            <p>{job.description}</p>
                         </div>
                       </div>
            });
            var skills = this.props.data.skills.map(function(skill){
              var className = 'bar-expand '+skill.name.toLowerCase();
              return <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.title}</em></li>
            });
    }

    return (
      <section id="resume">

      {/* Education section*/}
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>
         <div className="nine columns main-col">
              {education}
         </div> 
      </div> 

    {/*Work Experience Section*/}
      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>
         <div className="nine columns main-col">
              {work}
         </div> 
      </div> 


      {/* Skills Section */}
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
            <p>I developed this website using ReactJS as a showcase for my projects and to give interested people an easy way to see my work 
            and give me feedback on what they like. My interests include machine learning, virtual reality and application development.  
            The scale for the graph below begins at a basic familarity with the syntax and capabilities of the technology at the far left and moves to a deep 
            understanding of the capabilities and pitfalls of using the technology at the far right
            </p>

				<div className="bars">
				   <ul className="skills">
					   {skills}
					</ul>
				</div>
			</div> 
      </div> 
   </section>
    );
  }
}

export default Resume;
