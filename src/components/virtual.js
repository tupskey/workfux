import React, {useState} from "react";

const Virtual = () => {
    const  [project, setProject] = useState('');
    const  [note, setNOte] = useState('')

    

    return(
        <>
             <div className="wt-haslayout wt-innerbannerholder">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
							<div className="wt-innerbannercontent">
							<div className="wt-title"><h2>Hire a Virtual Assistant</h2></div>
							<ol className="wt-breadcrumb">
								<li><a href="/">Home</a></li>
								
							</ol>
							</div>
						</div>
					</div>
				</div>
			</div>

            <div className="wt-haslayout wt-main-section">
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="col-xs-12 col-sm-12 col-md-10 push-md-1 col-lg-8 push-lg-2">
								<div className="wt-registerformhold">
									<div className="wt-registerformmain">
										<div className="wt-registerhead">
											<div className="wt-title">
												<h3>Join For a Good Start</h3>
											</div>
											<div className="wt-description">
												<p>Consectetur adipisicing elit sed dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina</p>
											</div>
										</div>
										<div className="wt-joinforms">
											<ul className="wt-joinsteps">
												<li className="wt-done-next"><a href="/"><i className="fa fa-check"></i></a></li>
												<li className="wt-active"><a href="/">02</a></li>
												
											</ul>
											<form className="wt-formtheme wt-formregister">
												<fieldset className="wt-registerformgroup">
													<div className="form-group">
														<span className="wt-select">
															<select className="chosen-select locations" value={project} onChange={(e) => setProject(e.target.value)} placeholder="Country" name="project">
                                                                <option  default>Select a project</option>
																<option value="graphics">Graphics</option>
																<option value="conetent">Content Writing</option>
																<option value="seo">S.E.O</option>
																<option value="branding">Branding</option>
																<option value="uiux">UI/UX</option>
															</select>
														</span>
													</div>	
												</fieldset>	
												<fieldset>
												<div className="form-group ">
															<span className="wt-select">
																<select value={project} onChange={(e) => setProject(e.target.value)}>
																	<option value="" disabled="">Select Gender</option>
																	<option value="">Male</option>
																	<option value="">Female</option>
																</select>
															</span>
														</div>
												</fieldset>
                                                <fieldset className="wt-registerformgroup">
													<div className="form-group">
														<span className="wt-select">
															<select className="chosen-select locations" value={project} onChange={(e) => setProject(e.target.value)} placeholder="Country" name="project">
                                                                <option  default>Select How many slides you want</option>
																<option value="graphics">Graphics</option>
																<option value="conetent">Content Writing</option>
																<option value="seo">S.E.O</option>
																<option value="branding">Branding</option>
																<option value="uiux">UI/UX</option>
															</select>
														</span>
													</div>	
												</fieldset>	
                                                <fieldset className="wt-registerformgroup">
													<div className="form-group">
														<span className="wt-select">
															<select className="chosen-select locations" value={project} onChange={(e) => setProject(e.target.value)} placeholder="Country" name="project">
                                                            <option  default>Duration</option>
                                                                <option value="graphics">Graphics</option>
																<option value="conetent">Content Writing</option>
																<option value="seo">S.E.O</option>
																<option value="branding">Branding</option>
																<option value="uiux">UI/UX</option>
															</select>
														</span>
													</div>	
												</fieldset>	
                                                <fieldset className="wt-registerformgroup">
													<div className="form-group">
														<textarea className="form-control" value={note} onChange={(e) => setNOte(e.target.value)} placeholder="Add Description">

                                                        </textarea>
													</div>	
												</fieldset>
                                            <fieldset className="wt-registerformgroup">
                                            <div className="form-group">
                                                <div class="wt-btnarea">
													<a href="/" class="wt-btn">Submit Now</a>
												</div>
                                            </div>
                                            </fieldset>
											</form>
										</div>
									</div>
									<div className="wt-registerformfooter">
										<span>Already Have an Account? <a href="/">Login Now</a></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


        </>
    );
}


export default Virtual