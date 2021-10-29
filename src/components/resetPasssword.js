import React,{ Component } from "react";


class ResetPassWord extends Component{
    constructor(){
        super()
        this.state = {
            password: '',
            confirmpasssword: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
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
                                                 <form className="wt-formtheme wt-formregister">
                                                 <div className="form-group form-group-half">
			                                        <input type="password" name="password" value={this.state.password} className="form-control" onChange={this.handleChange} placeholder="password..." />
			                                    </div>
			                                    <div className="form-group form-group-half">
			                                        <input type="password" name="confirmpassword" value={this.state.confirmpassword} className="form-control" onChange={this.handleChange} placeholder="Confirm Password*" />
			                                    </div>
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

export default ResetPassWord