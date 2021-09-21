import { Card, Button, CardTitle, CardText, CardBody } from "reactstrap";

const Dashboard = () => {
    return(
            <>
            <main id="wt-main" className="wt-main wt-haslayout">
				<section className="wt-haslayout wt-dbsectionspace">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
							<div className="wt-dashboardbox">
								<div className="wt-dashboardboxtitle">
									<h2>DashBoard</h2>
								</div>
								<div className="wt-dashboardboxcontent wt-jobdetailsholder">
									<div className="wt-freelancerholder">
										<div className="wt-tabscontenttitle">
											<h2>Ongoing Jobs</h2>
										</div>
										<div className="wt-managejobcontent wt-verticalscrollbar">
											<div className="wt-userlistinghold wt-featured wt-userlistingvtwo">
												<Card  outline color="success">
													<CardBody>
													<CardTitle tag="h5">Job Title</CardTitle>
													<CardText>Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise
														 ination voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid 
														 Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise
														  ination voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid</CardText>
													<Button size="md" color="success" >Complete Job</Button>{' '}
													<Button size="md" color="danger" >  Cancel Job</Button>
													</CardBody>
												</Card>
											</div>
										</div>
									</div>
								</div>
								<div className="wt-dashboardboxcontent wt-jobdetailsholder">
									<div className="wt-freelancerholder">
										<div className="wt-tabscontenttitle">
											<h2>Custom Offers</h2>
										</div>
										<div className="wt-managejobcontent wt-verticalscrollbar">
											<div className="wt-userlistinghold wt-featured wt-userlistingvtwo">
												<Card  outline color="success">
													<CardBody>
													<CardTitle tag="h5">Job Title</CardTitle>
													<CardText>Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise
														 ination voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid 
														 Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise
														  ination voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid
														 </CardText>
													<Button size="md" color="success" >Complete Job</Button>{' '}
													<Button size="md" color="danger" >  Cancel Job</Button>
													</CardBody>
												</Card>
											</div>
										</div>
									</div>
								</div>
								
								<nav className="wt-pagination wt-savepagination">
									<ul>
										<li className="wt-prevpage"><a href="/"><i className="lnr lnr-chevron-left"></i></a></li>
										<li><a href="/">1</a></li>
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
									<div className="wt-proposalsrcontent wt-componyfolow">
										<figure>
                                        <img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-17.png'} alt="thumbnailo desc" />
										</figure>
										<div className="wt-title">
											<h3>10</h3>
											<span> Ongoing Jobs</span>
										</div>
									</div> 
								</div>	
                                						
								<div className="wt-proposalsr">
									<div className="wt-proposalsrcontent  wt-freelancelike">
										<figure>
                                        <img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-16.png'} alt="ifreelancer desc" />
										</figure>
										<div className="wt-title">
											<h3>2</h3>
											<span> Cancelled Jobs</span>
										</div>
									</div> 
								</div>	

                                <div className="wt-proposalsr">
									<div className="wt-proposalsrcontent  wt-freelancelike">
										<figure>
											<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-15.png'} alt="freelancer desc" />
										</figure>
										<div className="wt-title">
											<h3>55</h3>
											<span>Completed Jobs</span>
										</div>
									</div> 
								</div>
								<div className="wt-proposalsr">
									<div className="wt-proposalsrcontent  wt-freelancelike">
										<figure>
											<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-15.png'} alt="avatar desc" />
										</figure>
										<div className="wt-title">
											<h3>$10</h3>
											<span>Total Money Spent</span>
										</div>
									</div> 
								</div>								
							</aside>
							
						</div>
					</div>
				</section>
			</main>
		


            </>
    );
}
export default Dashboard;