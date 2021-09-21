import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
    return (
       <>
         <div className="wt-haslayout wt-innerbannerholder">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
							<div className="wt-innerbannercontent">
							<div className="wt-title"><h2>Our Services</h2></div>
							<ol className="wt-breadcrumb">
								<li><a href="/">Home</a></li>
							</ol>
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
																	<p>Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise ination voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid <a href="/">Learn more</a></p>
																</div>
															</div>
															<ul className="wt-accordionhold accordion">
																<li>
																	<div className="wt-accordiontitle collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
																		<span>Adipisicing elit, sed do eiusmod tempor incididunt?</span>
																	</div>
																	<div className="wt-accordiondetails collapse show" id="collapseOne" aria-labelledby="headingOne">
																		<div className="wt-title">
																			<h3>Digital Marketing</h3>
																		</div>
																		<div className="wt-description">
																			<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore eta dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
																			</p>
																		</div>
																		<div className="wt-likeunlike">
																			<span>Did you find this useful?</span>
																			<a href="/" className="wt-like"><i className="fa fa-thumbs-up"></i></a>
																			<a href="/" className="wt-unlike"><i className="fa fa-thumbs-down"></i></a>
																		</div>
																	</div>
																</li>
																<li>
																	<div className="wt-accordiontitle collapsed" id="headingtwo" data-toggle="collapse" data-target="#collapsetwo">
																		<span>Dolore magna aliqua enim ad minim veniam?</span>
																	</div>
																	<div className="wt-accordiondetails collapse" id="collapsetwo" aria-labelledby="headingtwo">
																		<div className="wt-title">
																			<h3>Digital Marketing</h3>
																		</div>
																		<div className="wt-description">
																			<p>
																				Consectetur adipisicing elit sed aeiusmisuod tempor incididunt labore dolore ma alaeiqua enim ade minim veniam quis nostr xecitation ullamcoaris nisi ut aliquipa extaea coedmmmodo equate irure dolawor in reprehenderit.
																			</p>
																		</div>
																		<div className="wt-likeunlike">
																			<span>Did you find this useful?</span>
																			<a href="/" className="wt-like"><i className="fa fa-thumbs-up"></i></a>
																			<a href="/" className="wt-unlike"><i className="fa fa-thumbs-down"></i></a>
																		</div>
																	</div>
																</li>
																<li>
																	<div className="wt-accordiontitle collapsed" id="headingthreea" data-toggle="collapse" data-target="#collapsethree">
																		<span>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo?</span>
																	</div>
																	<div className="wt-accordiondetails collapse" id="collapsethree" aria-labelledby="headingthreea">
																		<div className="wt-title">
																			<h3>Digital Marketing</h3>
																		</div>
																		<div className="wt-description">
																			<p>
																				Consectetur adipisicing elit sed aeiusmisuod tempor incididunt labore dolore ma alaeiqua enim ade minim veniam quis nostr xecitation ullamcoaris nisi ut aliquipa extaea coedmmmodo equate irure dolawor in reprehenderit.
																			</p>
																		</div>
																		<div className="wt-likeunlike">
																			<span>Did you find this useful?</span>
																			<a href="/" className="wt-like"><i className="fa fa-thumbs-up"></i></a>
																			<a href="/" className="wt-unlike"><i className="fa fa-thumbs-down"></i></a>
																		</div>
																	</div>
																</li>
															</ul>
                                                            <div className="col-12 col-sm-12 col-md-12 col-lg-5 ">
														    <div className="wt-howtoworkimg">
															<figure>
                                                                <Link to="/hire-virtual-assistant"><button className="wt-btn">Start Now</button></Link>
															</figure>
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
																	<p>Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise ination voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid learn <a href="/">more</a></p>
																</div>
															</div>
															<ul className="wt-accordionhold accordion">
																<li>
																	<div className="wt-accordiontitle collapsed" id="headingtwo2" data-toggle="collapse" data-target="#collapsetwo2">
																		<span>Nostrud exercitation ullamco laboris nisi ut aliquip?</span>
																	</div>
																	<div className="wt-accordiondetails collapse" id="collapsetwo2" aria-labelledby="headingtwo2">
																		<div className="wt-title">
																			<h3>Digital Marketing</h3>
																		</div>
																		<div className="wt-description">
																			<p>
																				Consectetur adipisicing elit sed aeiusmisuod tempor incididunt labore dolore ma alaeiqua enim ade minim veniam quis nostr xecitation ullamcoaris nisi ut aliquipa extaea coedmmmodo equate irure dolawor in reprehenderit.
																			</p>
																		</div>
																		<div className="wt-likeunlike">
																			<span>Did you find this useful?</span>
																			<a href="/" className="wt-like"><i className="fa fa-thumbs-up"></i></a>
																			<a href="/" className="wt-unlike"><i className="fa fa-thumbs-down"></i></a>
																		</div>
																	</div>
																</li>
																<li>
																	<div className="wt-accordiontitle collapsed" id="headingtwo4" data-toggle="collapse" data-target="#collapsetwo4">
																		<span>Commodo consequat aute irure dolor in reprehenderit in voluptate velit?</span>
																	</div>
																	<div className="wt-accordiondetails collapse" id="collapsetwo4" aria-labelledby="headingtwo4">
																		<div className="wt-title">
																			<h3>Digital Marketing</h3>
																		</div>
																		<div className="wt-description">
																			<p>
																				Consectetur adipisicing elit sed aeiusmisuod tempor incididunt labore dolore ma alaeiqua enim ade minim veniam quis nostr xecitation ullamcoaris nisi ut aliquipa extaea coedmmmodo equate irure dolawor in reprehenderit.
																			</p>
																		</div>
																		<div className="wt-likeunlike">
																			<span>Did you find this useful?</span>
																			<a href="/" className="wt-like"><i className="fa fa-thumbs-up"></i></a>
																			<a href="/" className="wt-unlike"><i className="fa fa-thumbs-down"></i></a>
																		</div>
																	</div>
																</li>
																<li>
																	<div className="wt-accordiontitle collapsed" id="headingthree2" data-toggle="collapse" data-target="#collapsethree2">
																		<span>Cillum dolore eu fugiat nulla pariatur?</span>
																	</div>
																	<div className="wt-accordiondetails collapse" id="collapsethree2" aria-labelledby="headingthree2">
																		<div className="wt-title">
																			<h3>Digital Marketing</h3>
																		</div>
																		<div className="wt-description">
																			<p>
																				Consectetur adipisicing elit sed aeiusmisuod tempor incididunt labore dolore ma alaeiqua enim ade minim veniam quis nostr xecitation ullamcoaris nisi ut aliquipa extaea coedmmmodo equate irure dolawor in reprehenderit.
																			</p>
																		</div>
																		<div className="wt-likeunlike">
																			<span>Did you find this useful?</span>
																			<a href="/" className="wt-like"><i className="fa fa-thumbs-up"></i></a>
																			<a href="/" className="wt-unlike"><i className="fa fa-thumbs-down"></i></a>
																		</div>
																	</div>
																</li>
															</ul>
                                                            <div className="col-12 col-sm-12 col-md-12 col-lg-5 ">
														    <div className="wt-howtoworkimg">
															<figure>
                                                                <Link to="/one-off-project"><button className="wt-btn">Start Now</button></Link>
															</figure>
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