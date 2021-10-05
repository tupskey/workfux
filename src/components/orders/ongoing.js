

const Ongoing = () => {
    return (
        <>

<div id="wt-wrapper" class="wt-wrapper wt-haslayout">
	
    <div class="wt-contentwrapper">

        <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
        
        <section className="wt-haslayout wt-dbsectionspace">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
							<div className="wt-dashboardbox">
								<div className="wt-dashboardboxtitle">
									<h2>Posted Jobs</h2>
								</div>
								<div className="wt-dashboardboxcontent wt-jobdetailsholder">
                                <div className="wt-freelancerholder">
									<div className="wt-tabscontenttitle">
										<h2>Manage Jobs</h2>
									</div>
									<div className="wt-managejobcontent wt-verticalscrollbar mCustomScrollbar _mCS_1">
                                    <div className="wt-userlistinghold wt-featured wt-userlistingvtwo">
												<span className="wt-featuredtag wt-featuredtagcolor2"><img src={process.env.PUBLIC_URL + 'assets/images/featured.png'} alt="img description" data-tipso="Plus Member" className="template-content tipso_style" /></span>
												<div className="wt-userlistingcontent">
													<div className="wt-contenthead">
														<div className="wt-title">
															<a href="usersingle.html"><i className="fa fa-check-circle"></i> Louanne Mattioli</a>
															<h2>I want some customization and installation on wordpress</h2>
														</div>
														<ul className="wt-saveitem-breadcrumb wt-userlisting-breadcrumb">
															<li><span className="wt-dashboraddoller"><i className="fa fa-dollar"></i> Professional</span></li>
															<li><span><img src={process.env.PUBLIC_URL + 'assets/images/flag/img-04.png'} alt="img description" /> England</span></li>
															<li><a href="/" className="wt-clicksavefolder"><i className="fa fa-folder"></i> Type: Per Fixed</a></li>
															<li><span className="wt-dashboradclock"><i className="fa fa-clock-o"></i> Duration: 15 Days</span></li>							
														</ul>
													</div>
													<div className="wt-rightarea">
														<div className="wt-btnarea">
															<a href="/" className="wt-btn">VIEW DETAILS</a>
														</div>
														<div className="wt-hireduserstatus">
															<h4>Hired</h4><span>Terrence Tynan</span>
															<ul className="wt-hireduserimgs">
																<li><figure><img src={process.env.PUBLIC_URL + 'assets/images/user/userlisting/img-05.jpg'} alt="img description" /></figure></li>
															</ul>
														</div>
													</div>
												</div>	
											</div>
											
										
                                        
										
									</div>
									</div>
								</div>
								<nav className="wt-pagination wt-savepagination">
									<ul>
										<li className="wt-prevpage"><a href="/"><i className="lnr lnr-chevron-left"></i></a></li>
										<li><a href="/;">1</a></li>
										<li><a href="/">2</a></li>
										<li><a href="/">3</a></li>
										<li><a href="/">4</a></li>
										<li><a href="/">...</a></li>
										<li><a href="/">50</a></li>
										<li className="wt-nextpage"><a href="/"><i className="lnr lnr-chevron-right"></i></a></li>
									</ul>
								</nav>
							</div>
						</div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
                        <aside id="wt-sidebar" className="wt-sidebar wt-dashboardsave">
                            <div className="wt-proposalsr">
                                <div className="wt-proposalsrcontent">
                                    <figure> 
                                        <img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-17.png'} alt="imOG DESC" />
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
                                        <img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-16.png'} alt="imOG DESC" />
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
                                        <img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-15.png'} alt="imOG DESC" />
                                    </figure>
                                    <div className="wt-title">
                                        <h3>2075</h3>
                                        <span>Cancelled Orders</span>
                                    </div>
                                </div> 
                            </div>								
                        </aside>
                        <div className="wt-companyad">
                            <figure className="wt-companyadimg"><img src={process.env.PUBLIC_URL +'assets/images/add-img.jpg'} alt="imOg description" /></figure>
                            <span>Advertisement  255px X 255px</span>
                        </div>
                    </div>
						
					</div>
				</section>				
        </main>
    </div>
</div>


        </>
    )
}

export  default Ongoing;