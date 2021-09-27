import React, { Component} from "react";
import { NavLink } from "react-router-dom";

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
			confirmpassword: '',
			email: '',
			status: 'company',
			errors: {
				firstname: '',
				lastname: '',
				email: '',
				password: '',
				confirmpassword: ''
			}
		}
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

	render () {
	
		const {errors} = this.state;
		const forme = this.state.firstname && this.state.lastname  &&  this.state.password && this.state.confirmpassword  && this.state.email;
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
													<h3>Join For a Good Start</h3>
												</div>
												<div className="wt-description">
													<p>Consectetur adipisicing elit sed dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina</p>
												</div>
											</div>
											<div className="wt-joinforms">
												<ul className="wt-joinsteps">
													<li className="wt-active"><a href="/">01</a></li>
													<li><a href="/">02</a></li>
												</ul>
												<form  className="wt-formtheme wt-formregister">
													<fieldset className="wt-registerformgroup">
														<div className="form-group wt-form-group-dropdown form-group-half">
															<span className="wt-select">
																<select  onChange={this.handleChange} >
																	<option value="Mr">mr.</option>
																	<option value="Mrs">mrs</option>
																</select>
															</span>
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
														</div>
														<div className="form-group">
															<input type="text" name="email" value={this.state.email} className="form-control" onChange={this.handleChange} placeholder="Email" />
															{
																errors.email.length > 0 && 
																<span  className="errors">{errors.email}</span>
															}
														</div>
														
			
														<div className="form-group form-group-half">
															<input type="password" name="password" value={this.state.password} className="form-control" onChange={this.handleChange} placeholder="Password*" />
															{
																errors.password.length > 0 && 
																<span  className="errors">{errors.password}</span>
															}
														</div>
														<div className="form-group form-group-half">
															<input type="password" name="confirmpassword" value={this.state.confirmpassword} className="form-control" onChange={this.handleChange} placeholder="Confirm Password*" />
															{
																errors.confirmpassword.length > 0 && 
																<span  className="errors">{errors.confirmpassword}</span>
															}
														</div>
														<fieldset className="wt-formregisterstart">
														
													</fieldset>
														<div className="form-group">
															<button type="submit" disabled={!enabled} className="wt-btn">Join Now </button>
													</div>
													</fieldset>
												   
												</form>
												<div className="wt-joinnowholder">
													<div className="wt-title">
														<h4>Join Now With</h4>
													</div>
													<div className="wt-description">
														<p>Use a social account for faster login or easy registration to directly get in to your account and start a good business</p>
													</div>
													<ul className="wt-socialicons wt-iconwithtext">
														<li className="wt-facebook"><a href="/"><i className="fa fa-facebook-f"></i><em>Facebook</em></a>
														</li>
													
														<li className="wt-googleplus"><a href="/"><i className="fa fa-google-plus-g"></i><em>Google</em></a></li>
													</ul>
												</div>
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

	
export default Register;