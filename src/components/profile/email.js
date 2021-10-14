import { Link } from "react-router-dom";

const Email = () => {
    return (
        <>
         <div className="wt-login">
	<div id="wt-wrapper" className="wt-wrapper wt-haslayout">
		
		<div className="wt-contentwrapper">
		
			<main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
				<section className="wt-haslayout wt-dbsectionspace">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
							<div className="wt-dashboardbox wt-dashboardtabsholder wt-accountsettingholder">
                            <div className="wt-dashboardtabs">
									<ul className="wt-tabstitle nav navbar-nav">
									<li className="nav-item">
											<Link to="/profile" style={{textDecoration: 'none', color:'rgb(141, 138, 138)'}}>Profile Management</Link>
									</li>
									<li className="nav-item">
											<Link  to="/password" style={{textDecoration: 'none', color:'rgb(141, 138, 138)'}}>Password Update</Link>
									</li>
									<li className="nav-item">
											<a className="active" data-toggle="tab" href="#wt-security">Email Notification</a>
										</li>
										</ul>
									
								</div>
								<div className="wt-tabscontent tab-content">
									<div className="wt-securityhold tab-pane active fade show" id="wt-security">
										
                                    <div className="wt-emailnoti">
											<div className="wt-tabscontenttitle">
												<h2 style={{fontWeight:'bolder'}}>Manage Email Notifications</h2>
											</div>
											<div className="wt-settingscontent">
												<div className="wt-description">
													<p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua aut enim ad minim veniamac quis nostrud exercitation ullamco laboris.</p>
												</div>
												<form className="wt-formtheme wt-userform">
													<fieldset>
														<div className="form-group form-disabeld">
															<input type="password" name="password" className="form-control" placeholder="youremail@domainurl.com" disabled="" />
														</div>
													</fieldset>
												</form>
												<ul className="wt-accountinfo">
													<li>
														<div className="wt-on-off">
															<input type="checkbox" id="hide-onemail" name="contact_form" />
															<label for="hide-onemail"><i></i></label>
														</div>
														<span>Send me Weekly newsletter alerts</span>
													</li>
													<li>
														<div className="wt-on-off pull-right">
															<input type="checkbox" id="hide-onemail1" name="contact_form" />
															<label for="hide-onemail1"><i></i></label>
														</div>
														<span>Forward messages on this ID</span>
													</li>
													<li>
														<div className="wt-on-off pull-right">
															<input type="checkbox" id="hide-onemail2" name="contact_form" />
															<label for="hide-onemail2"><i></i></label>
														</div>
														<span>Send me bonus &amp; promo alerts</span>
													</li>
													<li>
														<div className="wt-on-off pull-right">
															<input type="checkbox" id="hide-onemail3" name="contact_form"  />
															<label for="hide-onemail3"><i></i></label>
														</div>
														<span>Share latest security alerts</span>
													</li>
												</ul>
											</div>
										</div>
										
									</div>
									<div className="wt-passwordholder tab-pane fade" id="wt-password">
										<div className="wt-changepassword">
											<div className="wt-tabscontenttitle">
												<h2>Change Your Password</h2>
											</div>
											<form className="wt-formtheme wt-userform">
												<fieldset>
													<div className="form-group form-group-half">
														<input type="password" name="password" className="form-control" placeholder="Last Remember Password" />
													</div>
													<div className="form-group form-group-half">
														<input type="password" name="password" className="form-control" placeholder="New Password" />
													</div>
													<div className="form-group">
														<span className="wt-checkbox">
															<input id="termsconditions" type="checkbox" name="termsconditions" value="termsconditions"  />
															<label for="termsconditions"><span>Logout from all other web/mobile session now.</span></label>
														</span>
													</div>
												</fieldset>
											</form>
										</div>
									</div>
									<div className="wt-emailnotiholder tab-pane fade" id="wt-emailnoti">
										<div className="wt-emailnoti">
											<div className="wt-tabscontenttitle">
												<h2>Manage Email Notifications</h2>
											</div>
											<div className="wt-settingscontent">
												<div className="wt-description">
													<p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua aut enim ad minim veniamac quis nostrud exercitation ullamco laboris.</p>
												</div>
												<form className="wt-formtheme wt-userform">
													<fieldset>
														<div className="form-group form-disabeld">
															<input type="password" name="password" className="form-control" placeholder="youremail@domainurl.com" disabled="" />
														</div>
													</fieldset>
												</form>
												<ul className="wt-accountinfo">
													<li>
														<div className="wt-on-off">
															<input type="checkbox" id="hide-onemail" name="contact_form" />
															<label for="hide-onemail"><i></i></label>
														</div>
														<span>Send me Weekly newsletter alerts</span>
													</li>
													<li>
														<div className="wt-on-off pull-right">
															<input type="checkbox" id="hide-onemail1" name="contact_form" />
															<label for="hide-onemail1"><i></i></label>
														</div>
														<span>Forward messages on this ID</span>
													</li>
													<li>
														<div className="wt-on-off pull-right">
															<input type="checkbox" id="hide-onemail2" name="contact_form" />
															<label for="hide-onemail2"><i></i></label>
														</div>
														<span>Send me bonus &amp; promo alerts</span>
													</li>
													<li>
														<div className="wt-on-off pull-right">
															<input type="checkbox" id="hide-onemail3" name="contact_form" />
															<label for="hide-onemail3"><i></i></label>
														</div>
														<span>Share latest security alerts</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
									
									<div className="wt-accountholder tab-pane fade" id="wt-deleteaccount">
										<div className="wt-accountdel">
											<div className="wt-tabscontenttitle">
												<h2>Delete Account</h2>
											</div>
											<form className="wt-formtheme wt-userform">
												<fieldset>
													<div className="form-group form-group-half">
														<input type="password" name="password" className="form-control" placeholder="Enter Password" />
													</div>
													<div className="form-group form-group-half">
														<input type="password" name="password" className="form-control" placeholder="Enter Password" />
													</div>
													<div className="form-group">
														<span className="wt-select">
															<select>
																<option value="" disabled="">Select Reason to Leave</option>
																<option value="">Reason</option>
																<option value="">Reason</option>
															</select>
														</span>
													</div>
													<div className="form-group">
														<textarea name="message" className="form-control" placeholder="Description (Optional)"></textarea>
													</div>
													<div className="form-group form-group-half float-right">
														<span className="wt-checkbox">
															<input id="termsconditions1" type="checkbox" name="termsconditions" value="termsconditions" />
															<label for="termsconditions1"><span>Unsubscribe me from all newsletter list</span></label>
														</span>
													</div>
													<div className="form-group form-group-half wt-btnarea">
														<a href="/" className="wt-btn">Delete Account</a>
													</div>
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div className="wt-updatall">
								<i className="ti-announcement"></i>
								<span>Update all the latest changes made by you, by just clicking on “Save &amp; Continue” button.</span>
								<a className="wt-btn" href="/">Save &amp; Continue</a>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
							<aside id="wt-sidebar" className="wt-sidebar wt-dashboardsave wt-innerbgcolor">
								<div className="wt-proposalsr">
									<div className="wt-proposalsrcontent">
										<figure>
											<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-17.png'} alt="imge" />
										</figure>
										<div className="wt-title">
											<h3>150</h3>
											<span>Ongoing Orders</span>
										</div>
									</div> 
								</div>
								<div className="wt-proposalsr">
									<div className="wt-proposalsrcontent wt-componyfolow">
										<figure>
											<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-16.png'} alt="imge" />
										</figure>
										<div className="wt-title">
											<h3>1406</h3>
											<span>Completed Orders</span>
										</div>
									</div> 
								</div>								
								<div className="wt-proposalsr">
									<div className="wt-proposalsrcontent  wt-freelancelike">
										<figure>
											<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-15.png'} alt="imge" />
										</figure>
										<div className="wt-title">
											<h3>2075</h3>
											<span>Cancelled Orders</span>
										</div>
									</div> 
								</div>								
							</aside>
							<div className="wt-companyad">
								<figure className="wt-companyadimg"><img src={process.env.PUBLIC_URL + 'assets/images/add-img.jpg'} alt="imge" /></figure>
								<span>Advertisement  255px X 255px</span>
							</div>
						</div>
						
					</div>
				</section>
			
			</main>
		</div>
	
	</div>
</div>
        </>
    );
}

export default Email;