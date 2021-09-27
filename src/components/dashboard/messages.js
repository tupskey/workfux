

const Messages = () => {
    return  (
        <>
            
	<div id="wt-wrapper" className="wt-wrapper wt-haslayout  wt-innerbgcolor">
	
    <div className="wt-contentwrapper">
    
        
        <main id="wt-main" className="wt-main wt-haslayout">
            
            <section className="wt-haslayout wt-dbsectionspace ">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                        <div className="wt-dashboardbox wt-messages-holder">
                            <div className="wt-dashboardboxtitle">
                                <h2>Messages</h2>
                            </div>
                            <div className="wt-dashboardboxtitle wt-titlemessages">
                                <a href="/;" className="wt-back"><i className="ti-arrow-left"></i></a>
                                <div className="wt-userlogedin">
                                    <figure className="wt-userimg">
                                        <img src={process.env.PUBLIC_URL + 'assets/images/user-img.jpg'} alt="imge description" />
                                    </figure>
                                    <div className="wt-username">
                                        <h3><i className="fa fa-check-circle"></i> Louanne Mattioli</h3>
                                        <span>Amento Tech</span>
                                    </div>
                                </div>
                                <a href="/;" className="wt-viewprofile">View Profile</a>
                            </div>
                            <div className="wt-dashboardboxcontent wt-dashboardholder wt-offersmessages">
                                <ul>
                                    <li>
                                        <form className="wt-formtheme wt-formsearch">
                                            <fieldset>
                                                <div className="form-group">
                                                    <input type="text" name="Location" className="form-control" placeholder="Search Here" />
                                                    <a href="/" className="wt-searchgbtn"><i className="lnr lnr-magnifier"></i></a>
                                                </div>
                                            </fieldset>
                                        </form>
                                        <div className="wt-verticalscrollbar wt-dashboardscrollbar">
                                        <div class="wt-ad wt-dotnotification">
                                                <figure><img src={process.env.PUBLIC_URL + 'assets/images/messages/img-01.jpg'} alt="imag description" /></figure>
                                                <div class="wt-adcontent">
                                                    <h3>Reta Milnes </h3>
                                                    <span>Consectetur adipisicing elit sed do...</span>
                                                </div>
                                            </div>
                                            <div class="wt-ad wt-dotnotification">
                                                <figure><img src={process.env.PUBLIC_URL + 'assets/images/messages/img-02.jpg'} alt="imag description" /></figure>
                                                <div class="wt-adcontent">
                                                    <h3>Jovan Mery</h3>
                                                    <span>Consectetur adipisicing elit sed do...</span>
                                                </div>
                                            </div>
                                            <div className="wt-ad">
                                                <figure><img src={process.env.PUBLIC_URL + 'assets/images/messages/img-10.jpg'} alt="imge description" /></figure>
                                                <div className="wt-adcontent">
                                                    <h3>Bob Grossman</h3>
                                                    <span>Consectetur adipisicing elit sed do...</span>
                                                </div>
                                            </div>
                                            <div className="wt-ad">
                                                <figure><img src={process.env.PUBLIC_URL + 'assets/images/messages/img-10.jpg'} alt="imge description" /></figure>
                                                <div className="wt-adcontent">
                                                    <h3>Bob Grossman</h3>
                                                    <span>Consectetur adipisicing elit sed do...</span>
                                                </div>
                                            </div>
                                            <div className="wt-ad">
                                                <figure><img src={process.env.PUBLIC_URL + 'assets/images/messages/img-10.jpg'} alt="imge description" /></figure>
                                                <div className="wt-adcontent">
                                                    <h3>Bob Grossman</h3>
                                                    <span>Consectetur adipisicing elit sed do...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="wt-chatarea wt-chatarea-empty">
                                            <figure className="wt-chatemptyimg">
                                                <img src={process.env.PUBLIC_URL + 'assets/images/message-img.png'} alt="img description"/>
                                                <figcaption><h3>No message selected to display</h3></figcaption>
                                            </figure>
                                        </div>
                                        <div className="wt-chatarea">
                                            <div className="wt-replaybox">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="reply" placeholder="Type message here"></textarea>
                                                </div>
                                                <div className="wt-iconbox">
                                                    <i className="lnr lnr-thumbs-up"></i>
                                                    <i className="lnr lnr-thumbs-down"></i>
                                                    <i className="lnr lnr-smile"></i>
                                                    <a href="/;" className="wt-btnsendmsg">Send</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                        <div className="wt-dashboardbox wt-messagebox wt-messageboxvtwo">
                            <div className="wt-dashboardboxcontent">
                                <div className="wt-userprofile">
                                    <figure>
                                        <img src={process.env.PUBLIC_URL + 'assets/images/profile/img-02.jpg'} alt="img description" />
                                    </figure>
                                    <div className="wt-title">
                                        <h3><i className="fa fa-check-circle"></i> Valentine Mehring</h3>
                                        <span>5.0/5 (860 Feedback) <br />Member since May 30, 2013 <br/>@valentine20658</span>
                                        
                                    </div>
                                    <span className="wt-btn">View Profile</span>
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
    )
}

export default Messages;