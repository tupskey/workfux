
import { Bar } from 'react-chartjs-2';



const Dashboard = () => {

	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June'],
		datasets: [
		  {
			label: 'Total Earnings',
			data: [12, 19, 3, 5, 10, 3],
			backgroundColor: [
			  'rgba(255, 99, 132, 0.2)',
			  'rgba(54, 162, 235, 0.2)',
			  'rgba(255, 206, 86, 0.2)',
			  'rgba(75, 192, 192, 0.2)',
			  'rgba(153, 102, 255, 0.2)',
			  'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
			  'rgba(255, 99, 132, 1)',
			  'rgba(54, 162, 235, 1)',
			  'rgba(255, 206, 86, 1)',
			  'rgba(75, 192, 192, 1)',
			  'rgba(153, 102, 255, 1)',
			  'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		  },
		],
	  };
	  
	  const options = {
		scales: {
		  yAxes: [
			{
			  ticks: {
				beginAtZero: true,
			  },
			},
		  ],
		},
	  };



    return(
            <>
		  
	<div id="wt-wrapper" className="wt-wrapper wt-haslayout  wt-innerbgcolor">
	
	<div className="wt-contentwrapper">

		<main id="wt-main" className="wt-main wt-haslayout">
			
			<section className="wt-haslayout wt-jobpostedholder">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
						<div className="wt-haslayout wt-dbsectionspace">
							<div className="wt-dashboardbox">
								<div className="wt-dashboardboxtitle wt-yeartag">
									<h2>Job Posted</h2>
									<div className="wt-tag wt-widgettag">
										<a href="/">2019</a>
										<a href="/">2018</a>
										<a href="/">2017</a>
									</div>
								</div>
								<div className="wt-dashboardboxcontent">
								<div id="wt-postedsilder" className="wt-postedsilder" >
											<div className="item">
												<div className="wt-posteditem">
													<span style={{textAlign: 'center'}}><i className="fa fa-check-circle"></i> Louanne Mattioli</span>
													<h3>I want some customization for my Wordpress blog within three days of completion</h3>
												</div>
											</div>
								</div>
									<div className="wt-jobchartholder" style={{marginTop: '50px'}}>
										<Bar data={data} options={options} />
									</div>
								</div>
							</div>
						</div>
					</div>
				
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
						<aside id="wt-sidebar" className="wt-sidebar wt-dashboardsave wt-dbsectionspace">
							<div className="wt-proposalsr wt-box-shadow">
								<div className="wt-proposalsrcontent">
									<figure>
										<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-17.png'} alt="desc"/>
									</figure>
									<div className="wt-title">
										<h3>0</h3>
										<span>Ongoing Order</span>
									</div>
								</div> 
							</div>
							<div className="wt-proposalsr wt-box-shadow">
								<div className="wt-proposalsrcontent wt-componyfolow">
									<figure>
										<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-16.png'} alt="DESC" />
									</figure>
									<div className="wt-title">
										<h3>0</h3>
										<span>Completed Order</span>
									</div>
								</div> 
							</div>								
							<div className="wt-proposalsr wt-box-shadow">
								<div className="wt-proposalsrcontent  wt-freelancelike">
									<figure>
										<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-15.png'} alt="DESC" />
									</figure>
									<div className="wt-title">
										<h3>0</h3>
										<span>Cancelled Orders</span>
									</div>
								</div> 
							</div>
							<div className="wt-proposalsr wt-box-shadow">
								<div className="wt-proposalsrcontent wt-repostjob">
									<figure>
										<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-18.png'} alt=" DEC" />
									</figure>
									<div className="wt-title">
										<h3>0</h3>
										<span>Total Orders</span>
									</div>
								</div> 
							</div>								
						</aside>
					</div>
				</div>
			</section>
			
			<section className="wt-haslayout wt-dbsectionspace wt-padding-add-top wt-moredetailsholder">
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
									<h3>Order A Virtual Assistant</h3>
									<a href="assistant.html">Click To View</a>
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

		</main>


	</div>

</div>

            </>
    );
}
export default Dashboard;