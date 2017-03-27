import React, { Component } from 'react';


class Resume extends Component {
  render() {
    return (
      <section id="resume">

      {/* Education section*/}
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                  <h3>University of California - San Diego</h3>
                  <p className="info">Masters in Electrical and Computer Engineering -Optics Specialization <span>&bull;</span> <em className="date">grad. June 2003</em></p>
                  <p>
                       3.3 GPA Thesis :  Developed and tested an opto-electronic ultra-fast switch using a piezo-electric transducer. 
                       Led discussion sections, held office hours, and graded labs and exams  for undergraduate engineering courses
                  </p>
               </div>
            </div> 
            <div className="row item">
               <div className="twelve columns">
                  <h3>Pennsylvania State University</h3>
                  <p className="info">B.S. Degree in Electrical Engieneering <span>&bull;</span> <em className="date">grad. June 1997 </em></p>
                  <p>
                        3.5 GPA- Tau Beta Pi Engineering Honors fraternity <br />
                        Spent a year taking courses at Leeds University, England

                  </p>
               </div>
            </div> 
         </div> 
      </div> 

    {/*Work Experience Section*/}
      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                  <h3>Sutherland Global Services</h3>
                  <p className="info">Technical Support Representative <span>&bull;</span> <em className="date">April 2017 - July 2017</em></p>
                  <p>
                        Provided Tier 1 technical support to customers of AT&T Digital Life, using VPN and remote access tools 
                        to troubleshoot wireless, networking, hardware, and phone app issues in a fast-paced call center. 
                  </p>
               </div>
            </div> 
            <div className="row item">
               <div className="twelve columns">
                  <h3>Streamverse</h3>
                  <p className="info">Lead Trainer and Application Engineer<span>&bull;</span> <em className="date">January 2013 - March 2017</em></p>
                  <p>
                      Trained and operated for clients ranging from houses of worship to network affiliates, teaching them how to engineer 
                      and operate live production technology like Newtek Tricaster, Wowza Streaming Engine, and Telestream to deliver high quality
                      video streaming and gaming experiences.
                  </p>
               </div>
            </div> 
            <div className="row item">
               <div className="twelve columns">
                  <h3>Key Code Media</h3>
                  <p className="info">Application Engineer<span>&bull;</span> <em className="date">September 2010 - December 2013</em></p>
                  <p>
                      Trained and operated for clients ranging from houses of worship to network affiliates, teaching them how to engineer 
                      and operate live production technology like Newtek Tricaster, Wowza and , Crestron, Telestream to deliver high quality
                      video streaming and gaming experiences.
                  </p>
               </div>
            </div>
         </div> 
      </div> 


      {/* Skills Section */}
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
            <p>I've been developing this website as a showcase for my projects and to give interested people an easy way to see my work 
            and give me feedback on what they like. My interests include machine learning, virtual reality and application development.  
            The scale for the graph below begins at a basic familarity with the syntax and capabilities of the technology at the far left and moves to a deep 
            understanding of the capabilities and pitfalls of using the technology at the far right
            </p>

				<div className="bars">
				   <ul className="skills">
					   <li><span className="bar-expand csharp"></span><em>C#</em></li>
             <li><span className="bar-expand javascript"></span><em>Javascript/ES6</em></li>
             <li><span className="bar-expand reactjs"></span><em>ReactJS</em></li>
						 <li><span className="bar-expand wordpress"></span><em>Wordpress</em></li>
						 <li><span className="bar-expand css"></span><em>CSS</em></li>
						 <li><span className="bar-expand html5"></span><em>HTML5</em></li>
					</ul>
				</div>
			</div> 
      </div> 
   </section>
    );
  }
}

export default Resume;
