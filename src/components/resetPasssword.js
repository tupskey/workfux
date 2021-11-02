import React,{ Component } from "react";
import { connect } from "react-redux";
import { resetpassword } from "../redux/actions/useraction";


class ResetPassWord extends Component{


    constructor(){
        super()
        this.state = {
            password: '',
            password_confirmation: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const {location} = this.props;
        const {pathname} = location;
        const token = pathname.split("/reset-password/")[1];
        console.log("tesa", token)
         this.props.resetpassword();
    }

    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
     }

     handleSubmit = event => {
         event.preventDefault();
         const {location} = this.props;
         const {pathname} = location;
         const token = pathname.split("/reset-password/")[1];
         console.log('what', token)
        const {password, password_confirmation} = this.state;
        console.log(password, password_confirmation)
         this.props.resetpassword(token, password, password_confirmation);
         console.log(token, password, password_confirmation)        
     }

    render() {
        return(
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
                                                    <h3>Reset Your Password
                                                    </h3>
                                                </div>
                                                 <form className="wt-formtheme wt-formregister" onSubmit={this.handleSubmit}>
                                                 <div className="form-group form-group-half">
			                                        <input type="password" name="password" value={this.state.password} className="form-control" onChange={this.handleChange} placeholder="password..." />
			                                    </div>
			                                    <div className="form-group form-group-half">
			                                        <input type="password" name="password_confirmation" value={this.state.password_confirmation} className="form-control" onChange={this.handleChange} placeholder="Confirm Password*" />
			                                    </div>
                                                <button className="wt-btn">Reset your password</button>
                                                </form>
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
    resetpassword: (token, password, password_confirmation) => {dispatch(resetpassword(token, password, password_confirmation))}
})

export default connect(null, mapDispatchToProps)(ResetPassWord);