
import React, { Component} from "react";
import { Link } from "react-router-dom";
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
	




  const validEmail = (text) => {
	    const regex = RegExp(
	        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	      );
	     
	    return !regex.test(text);
	}

	
const checkPassword = (str) =>
{
    const  re = RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);

    return !re.test(str);
}

class Register extends  Component {

	constructor() {
		super()

		this.state = {
			firstname: '',
			lastname: '',
			password: '',
			username: '',
			currentStep: 1,
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
				errors.password = checkPassword(value) ? 'Please enter your password must contain a Uppercase, Lowercase, Special Charcater and a number' : '' 
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
		const {email, username, password} = this.state;
		const user = {email, username, password};
		this.props.regUser(user)
		console.log(user)
	}

	_next = () => {
		let currentStep = this.state.currentStep
		currentStep = currentStep >= 2? 3: currentStep + 1
		this.setState({
			currentStep: currentStep
		})
	}

	_prev = () => {
		let currentStep = this.state.currentStep
		currentStep = currentStep <= 1? 1: currentStep - 1
		this.setState({
			currentStep: currentStep
		})
	}

	previousButton() {
		let currentStep = this.state.currentStep;
		if(currentStep !== 1) {
			return (
				<button className="wt-btn" type="button" onClick={this._prev}>
						Previous
				</button>
			)
		}
		return null;
	}

	nextButton() {
		let currentStep = this.state.currentStep;
		if(currentStep <3) {
			return (
				<button type="button" className="wt-btn float-right" onClick={this._next}>
						Next
				</button>
			)
		}
		return null;
	}

	render () {
	
		const {errors} = this.state;

	
		
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
												
												<form  className="wt-formtheme wt-formregister" onSubmit={this.handleSubmit}>
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
														{/* <div className="form-group">
															<input type="email" name="email" value={this.state.email} className="form-control" onChange={this.handleChange} placeholder="work email address" />
															{
																errors.email.length > 0 && 
																<span  className="errors">{errors.email}</span>
															}
														</div> */}

														<Step1  currentStep={this.state.currentStep} handleChange={this.handleChange} email={this.state.email} />
															{
																errors.email.length > 0 && 
															<span  className="errors">{errors.email}</span>
															}

														<Step2  currentStep={this.state.currentStep} handleChange={this.handleChange} username={this.state.username} />
															{
																errors.username.length > 0 && 
															<div>	
															<span  className="errors">{errors.username}</span>
															</div>
															}
														<Step3 currentStep={this.state.currentStep} handleChange={this.handleChange} password={this.state.password} confirmpassword={this.state.confirmpassword} />
														{
															errors.password.length > 0 && 
															<div>
															<span  className="errors">{errors.password}</span>
															</div>
														}
														{
														errors.confirmpassword.length > 0 && 
														<div>
														<span  className="errors">{errors.confirmpassword}</span>
														</div>
														}
														{this.previousButton()}
														{this.nextButton()}
														<fieldset className="wt-formregisterstart">
														
													</fieldset>
														
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


function Step1(props) {
	if (props.currentStep !== 1) {
		return null
	} return (
		<div className="form-group">
		<input type="text" name="email" value={props.email} className="form-control" onChange={props.handleChange} placeholder="Continue with your email..." />
		</div>
	)
} 

function Step2(props) {
	if (props.currentStep !== 2) {
		return null
	} return (
		<div className="form-group">
		<input type="text" name="username" value={props.username} className="form-control" onChange={props.handleChange} placeholder="Username..." />
		</div>
	)
} 

function Step3(props) {
	const forme =  props.password && props.confirmpassword;
	const enabled = !validateForm(forme);
	if (props.currentStep !== 3) {
		return null
	} return (
		<>
			<div className="form-group form-group-half">
			<input type="password" name="password" value={props.password} className="form-control" onChange={props.handleChange} placeholder="password..." />
			</div>
			<div className="form-group form-group-half">
			<input type="password" name="confirmpassword" value={props.confirmpassword} className="form-control" onChange={props.handleChange} placeholder="Confirm Password*" />
			</div>
			<div className="form-group">
				
			<button style={{width: '100%'}} type="submit"  className="wt-btn" disabled={!enabled}  >Join now </button>
			</div>
	</>
	)
} 
