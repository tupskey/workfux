

const Dashboard = () => {
    return(
            <>
			<main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
			<div className="wt-haslayout wt-main-section">
				<div className="wt-contentwrappers">
					<div className="container">
						<div className="row">
						
						<section className="wt-haslayout wt-dbsectionspace wt-padding-add-top wt-moredetailsholder">
						<div className="wt-dashboardbox">
						<div className="wt-tabscontenttitle">
							<h2>Dashboard</h2>
						</div>
						</div>
						
			<div className="row">
		<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
		<div className="wt-insightsitem wt-dashboardbox wt-insightnoticon">
				<figure className="wt-userlistingimg">
					<img src={process.env.PUBLIC_URL +'assets/images/thumbnail/img-19.png'} alt="thumb description" className="mCS_img_loaded" />
				</figure>
				<div className="wt-insightdetails">
					<div className="wt-title">
						<h3>New Messages</h3>
						<a href="/">Click To View</a>
					</div>													
				</div>	
			</div>
		</div>
		<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
			<div className="wt-insightsitem wt-dashboardbox">
				<figure className="wt-userlistingimg">
					<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-20.png'} alt="thmb description" className="mCS_img_loaded" />
				</figure>
				<div className="wt-insightdetails">
					<div className="wt-title">
						<h3>Latest Proposals</h3>
						<a href="/">Click To View</a>
					</div>													
				</div>	
			</div>
		</div>												
		<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
			<div className="wt-insightsitem wt-dashboardbox">
				<ul className="wt-countersoon" data-date="May 14 2019 20:20:22">
					<li><i className="fa fa-spinner fa-spin"></i></li>
					<li>
						<div className="wt-countdowncontent">
							<p>d</p> <span className="days" data-days></span>
						</div>
					</li>
					<li>
						<div className="wt-countdowncontent">
							<p>h</p> <span className="hours" data-hours></span>
						</div>
					</li>
					<li>
						<div className="wt-countdowncontent">
							<p>m</p> <span className="minutes" data-minutes></span>
						</div>
					</li>
					<li>
						<div className="wt-countdowncontent">
							<p>s</p> <span className="seconds" data-seconds></span>
						</div>
					</li>
				</ul> 
				<figure className="wt-userlistingimg">
					<img src={process.env.PUBLIC_URL+ 'assets/images/thumbnail/img-21.png'} alt="imago description" className="mCS_img_loaded" />
				</figure>
				<div className="wt-insightdetails">
					<div className="wt-title">
						<h3>Check Package Expiry</h3>
						<a href="/">Click To View</a>
					</div>													
				</div>	
			</div>
		</div>						
		<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
			<div className="wt-insightsitem wt-dashboardbox">
				<figure className="wt-userlistingimg">
					<img src={process.env.PUBLIC_URL + '/assets/images/thumbnail/img-22.png'} alt="thum description" className="mCS_img_loaded" />
				</figure>
				<div className="wt-insightdetails">
					<div className="wt-title">
						<h3>View Saved Items</h3>
						<a href="/">Click To View</a>
					</div>													
				</div>
				
			</div>
		</div>
	</div>
</section>
<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3"> 
							
							<div className="wt-proposalsr wt-box-shadow">
								<div className="wt-proposalsrcontent">
									<figure>
										<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-17.png'} alt="thumb desc" />
									</figure>
									<div className="wt-title">
										<h3>50</h3>
										<span>Total Ongoing Jobs</span>
									</div>
								</div> 
							</div>
							<div className="wt-proposalsr wt-box-shadow">
								<div className="wt-proposalsrcontent wt-componyfolow">
									<figure>
										<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-16.png'} alt="desc" />
									</figure>
									<div className="wt-title">
										<h3>14</h3>
										<span>Total Completed Jobs</span>
									</div>
								</div> 
							</div>								
															
						
					</div>
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3"> 
													
							<div className="wt-proposalsr wt-box-shadow">
								<div className="wt-proposalsrcontent  wt-freelancelike">
									<figure>
										<img src={process.env.PUBLIC_URL + "assets/images/thumbnail/img-15.png"} alt="idesce" />
									</figure>
									<div className="wt-title">
										<h3>20</h3>
										<span>Total Cancelled Jobs</span>
									</div>
								</div> 
							</div>
							<div className="wt-proposalsr wt-box-shadow">
								<div className="wt-proposalsrcontent wt-repostjob">
									<figure>
										<img src={process.env.PUBLIC_URL +'assets/images/thumbnail/img-18.png'} alt="imago" />
									</figure>
									<div className="wt-title">
										<h3>$54</h3>
										<span>Total Money Spent</span>
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
export default Dashboard;