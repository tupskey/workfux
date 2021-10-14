import React, { Component} from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const validateForm = errors => {
	let valid = true;
	Object.values(errors).forEach(value => value.length >= 0 && (valid = false));
	return valid;
  };

  const validateConfirmPassword = (
	  password,
	  confirmpassword 
	) => {  
	  if (password !== confirmpassword) {
	    return false;
	  } else {
	    return true;
	  }
	}
	


// const validEmailRegex = RegExp(
// 	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
//   );

  const validEmail = (text) => {
	    const regex = RegExp(
	        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	      );
	     
	    return !regex.test(text);
	}

class Register extends  Component {

	constructor() {
		super()

		this.state = {
			firstname: '',
			lastname: '',
			password: '',
			username: '',
			confirmpassword: '',
			email: '',
			status: 'company',
			errors: {
				firstname: '',
				lastname: '',
				email: '',
				username: '',
				password: '',
				confirmpassword: ''
			}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange = event => {
		event.preventDefault();
		const {name, value} = event.target;
		let errors = this.state.errors;

		switch(name) {
			case 'firstname': 
				errors.firstname = value.length < 3 ? 'Firstname must be greater than 3 characters': '' ||
				 name === '' ? 'Please Enter your firstname' : ''
			break;
			case 'lastname':
				errors.lastname = value.length < 3 ? 'Lastname must be greater than 3 characters': '' ||
				 name === '' ? 'Please Enter your lastname' : ''
			break;
			case 'username':
				errors.username = value.length < 3 ? 'username must be greater than 3 characters': '' ||
				 name === '' ? 'Please Enter your username' : ''
			break;
			case 'email':
				errors.email = validEmail(value)  ? 'Please Enter a Valid Email Adrress' : '' 
			break;
			case 'password':
				errors.password = value.length < 7 ? 'Please enter 7 Characters and above' : '' 
			break;
			case 'confirmpassword': 
				errors.confirmpassword = validateConfirmPassword(this.state.password, value) ? '' : 'Your Passwords do not match each other'  
			break;
			default:
				break;
		}

		this.setState({
			errors, [name] : value
		})
	}

	handleSubmit (event) {
		event.preventDefault();
		this.props.history.push('/continue-reg')
	}

	render () {
	
		const {errors} = this.state;
		const forme =  this.state.email 
		const enabled = !validateForm(forme);
	
		
		return (
			<>
				<div className="wt-haslayout wt-innerbannerholder">
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
								<div className="wt-innerbannercontent">
								<div className="wt-title"><h2>Join Now For FREE</h2></div>
								<ol className="wt-breadcrumb">
									<li><NavLink to="/">Home</NavLink></li>
								</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
	
				<main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
					
					<div className="wt-haslayout wt-main-section">
						<div className="container">
							<div className="row justify-content-md-center">
								<div className="col-xs-12 col-sm-12 col-md-10 push-md-1 col-lg-8 push-lg-2">
									<div className="wt-registerformhold">
										<div className="wt-registerformmain">
											<div className="wt-registerhead">
												<div className="wt-title">
													<h3>Get your free account</h3>
												</div>
												<div className="wt-description">
													<p>Consectetur adipisicing elit sed dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina</p>
												
												</div>
												
											</div>
											<div className="wt-socialicons wt-iconwithtext" style={{marginBottom: '10px'}}>
														{/* <li className="wt-facebook"><a href="/"><i className="fab fa-facebook-f"></i><em>Facebook</em></a>
														</li>
													 */}
														<li className="wt-googleplus" >< Link to="/" style={{borderRadius: '25px'}}><i className="fab fa-google-plus-g" style={{borderRadius: '25px'}}></i><em>Continue with Google</em></Link></li>
											</div>
											<div className="wt-description">
													<p style={{textAlign: 'center'}}><strong>or</strong></p>
												
												</div>
											<div className="wt-joinforms">
												
												<form  className="wt-formtheme wt-formregister">
													<fieldset className="wt-registerformgroup">
														{/* <div className="form-group wt-form-group-dropdown form-group-half">
															<input type="text" name="firstname"  className="form-control" value={this.state.firstname} onChange={this.handleChange} placeholder="First Name" />
															{
																errors.firstname.length > 0 && 
																<span  className="errors">{errors.firstname}</span>
															}
														</div>
														<div className="form-group form-group-half">
															<input type="text" name="lastname" className="form-control" value={this.state.lastname} onChange={this.handleChange} placeholder="Last Name" />
															{
																errors.lastname.length > 0 && 
																<span  className="errors">{errors.lastname}</span>
															}
														</div> */}
														<div className="form-group">
															<input type="email" name="email" value={this.state.email} className="form-control" onChange={this.handleChange} placeholder="work email address" />
															{
																errors.email.length > 0 && 
																<span  className="errors">{errors.email}</span>
															}
														</div>
														
														<fieldset className="wt-formregisterstart">
														
													</fieldset>
														<div className="form-group">
															<button style={{width: '100%'}} type="submit" disabled={!enabled} className="wt-btn" onClick={this.handleSubmit} >Continue with email </button>
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
				</main>
			</>
		);
		
	}
}

	
export default withRouter(Register);