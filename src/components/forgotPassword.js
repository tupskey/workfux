import React,{ Component } from "react";
import { connect } from "react-redux";
import { forgetpassword } from "../redux/actions/useraction";

// const validEmail = (text) => {
// 	    const regex = RegExp(
// 	        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// 	      );
// 	     
// 	    return !regex.test(text);
// }

class ForgotPassWord extends Component{
    constructor(){
        super()
        this.state = {
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
         this.props.forgetpassword(this.state.email)
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
                                                    <h3>Forgot Your Password
                                                    </h3>
                                                </div>
                                            </div>
                                            <form className="wt-formtheme wt-formregister" onSubmit={this.handleSubmit}>
                                                 <div className="form-group">
		                                            <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.handleChange} placeholder="Continue with your email..." />
		                                        </div>
                                                <button className="wt-btn">Submit</button>
                                             </form>
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
    forgetpassword: (email) => {dispatch(forgetpassword(email))}
})

export default connect(null, mapDispatchToProps)(ForgotPassWord)