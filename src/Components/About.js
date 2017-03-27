import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
            </div>
        <div className="nine columns main-col">
            <h2>About Me</h2>
              <p>I'm new to developing software applications but I've spent ten years helping clients find the right combination of software and hardware 
               to deliver the best quality videos and games to their clients around the world. I'm dedicated to using ReactJS and ASP.NET to deliver solutions to clients 
               whatever their business or audience.  When I have the time I love to travel, play poker, hike and sing bad karaoke.
              </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                  <p className="address">
						    <span>Edward Friesema</span><br />
						    <span>(818)355-2049</span><br />
                <span>developer@streamverse.net</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
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
