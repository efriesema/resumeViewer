import React, { Component } from 'react';


class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">
            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
               <div className="flexslider"> 
                  <ul className="slides">
                    <li>
                        <blockquote>
                           <p>Ed really helped us integrate and test some complicated systems for our show. 
                           He was very knowledgeable and always available to help us with our questions during the entire process.
                           </p>
                           <cite>Tom Baird, Chief Engineer, Dr. Phil Show</cite>
                        </blockquote>
                     </li> 
                     <li>
                        <blockquote>
                           <p>Ed helped give our people the skills they needed to achieve some very important goals that we'd been wanting for a long time. 
                           His expertise and willingness to work with our staff solved some problems that had been blocking us for months.
                           </p>
                           <cite>Steve Harrington, VP Engineering & Operations KTTV and KCOP</cite>
                        </blockquote>
                     </li> 
                     <li>
                        <blockquote>
                           <p>Ed gave a us a full day seminar on using Avid Media Composer in a reality TV post production workflow. 
                           His knowledge and enthusiasm really shined through. It made the transition a lot smoother for our entire 
                           team, which was critical because of our tight schedule.
                           </p>
                           <cite>William Pisnieski, VP of Post Production for Authentic Entertainment LLC</cite>
                        </blockquote>
                     </li>
                  </ul>
               </div>
            </div> 
         </div> 
       </div> 
   </section> 
    );
  }
}

export default Testimonials;
