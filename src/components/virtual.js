import React from "react";



const Virtual = () => {
    // const  [project, setProject] = useState('');
    // const  [note, setNOte] = useState('')

  

	const style={
		color: 'green',

	}

    return(
        <>
  	<div className="wt-login" >
	<div id="wt-wrapper" className="wt-wrapper wt-haslayout wt-innerbgcolor">
		<div className="wt-contentwrapper">
			<main id="wt-main" className="wt-main wt-haslayout">
                <section className="wt-haslayout wt-dbsectionspace" >
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
								<div className="wt-proposalholder">
                                    <span className="wt-featuredtag"><img src={process.env.PUBLIC_URL + 'assets/images/featured.png'} alt="imog description" data-tipso="Plus Member" className="template-content tipso_style" /></span>
                                    <div className="wt-proposalhead">
                                        <h2>Hire a Virtual Assistant for a low as <span style={style}>$500</span> </h2>
                                        
                                    </div>
                                </div>
                                <div className="wt-proposalamount-holder">
                                    <div className="wt-title">
                                        <h2>Order A virtual Assistant</h2>
                                    </div>
                                    <div className="wt-proposalamount accordion">
                                        <div className="form-group">
                                            <span>( <i className="fa fa-dollar-sign"></i> )</span>
                                            <input type="number" name="amount" className="form-control" value="500" readonly placeholder="Enter Your Proposal Amount" />
                                            <a href="/" className="collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="lnr lnr-chevron-up"></i></a>
                                            <em>Total amount the client will see on your proposal</em>
                                        </div>

                                    </div>
                                    <form className="wt-formtheme wt-formproposal">
                                        <fieldset>
                                            <div className="form-group">
                                                <span className="wt-select">
                                                    <select>
                                                        <option value="">Select Workfux Categories</option>
                                                        <option value="1">Graphics and design</option>
                                                        <option value="2">Digital marketing</option>
                                                        <option value="3">Writing and translation</option>
                                                        <option value="4">Programming and Tech</option>
                                                        <option value="">Photoshop and editing</option>
                                                        <option value="">UI/UX design</option>
                                                    </select>
                                                </span>
                                            </div>
                                            <div className="form-group">
                                                <span className="wt-select">
                                                    <select>
                                                        <option value="">Select Services</option>
                                                        <option value="1">Logo design</option>
                                                        <option value="2">Brand style guides</option>
                                                        <option value="3">Illustration</option>
                                                        <option value="4">Portrait and caricature.</option>
                                                    </select>
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <input  type="text" name="" id="" placeholder="NUMBER"  style={{width: '100%'}} />
                                            </div>

                                            <div className="form-group">
                                                <span className="wt-select">
                                                    <select>
                                                        <option value="">Select Month</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                        <option value="4">Four</option>
                                                    </select>
													</span>
                                            </div>
                                            <div className="form-group">
                                            <fieldset>
												<div class="form-group">
													<textarea id="wt-tinymceeditor" className="form-control wt-tinymceeditor" placeholder="Add Job Detail Here"></textarea>
												</div>
											</fieldset>
                                            </div>
                                        </fieldset>
                                        <fieldset>
                                            <div className="wt-attachments wt-attachmentsvtwo">
                                                <div className="wt-title">
                                                    <h3>Upload File (Optional)</h3>
                                                    <label for="afile">
                                                        <span><i className="lnr lnr-link"></i> Attach File(s)</span>
                                                        <input type="file" name="file" id="afile" />
                                                    </label>
                                                </div>
                                                <ul className="wt-attachfile">
                                                    <li className="wt-uploading">
                                                        <span>Logo.jpg</span>
                                                        <em>File size: 300 kb<i className="lnr lnr-trash"></i></em>
                                                    </li>
                                                    <li>
                                                        <span>Wireframe Document.doc</span>
                                                        <em>File size: 512 kb<i className="lnr lnr-trash"></i></em>
                                                    </li>
                                                    <li>
                                                        <span>Requirments.pdf</span>
                                                        <em>File size: 110 kb<i className="lnr lnr-trash"></i></em>
                                                    </li>
                                                    <li>
                                                        <span>Company Intro.docx</span>
                                                        <em>File size: 224 kb<i className="lnr lnr-trash"></i></em>
                                                    </li>
													</ul>
                                                <div className="wt-btnarea">
                                               
                                                    <a href="/" className="wt-btn">Send Now</a>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                           
                            
						</div>
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 ">
							<aside id="wt-sidebar" className="wt-sidebar wt-dashboardsave">
								<div className="wt-proposalsr">
									<div className="wt-proposalsrcontent">
										<figure>
											<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-17.png'} alt="thunbb" />
										</figure>
										<div className="wt-title">
											<h3>15</h3>
											<span>Ongoing Orders</span>
										</div>
									</div> 
								</div>
								<div className="wt-proposalsr">
									<div className="wt-proposalsrcontent wt-componyfolow">
										<figure>
											<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-16.png'} alt="thunbb" />
										</figure>
										<div className="wt-title">
											<h3>1232</h3>
											<span>Completed Orders</span>
										</div>
									</div> 
								</div>								
								<div className="wt-proposalsr">
									<div className="wt-proposalsrcontent  wt-freelancelike">
										<figure>
											<img src={process.env.PUBLIC_URL + 'assets/images/thumbnail/img-15.png'} alt="thunbb" />
										</figure>
										<div className="wt-title">
											<h3>207</h3>
											<span>Cancelled Orders</span>
										</div>
									</div> 
								</div>								
							</aside>
							<div className="wt-companyad">
								<figure className="wt-companyadimg"><img src={process.env.PUBLIC_URL + 'assets/images/add-img.jpg'} alt="imog description" /></figure>
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


export default Virtual