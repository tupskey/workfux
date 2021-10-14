import { Link } from "react-router-dom";

import {  Accordion, Card } from "react-bootstrap"
import { useEffect, useState } from "react";

function calculateTimeLeft() {
	const year = new Date().getFullYear();
	const difference = +new Date(`10/20/${year}`) - +new Date();
	// console.log(difference)
	let timeLeft = {};

	if (difference > 0 ) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60  * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 24),
			seconds: Math.floor((difference / 1000) % 60)
		};
	}
	return timeLeft
}

const OrderDetails = () => {
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

useEffect(() => {
	const id = setTimeout(() => {
		setTimeLeft(calculateTimeLeft());
	}, 1000)

	return () => {
		clearTimeout(id);
	};
})

const timerComponents = []

Object.keys(timeLeft).forEach(interval => {
	if(!timeLeft[interval]) {
		return;
	}
	timerComponents.push(
		<span>
			{timeLeft[interval]}{":"} 
		</span>
	);
})
    return (
        <>
        
	<div id="wt-wrapper" className="wt-wrapper wt-haslayout">	
		<div className="wt-contentwrapper">
            <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
                <div className="wt-haslayout  wt-dbsectionspace">
					<div className="container">
						<div className="row">
							<div id="wt-twocolumns" className="wt-twocolumns wt-haslayout">
								<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left">
									<div className="wt-proposalholder">
										<span className="wt-featuredtag"><img src={process.env.PUBLIC_URL + 'assets/images/featured.png'} alt="imOg description" data-tipso="Plus Member" className="template-content tipso_style" /></span>
										<div className="wt-proposalhead">
											<h2>Creating A Novel of Up to 3000 words and Completing it in two hours a day</h2>
											<ul className="wt-userlisting-breadcrumb wt-userlisting-breadcrumbvtwo">
												<li><span><i className="fa fa-dollar"></i> Professional</span></li>
												<li><span><img src={process.env.PUBLIC_URL + 'assets/images/flag/img-02.png'} alt="iMAG description" />  Article Writing</span></li>
												<li><span><i className="fa fa-folder"></i> Type: Virtual Assistant</span></li>
												<li><span><i className="fa fa-clock-o"></i> Duration: 2 Months</span></li>
											</ul>
										</div>
										<div className="wt-btnarea"><button className="wt-btn">Completed</button></div>
									</div>
								</div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 float-left">
									<div className="wt-proposalholder">
										
										<div className="wt-proposalhead">
											<h2> You will get your project in {timerComponents.length ?  timerComponents :  <span>Time's up </span>} 
											 
                                       </h2>
										
										</div>
									
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
									<div className="wt-projectdetail-holder">
										<div className="wt-projectdetail">
											<div className="wt-title">
												<h3>Project Detail</h3>
											</div>
											<div className="wt-description">
												<p>Excepteur sint occaecat cupidatat non proident, saeunt in culpa qui officia deserunt mollit anim laborum. Seden utem perspiciatis undesieu omnis voluptatem accusantium doque laudantium, totam rem aiam eaqueiu ipsa quae ab illoion inventore veritatisetm quasitea architecto beataea dictaed quia couuntur magni dolores eos aquist ratione vtatem seque nesnt. Neque porro quamest quioremas ipsum quiatem dolor sitem ameteism conctetur adipisci velit sedate quianon.</p>
												<p>Laborum sed ut perspiciatis unde omnis iste natus error sitems voluptatem accusantium doloremque laudantium, totam rem aiam eaque ipsa quae ab illo inventore veritatis etna quasi architecto beatae vitae dictation explicabo. nemo enim ipsam fugit.</p>
												<ul className="wt-projectliststyle">
													<li><span><i className="fa fa-check"></i>Nemo enim ipsam voluptatem quia</span></li>
													<li><span><i className="fa fa-check"></i>Adipisci velit, sed quia non numquam eius modi tempora</span></li>
													<li><span><i className="fa fa-check"></i>Eaque ipsa quae ab illo inventore veritatis et quasi architecto</span></li>
													<li><span><i className="fa fa-check"></i>qui dolorem ipsum quia dolor sit amet</span></li>
												</ul>
												
											</div>
										</div>

                                        <div className="wt-skillsrequired">
                                            
                                            <div className="wt-tag wt-widgettag">
                                              <Link to="/messages"><span>Chats with Admin</span></Link>
											  <Link to="/" style={{backgroundColor: 'green', color: 'white'}}><span>Request for Modification</span></Link>
											  <Link to="/"  style={{backgroundColor: 'red', color: 'white'}}><span>Request for Cancellation</span></Link>
                                            </div>
                                        </div>
                                        <div className="wt-attachments">
											<div className="wt-title">
												<h3>Order Delivery Attachments</h3>
											</div>
                                            <Accordion defaultActiveKey="0" flush>
                                                <Card>

                                                    <Card.Header>
                                                        <Accordion.Toggle  eventKey="0">

                                                    Delivery Date 1
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

                                                        Delivery Date 2
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="1">
                                                    <Card.Body>
                                                        This is a text that supporrts whatever we are doin in French
                                                    </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            </Accordion>
											
										</div>

                                       
										
									</div>
                                   
								</div>
								<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
									<aside id="wt-sidebar" className="wt-sidebar">
										<div className="wt-proposalsr">
											<div className="wt-proposalsrcontent">
												<span className="wt-proposalsicon"><i className="fa fa-angle-double-down"></i><i className="fa fa-book"></i></span>
												<div className="wt-title">
													<h3>$150</h3>
													<span>Proposals Received Till<em>June 27, 2018</em></span>
												</div>
											</div>
										
											<div className="wt-clicksavearea">
												<span>Order ID: tQu5DW9F2G</span>
												<a href="/" className="wt-clicksavebtn"><i className="fa fa-heart" style={{color: 'red'}}></i> Complete Order</a>
											</div>
										</div>
										
										<div className="wt-widget wt-sharejob">
											<div className="wt-widgettitle">
												<h2>Refer a friend </h2>
											</div>
											<div className="wt-widgetcontent">
												<ul className="wt-socialiconssimple">
													<li className="wt-facebook"><a href="/"><i className="fab fa-facebook-f"></i>Share on Facebook</a></li>
													<li className="wt-twitter"><a href="/"><i className="fab fa-twitter"></i>Share on Twitter</a></li>
													
													<li className="wt-googleplus"><a href="/"><i className="fab fa-google-plus"></i>Share on Google Plus</a></li>
												</ul>
											</div>
										</div>
										<div className="wt-widget wt-reportjob">
											<div className="wt-widgettitle">
												<h2>Review This Order</h2>
											</div>
											<div className="wt-widgetcontent">
                                                
												<form className="wt-formtheme wt-formreport">
													<fieldset>
														<div className="form-group">
                                                            <label for="">Choose Review</label>
															<span style={{fontSize: '200px'}} className="wt-stars"><span></span></span>
                                                
														</div>
														<div className="form-group">
															<textarea className="form-control" placeholder="Description" rows="3"></textarea>
														</div>
														<div className="form-group wt-btnarea">
															<a href="/" className="wt-btn">Submit Review</a>
														</div>
													</fieldset>
												</form>
											</div>
										</div>
									</aside>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>

        </>
    )
}

export default OrderDetails;