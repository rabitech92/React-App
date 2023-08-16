import React, { Component } from 'react';
// import "./assets/Footer.css"


class Footer extends Component {
    render() {
        return (
            <div className="container-flux bg-dark ">
                <footer className="footer-content mb-2 p-3  text-white">
                <section className="d-flex justify-content-between p-2 text-white"  style={{backgroundColor: (`#c0c0c0`)}}>      
                    <div className="me-4 text-black fw-bold">
                        <span>Get connected with us on social networks:</span>
                    </div>            
                    <div>
                        <a  className="text-black m-2 fw-bold">
                        <i class="fab fa-facebook-f">facebook</i>
                        </a>
                        <a  className="text-black m-2 fw-bold" >
                        <i class="fab fa-twitter">twitter</i>
                        </a>
                        <a  className="text-black e-2 fw-bold">
                        <i class="fab fa-google">google</i>
                        </a>
                        <a  className="text-black m-2 fw-bold">
                        <i class="fab fa-instagram">instagram</i>
                        </a>
                        <a className="text-black m-2 fw-bold">
                        <i class="fab fa-linkedin">linkedin</i>
                        </a>
                        <a  className="text-black m-2 fw-bold">
                        <i class="fab fa-github">github</i>
                        </a>                        
                    </div>    
                </section>
                <section class="">
                    <div className="container text-center text-md-start mt-2">
                        
                        <div className="row mt-3">                        
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">                            
                            <h6 className="text-uppercase fw-bold">Company name</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                            <p>Here you can use rows and columns to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </div>                        
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            
                            <h6 className="text-uppercase fw-bold">Products</h6>
                            <hr className="mb-2 mt-0 d-inline-block mx-auto"/>
                            <p>
                                <a href="#!" className="text-white">Technology Items</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Core JAVA</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Spring Framwork</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Spring boot</a>
                            </p>
                        </div>                        
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">                            
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr className="mb-2 mt-0 d-inline-block mx-auto"/>
                                <p>
                                    <a href="#!" className="text-white">Your Account</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Help</a>
                                </p>
                        </div>                        
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">                        
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                            <p><i className="fas fa-home mr-3"></i>ctech, Green road, Dhaka, Bangladesh</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                            <p><i className="fas fa-print mr-3"></i> + 01 734 467 273</p>
                        </div>                        
                        </div>                    
                      </div>
                      <div class="text-center p-2">
                        © 2023 All Reserved :
                            <a class="text-white" href="https://ctechbd.com/"
                            > Crystall Technology Bangladesh Ltd.</a>
                        </div>
                    </section>
                </footer>
            </div>
            
        );
    }
}

export default Footer;