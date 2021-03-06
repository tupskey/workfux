import React from "react";

const OneOff = () => {
   
    return (
        <>
            <div className="wt-haslayout wt-innerbannerholder">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
							<div className="wt-innerbannercontent">
							<div className="wt-title"><h2>One Off Project.</h2></div>
							<ol className="wt-breadcrumb">
								<li><a href="index.html">Home</a></li>
								
							</ol>
							</div>
						</div>
					</div>
				</div>
			</div>


			<main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
				<div className="wt-haslayout wt-main-section">
					<div className="wt-haslayout">
						<div className="container">
							<div className="row">
								<div id="wt-twocolumns" className="wt-twocolumns wt-haslayout">
									<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
										<aside id="wt-sidebar" className="wt-sidebar">
											<div className="wt-widget wt-effectiveholder">
												<div className="wt-widgettitle">
													<h2>Categories</h2>
												</div>
												<div className="wt-widgetcontent">
													<form className="wt-formtheme wt-formsearch">
														<fieldset>
															<div className="form-group">
																<input type="text" name="Search" className="form-control" placeholder="Search Category" />
																<a href="/" className="wt-searchgbtn"><i className="lnr lnr-magnifier"></i></a>
															</div>
														</fieldset>
													</form>
												</div>
											</div>
									   </aside>
									</div>
									<div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
										<div className="wt-userlistingholder wt-haslayout">	
											<div className="wt-userlistinghold wt-featured wt-userlistingholdvtwo">
												<span className="wt-featuredtag"><img src={process.env.PUBLIC_URL +  'assets/images/featured.png'} alt="img description" data-tipso="Plus Member" className="template-content tipso_style" /></span>
												<div className="wt-userlistingcontent">
													<div className="wt-contenthead">
														<div className="wt-title">
															<a href="usersingle.html"><i className="fa fa-check-circle"></i> Light Bulb Association</a>
															<h2>I want some customization and installation</h2>
														</div>
														<div className="wt-description">
															<p>Nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit inati voluptate velit esse cillum dolore eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim id est laborum ut perspiciatis...</p>
														</div>
														<div className="wt-tag wt-widgettag">
															<a href="/">PHP</a>
															<a href="/">HTML</a>
															<a href="/">JQuery</a>
														</div>
													</div>
													<div className="wt-viewjobholder">
														<ul>
															<li><span><i className="fa fa-dollar-sign wt-viewjobdollar"></i>Professional</span></li>
															<li><span><em><img src={process.env.PUBLIC_URL + 'assets/images/flag/img-04.png'} alt="img description" /></em>England</span></li>
															<li><span><i className="far fa-folder wt-viewjobfolder"></i>Type: Per Hour</span></li>
															<li><span><i className="far fa-clock wt-viewjobclock"></i>Duration: 03 Months</span></li>
															<li><span><i className="fa fa-tag wt-viewjobtag"></i>Job ID: gy3yV2Vm5u</span></li>
															<li><a href="/" className="wt-clicklike wt-clicksave"><i className="fa fa-heart"></i> Save</a></li>
															<li className="wt-btnarea"><a href="userlisting.html" className="wt-btn">View Job</a></li>
														</ul>
													</div>
												</div>
											</div>
											
											<nav className="wt-pagination">
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
								</div>
							</div>
						</div>
					</div>
				</div>
</main>
			
        </>
    );
}

export default OneOff;