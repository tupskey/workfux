import React from "react";
import { Link } from "react-router-dom";

import {  Accordion, Card  } from "react-bootstrap";

const Services = () => {
    return (
       <>
         <div className="wt-haslayout wt-innerbannerholder">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
							<div className="wt-innerbannercontent">
							<div className="wt-title"><h2>See How Services?</h2></div>
							<ol className="wt-breadcrumb">
								<li><a href="/">Home</a></li> {'/'}
							</ol>
							<li>How It Works</li>
							</div>
						</div>
					</div>
				</div>
			</div>
         <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
			<div className="wt-haslayout wt-main-section">
				<div className="wt-contentwrappers">
					<div className="container">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
								<div className="wt-howitwork-hold wt-bgwhite wt-haslayout">
									
									<div className="tab-content wt-haslayout">
										<div className="wt-contentarticle tab-pane active fade show" id="forhiring">
											<div className="row">
												<div className="wt-starthiringhold wt-innerspace wt-haslayout">
													<div className="col-12 col-sm-12 col-md-12 col-lg-7 float-left">
														<div className="wt-starthiringcontent">
															<div className="wt-sectionhead">
																<div className="wt-sectiontitle">
																	<h2>Hire a Virtual Assistant</h2>
																	<span>Start Today For a Great Future</span>
																</div>
																<div className="wt-description">
																	<p>Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise ination 
																		voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid <a href="/">Learn more</a></p>
													<Accordion defaultActiveKey="0" flush>
                                               				 <Card>

                                                    <Card.Header>
                                                        <Accordion.Toggle  eventKey="0">

                                                    What you need to know about Hiring a virtual assistant
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        This is a text that supporrts whatever we are doin in French
                                                    </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                                <Card>

                                                    <Card.Header>
                                                        <Accordion.Toggle  eventKey="1">

														What you need to know about Hiring a virtual assistant?
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="1">
                                                    <Card.Body>
                                                        This is a text that supporrts whatever we are doin in French
                                                    </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
												<Card style={{marginBottom: '10px'}}>

                                                    <Card.Header>
                                                        <Accordion.Toggle  eventKey="2">

														What you need to know about Hiring a virtual assistant
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="2">
                                                    <Card.Body>
                                                        This is a text that supporrts whatever we are doin in French
                                                    </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
												<Link to="hire-virtual-assistant"><button className="wt-btn">Get Started</button></Link>
                                            </Accordion>
																
																</div>
															</div>
														</div>
													</div>
													<div className="col-12 col-sm-12 col-md-12 col-lg-5 float-right">
														<div className="wt-howtoworkimg">
															<figure>
																<img src={process.env.PUBLIC_URL +' assets/images/work/img-01.jpg'} alt="imag description" />
                                                                
                    
															</figure>
														</div>
													</div>
												</div>
												<div className="wt-starthiringhold wt-innerspace wt-haslayout">
													<div className="col-12 col-sm-12 col-md-12 col-lg-7 float-right">
														<div className="wt-starthiringcontent">
															<div className="wt-sectionhead">
																<div className="wt-sectiontitle">
																	<h2>One Off Project</h2>
																	<span>Focus on Your Work &amp; Team</span>
																</div>
																<div className="wt-description">
																	<p>Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina
																		 ilukita ylokem lokateise ination voluptate velite esse cillum dolore eu fugnulla pariatur
																		  lokaim urianewce animid learn <a href="/">more</a></p>
																		  <Accordion defaultActiveKey="0" flush>
                                               				 <Card>

                                                    <Card.Header>
                                                        <Accordion.Toggle  eventKey="0">

                                                  All About One time Project
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        This is a text that supporrts whatever we are doin in French
                                                    </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                                <Card>

                                                    <Card.Header>
                                                        <Accordion.Toggle  eventKey="1">

                                                       When  you can have a one time Project
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="1">
                                                    <Card.Body>
                                                        This is a text that supporrts whatever we are doin in French
                                                    </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
												<Card style={{marginBottom: '10px'}}>

                                                    <Card.Header>
                                                        <Accordion.Toggle  eventKey="2">

                                                        Check Out the best place to execute your  one time project
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="2">
                                                    <Card.Body>
                                                        This is a text that supporrts whatever we are doin in French
                                                    </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
												<Link to="/workfuxservices"><button className="wt-btn">Get Started</button></Link>
                                            </Accordion>

																
																</div>
															</div>
															
                                                            
														</div>
													</div>
													<div className="col-12 col-sm-12 col-md-12 col-lg-5 float-left">
														<div className="wt-howtoworkimg">
															<figure>
                                                            <img src={process.env.PUBLIC_URL +' assets/images/work/img-01.jpg'} alt="imag description" />
															</figure>
														</div>
													</div>
												</div>
													
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
	
		</main>
		
       </>
    );
}

export default Services;