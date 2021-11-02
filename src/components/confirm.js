
import React, {Component } from 'react';
import { connect } from 'react-redux';
import { verifyEmail} from "../redux/actions/useraction";
class ConfirmVerify extends Component {

    componentDidMount() {
        const {location} = this.props;
        const {pathname} = location;
        const token = pathname.split("/account/")[1];
        this.props.verifyEmail(token);
        console.log('testing param',  token);
    }

    render () {
        return (
            <>
                <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
					
					<div className="wt-haslayout wt-main-section">
						<div className="container">
							<div className="row justify-content-md-center">
                            <div className="col-xs-12 col-sm-12 col-md-10 push-md-1 col-lg-8 push-lg-2">
									<div className="wt-registerformhold">
										<div className="wt-registerformmain">
											<div className="wt-registerhead">
												<div className="wt-title">
                                                    <h3>Welcome to Workfux and have a plesant time with us 
                                                    </h3>
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
        )
    }
}

const mapDispatchToProps = dispatch => ({
    verifyEmail: (token) => {dispatch(verifyEmail(token))}
})
export default connect(null, mapDispatchToProps)(ConfirmVerify);