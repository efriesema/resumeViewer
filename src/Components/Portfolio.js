import React, { Component } from 'react';


class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>  
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
               <div className="columns portfolio-item">
                  <div className="item-wrap">

                     <a href="#modal-01" title="">
                        <img alt="" src="images/portfolio/black-headphones.jpg" />
                        <div className="overlay">
                           <div className="portfolio-item-meta">
          					      <h5>Music Master</h5>
                              <p>Web Application</p>
          					   </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus"></i></div>
                     </a>
                  </div>
          		</div> 
               <div className="columns portfolio-item">
                  <div className="item-wrap">
                     <a href="#modal-02" title="">
                        <img alt="" src="images/portfolio/human-brain-in-blue.jpg" />
                        <div className="overlay">
                           <div className="portfolio-item-meta">
          					      <h5>Watson Speech Translator</h5>
                              <p>Machine Learning</p>
          					   </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus"></i></div>
                     </a>
                  </div>
          		</div>
               <div className="columns portfolio-item">
                  <div className="item-wrap">
                     <a href="#modal-03" title="">
                        <img alt="" src="images/portfolio/virtual-reality.jpg" />
                        <div className="overlay">
                           <div className="portfolio-item-meta">
          					      <h5>Shoot the Hoop</h5>
                              <p>Virtual Reality</p>
          					   </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus"></i></div>
                     </a>
                  </div>
          		</div>
            </div> 
         </div> 


         {/* Modal Popup*/}

         <div id="modal-01" className="popup-modal mfp-hide">
		      <img className="scale-with-grid" src="images/portfolio/modals/m-black-headphones.jpg" alt="" />
		      <div className="description-box">
			      <h4>Music Master</h4>
			      <p>A ReactJS application utilizing Spotify's Web API to create a preview playlist 
                  of the top ten tracks for any artist. This was based on the lesson in David Katz's Udemy course, 
                  “ReactJS and Redux- Mastering Web Apps”.</p>
               <span className="categories"><i className="fa fa-tag"></i>ReactJS,  Development, Multimedia, APIs</span>
		      </div>
            <div className="link-box">
               <a href="http://github.com/efriesema/musicMaster" target="_blank">Github Repo</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>
	      </div>
         <div id="modal-02" className="popup-modal mfp-hide">
		      <img className="scale-with-grid" src="images/portfolio/modals/m-human-brain-in-blue.jpg" alt="" />
		      <div className="description-box">
			      <h4>Watson Speech Translator</h4>
			      <p>An application using Watson's engine for English text-to-speech and speech-to-text translation. 
                  Further development includes incorporating the technology into an application to help children learn how to read.</p>
               <span className="categories"><i className="fa fa-tag"></i>IBM Watson, Machine Learning, AI, Speech Recognition</span>
		      </div>
            <div className="link-box">
               <a href="http://console.ng.bluemix.net" target="_blank">Watson Bluemix site</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>
	      </div>
         <div id="modal-03" className="popup-modal mfp-hide">

		      <img className="scale-with-grid" src="images/portfolio/modals/m-virtual-reality.jpg" alt="" />

		      <div className="description-box">
			      <h4>Shoot the Hoop VR</h4>
			      <p>Using Unity game engine and C# to create a basic virtual reality basketball game</p>
               <span className="categories"><i className="fa fa-tag"></i>Virtual Reality,  Unity, C#, Gaming</span>
		      </div>
            <div className="link-box">
               <a href="http://www.github.com/efriesema" target="_blank">Github Repo</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>
	      </div>
      </div> 
   </section>
    );
  }
}

export default Portfolio;
