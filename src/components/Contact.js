import React, {Component} from 'react';
import Footer from './Footer';
class Contact extends Component {

    render() {
        return (
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="contact-content">
                                <h2> Contact Me </h2>
                                <p className="contact-description">
                                    Feel free to contact me at any time!
                                </p>
                                <div className="contact-item">
                                    <span> Name: B Sahithya </span>
                                    
                                </div>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <span> Email Address: bsahithya13@gmail.com </span>
                                        
                                    </div>
                                    <div className="contact-item">
                                        <span> Phone Number: 6305587674 </span>
                                        
                                    </div>
                                    <div className="contact-item">
                                        <span> Location: BC Naidu Colony, Chittoor, 517001. </span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>





        );
    }
}

export default Contact;