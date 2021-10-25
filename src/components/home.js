import { Link } from "react-router-dom";


const Home = () => {
    return (
           <>
                <div className="wt-haslayout wt-bannerholder">
				 <div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-12 col-lg-5">
							<div className="wt-bannerimages">
								<figure className="wt-bannermanimg" data-tilt>
                                <img src={process.env.PUBLIC_URL + 'assets/images/bannerimg/img-01.png'} alt="banner description"/>
									<img src={process.env.PUBLIC_URL + 'assets/images/bannerimg/img-02.png'} className="wt-bannermanimgone" alt="banner description" />
									<img src={process.env.PUBLIC_URL + 'assets/images/bannerimg/img-03.png'} className="wt-bannermanimgtwo" alt="banner description" />
								</figure>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
							<div className="wt-bannercontent">
								<div className="wt-bannerhead">
									<div className="wt-title">
										<h1><span>Hire a virtual Assistant</span> for $500 per month!</h1>
									</div>
									<div className="wt-description">
										<p>Meet talents that can handle your one-off projects… 
											save time, decongest your office and save money…</p>
									</div>
								</div>
								<form className="wt-formtheme wt-formbanner">
									<fieldset>
										<div className="form-group">
											<input type="text" name="fullname" className="form-control" placeholder="I’m looking for" />
											<div className="wt-formoptions">
												<div className="wt-dropdown">
													<span>In: <em className="selected-search-type">Freelancers </em><i className="lnr lnr-chevron-down"></i></span>
												</div>
												<div className="wt-radioholder">
													{/* <span className="wt-radio">
														<input id="wt-freelancers" data-title="Freelancers" type="radio" name="searchtype" value="freelancer"  />
														<label htmlFor="wt-freelancers">Freelancers</label>
													</span> */}
													<span className="wt-radio">
														<input id="wt-jobs"  data-title="Jobs" type="radio" name="searchtype" value="job" />
														<label htmlFor="wt-jobs">Jobs</label>
													</span>
													<span className="wt-radio">
														<input id="wt-company"  data-title="Companies" type="radio" name="searchtype" value="job"/>
														<label htmlFor="wt-company">Companies</label>
													</span>
												</div>
												<a href="userlisting.html" className="wt-searchbtn"><i className="lnr lnr-magnifier"></i></a>
											</div>
										</div>
									</fieldset>
								</form>
								<div className="wt-videoholder">
									<div className="wt-videoshow">
										<a data-rel="prettyPhoto[video]" href="https://www.youtube.com/watch?v=J37W6DjqT3Q"><i className="fa fa-play"></i></a>
									</div>
									<div className="wt-videocontent">
										<span>See For Yourself!<em>How it works &amp; experience the ultimate joy.</em></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


            <main id="wt-main" className="wt-main wt-haslayout">
				
				<section className="wt-haslayout wt-main-section">
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
								<div className="wt-sectionhead wt-textcenter">
									<div className="wt-sectiontitle">
										<h2>Explore Categories</h2>
										<span>Professional by categories</span>
									</div>
								</div>
							</div>
							<div className="wt-categoryexpl">
								<div className="col-12 col-sm-12 col-md-3 col-lg-3 float-left">
									<div className="wt-categorycontent">
										<figure><img src={process.env.PUBLIC_URL + 'assets/images/categories/img-01.png'} alt="category description" /></figure>
										<div className="wt-cattitle">
											<h3><a href="/">Mobiles</a></h3>
										</div>
										<div className="wt-categoryslidup">
											<p>Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.</p>
											<a href="/">Explore <i className="fa fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-3 col-lg-3 float-left">
									<div className="wt-categorycontent">
										<figure><img src={process.env.PUBLIC_URL + 'assets/images/categories/img-08.png'} alt="category description" /></figure>
										<div className="wt-cattitle">
											<h3><a href="/">Digital Marketing</a></h3>
										</div>
										<div className="wt-categoryslidup">
											<p>Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.</p>
											<a href="/">Explore <i className="fa fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-3 col-lg-3 float-left">
									<div className="wt-categorycontent">
										<figure><img src={process.env.PUBLIC_URL + 'assets/images/categories/img-02.png'} alt="category description" /></figure>
										<div className="wt-cattitle">
											<h3><a href="/">Writing &amp; Translation</a></h3>
										</div>
										<div className="wt-categoryslidup">
											<p>Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.</p>
											<a href="/">Explore <i className="fa fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-3 col-lg-3 float-left">
									<div className="wt-categorycontent">
										<figure><img src={process.env.PUBLIC_URL + 'assets/images/categories/img-03.png'} alt="category description" /></figure>
										<div className="wt-cattitle">
											<h3><a href="/">Video &amp; Animation</a></h3>
										</div>
										<div className="wt-categoryslidup">
											<p>Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.</p>
											<a href="/">Explore <i className="fa fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-3 col-lg-3 float-left">
									<div className="wt-categorycontent">
										<figure><img src={process.env.PUBLIC_URL + 'assets/images/categories/img-04.png'} alt="categories description" /></figure>
										<div className="wt-cattitle">
											<h3><a href="/">Music &amp; Audio</a></h3>
										</div>
										<div className="wt-categoryslidup">
											<p>Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.</p>
											<a href="/">Explore <i className="fa fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-3 col-lg-3 float-left">
									<div className="wt-categorycontent">
										<figure><img src={process.env.PUBLIC_URL + 'assets/images/categories/img-05.png'} alt="categories description" /></figure>
										<div className="wt-cattitle">
											<h3><a href="/">Programming &amp; Tech</a></h3>
										</div>
										<div className="wt-categoryslidup">
											<p>Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.</p>
											<a href="/">Explore <i className="fa fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-3 col-lg-3 float-left">
									<div className="wt-categorycontent">
										<figure><img src={process.env.PUBLIC_URL + 'assets/images/categories/img-06.png'} alt="category description" /></figure>
										<div className="wt-cattitle">
											<h3><a href="/">Business</a></h3>
										</div>
										<div className="wt-categoryslidup">
											<p>Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.</p>
											<a href="/">Explore <i className="fa fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-3 col-lg-3 float-left">
									<div className="wt-categorycontent">
										<figure><img src={process.env.PUBLIC_URL + 'assets/images/categories/img-07.png'} alt="category description" /></figure>
										<div className="wt-cattitle">
											<h3><a href="/">Fun &amp; Lifestyle</a></h3>
										</div>
										<div className="wt-categoryslidup">
											<p>Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.</p>
											<a href="/">Explore <i className="fa fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
									<div className="wt-btnarea">
										<a href="/" className="wt-btn">View All</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section className="wt-haslayout wt-main-section wt-paddingnull wt-companyinfohold">
					<div className="container">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-12 col-lg-12">
								<div className="wt-companydetails">
									<div className="wt-companycontent">
										<div className="wt-companyinfotitle">
											<h2>Start As Company</h2>
										</div>
										<div className="wt-description">
											<p>Consectetur adipisicing elit sed dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina ilukita ylokem lokateise ination voluptate velit esse cillum.</p>
										</div>
										<div className="wt-btnarea">
											<Link to="/join"><button className="wt-btn">Join Now</button></Link>
										</div>
									</div>
									<div className="wt-companycontent">
										<div className="wt-companyinfotitle">
											<h2>Start As Individual</h2>
										</div>
										<div className="wt-description">
											<p>Consectetur adipisicing elit sed dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina ilukita ylokem lokateise ination voluptate velit esse cillum.</p>
										</div>
										<div className="wt-btnarea">
											<Link to="/join"><button  className="wt-btn">Join Now</button></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			

				<section className="wt-haslayout wt-main-section">
					<div className="container">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 float-left">
								<figure className="wt-mobileimg">
									<img src={process.env.PUBLIC_URL + 'assets/images/mobile-img.png'} alt="mobile description" />
								</figure>
							</div>
							<div className="col-12 col-sm-12 col-md-6 col-lg-6 float-left">
								<div className="wt-experienceholder">
									<div className="wt-sectionhead">
										<div className="wt-sectiontitle">
											<h2>Explore Categories</h2>
											<span>Professional by categories</span>
										</div>
										<div className="wt-description">
											<p>Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina ilukita ylokem lokateise ination voluptate velit esse cillum dolore eu fugiat nulla pariatur lokaim urianewce.</p>
											<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumed perspiciatis.</p>
										</div>
										<ul className="wt-appicon">
											<li>
												<a href="/">
													<figure><img src={process.env.PUBLIC_URL + 'assets/images/app-icon/img-01.png'} alt="app icon description" /></figure>
												</a>
											</li>
											<li>
												<a href="/">
													<figure><img src={process.env.PUBLIC_URL + 'assets/images/app-icon/img-02.png'} alt="app icon  description" /></figure>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				

				
			
			</main>
	
        </>
    );
} 

export default Home;