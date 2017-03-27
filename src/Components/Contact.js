import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <section id="contact">

         <div class="row section-head">

            <div class="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div class="ten columns">

                  <p class="lead">If you have any questions about my projects. interests or need my help with any 
                  projects you have in mind, please let me hear from you.
                  </p>

            </div>

         </div>

         <div class="row">
            <div class="eight columns">
               <form action="" method="post" id="contactForm" name="contactForm">
					         <fieldset>
                      <div>
						              <label for="contactName">Name <span class="required">*</span></label>
						              <input type="text" value="" size="35" id="contactName" name="contactName" />
                     </div>
                     <div>
						              <label for="contactEmail">Email <span class="required">*</span></label>
						              <input type="text" value="" size="35" id="contactEmail" name="contactEmail" />
                     </div>
                     <div>
						              <label for="contactSubject">Subject</label>
						              <input type="text" value="" size="35" id="contactSubject" name="contactSubject" />
                      </div>
                      <div>
                          <label for="contactMessage">Message <span class="required">*</span></label>
                          <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                     </div>
                     <div>
                          <button class="submit">Submit</button>
                          <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                     </div>
					        </fieldset>
				       </form>
               <div id="message-warning"> Error boy</div>  
				       <div id="message-success">
                    <i class="fa fa-check"></i>Your message was sent, thank you!<br />
				       </div>
            </div>
            <aside class="four columns footer-widgets" >
               <div class="widget widget_contact">
                  <h4>Email and Phone</h4>
					        <p class="address">
						         Edward Friesema<br/>
                     developer@streamverse.net<br />
						         <span>(818) 355-2049</span>
					        </p>
				       </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
