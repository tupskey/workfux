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

class Register2 extends  Component {

	constructor() {
		super()

		this.state = {
			firstname: '',
			lastname: '',
			password: '',
			username: '',
			confirmpassword: '',
			email: '',
			status: '',
			errors: {
				firstname: '',
				lastname: '',
				email: '',
				username: '',
				password: '',
				confirmpassword: ''
			}
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange = event => {
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
		event.preventDefault()
		this.props.history.push('/profile')
	}

	render () {
	
		const {errors} = this.state;
		const forme =  this.state.password && this.state.confirmpassword   && this.state.username;
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
													<h3>Continue with your free account registration</h3>
												</div>
												<div className="wt-description">
													<p>Consectetur adipisicing elit sed dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina</p>
												
												</div>
											</div>
											<div className="wt-joinforms">		
													<form  className="wt-formtheme wt-formregister">
														<div className="wt-accordiontitle" id="headingOne">
														<span className="wt-radio">
														<input id="wt-company" type="radio" name="status" value="company" checked={this.state.status === 'company'} onChange={this.handleChange} />
														<label htmlFor="wt-company"> Start As a Company</label>
														</span>
															</div> 
															{
																this.state.status === 'company' 
																			? 
																<fieldset className="wt-registerformgroup">
																<div className="form-group">
																	<input type="text" name="username" value={this.state.username} className="form-control" onChange={this.handleChange} placeholder="Username..." />
																	{
																		errors.username.length > 0 && 
																		<span  className="errors">{errors.username}</span>
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
																</fieldset>
																				:
																			null		
															}
														<div className="wt-accordiontitle" style={{marginTop: '10px'}}>
																<span className="wt-radio">
																	<input id="wt-individual"  type="radio" name="status" value="individual" checked={this.state.status === 'individual'}  onChange={this.handleChange} />
																	<label htmlFor="wt-individual">Start As an Individual</label>
																</span>
														</div>
														{
															this.state.status === 'individual' ? <fieldset className="wt-registerformgroup">
															<div className="form-group">
																<input type="text" name="username" value={this.state.username} className="form-control" onChange={this.handleChange} placeholder="Username..." />
																{
																	errors.username.length > 0 && 
																	<span  className="errors">{errors.username}</span>
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
															</fieldset>
														: 
														null
														}
														<div className="form-group" style={{marginTop: '10px'}}>
															<button style={{width: '100%'}} type="submit" disabled={!enabled} className="wt-btn" onClick={this.handleSubmit} >Join Now </button>
														</div>
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

	
export default Register2;