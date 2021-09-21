import React, { Component } from "react"
import { NavLink} from 'react-router-dom'
import { withRouter } from "react-router"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'





class Header extends Component {

    constructor () {
        super()

		this.state = {
			isModalOpen : false,
			username: 'tope',
			password: 'tope',
			authenticated: false,
			usernameError: '',
			passwordError: '',
			remember: false,
			msg: ''
		}
		this.toggleModal = this.toggleModal.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
    }



	

	toggleModal () {
		this.setState({
			isModalOpen : !this.state.isModalOpen
		})
	}
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			 [name]: value
		})
	}

	validate() {
        let usernameError = '';
        let passwordError = '';
		let msg =''
		

        if(!this.state.username) {
            usernameError = "Username is required"
        }
        if(!this.state.password) {
            passwordError = "Password is required"
        }
		
		if(this.state.username !== 'tope'){
			msg = 'incorrect'
		}
        if(usernameError || passwordError || msg) {
            this.setState({usernameError, passwordError, msg})
            return false;
        }
        return true;
    }

	handleSubmit = e => {
		e.preventDefault();
		if(this.validate()) {
			this.setState({
				username: '',
				password: '',
				passwordError: '',
				usernameError: '',
				msg: '',
				authenticated: true
			})
			const { username, password} = this.state
			const user = {username, password}
			console.log(user)
			this.props.history.push('/hire-virtual-assistant')
			this.toggleModal()
			console.log('good')
		
		}else{
		console.log('fail')	
		}
	}

    render() {
		
        return (
            <>
            <header id="wt-header" className="wt-header wt-haslayout">
				<div className="wt-navigationarea">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<strong className="wt-logo"><a href="index.html"><img src={process.env.PUBLIC_URL + 'assets/images/logo.png'}alt="company logo here" /></a></strong>
								<div className="wt-rightarea">
									<nav id="wt-nav" className="wt-nav navbar-expand-lg">
										<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
											<i className="lnr lnr-menu"></i>
										</button>
										<div className="collapse navbar-collapse wt-navigation" id="navbarNav">
											<ul className="navbar-nav">
												<li className="menu-item-has-children page_item_has_children">
													<a href="/">Home</a>
												</li>
                                                <li className="nav-item">
                                                    <NavLink to="/"> Messages</NavLink>
												</li>
												<li className="nav-item">
                                                    <NavLink to="/"> About Us</NavLink>
												</li>
                                            
												<li className="menu-item-has-children page_item_has_children">
													<NavLink to="/services">Services</NavLink>
												</li>
												<li className="menu-item-has-children page_item_has_children">
													<a href="/">Orders</a>
													<ul className="sub-menu">
														<li>
															<a href="userlisting.html">Active</a>
														</li>
														<li className="current-menu-item">
															<a href="usersingle.html">Cancelled</a>
														</li>
                                                        <li className="current-menu-item">
															<a href="usersingle.html">Completed</a>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</nav>
									
									<div className="wt-loginarea">
										<figure className="wt-userimg">
											<img src={process.env.PUBLIC_URL + 'assets/images/user-login.png'} alt="img description" />
										</figure>
										
								<div className="wt-loginoption">
									<Button color="danger" className="wt-loginbtn"  id="wt-loginbtn" onClick={this.toggleModal}>Log in </Button>
									<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
										<ModalHeader toggle={this.toggleModal}>
											<span>Log in</span>
										</ModalHeader>
										<ModalBody>
										<form className="wt-formtheme wt-loginform do-login-form" onSubmit={this.handleSubmit}>
													<fieldset>
														<div className="form-group">
															<input type="text" name="username" className="form-control" 
															placeholder="Username" onChange={this.handleChange}
															value={this.state.username} />
															{
																this.state.username.length < 1 &&
																<div className="errors">{this.state.usernameError}</div>
															}
															{
																this.state.username.length > 1 && 
																<div  className="errors">{this.state.msg}</div>
															}
														</div>
														<div className="form-group">
															<input type="password" name="password" className="form-control" 
															placeholder="Password" onChange={this.handleChange} value={this.state.password} />
															{
																this.state.password.length < 1 && 
																<div  className="errors">{this.state.passwordError}</div>
															}
														</div>
														<div className="wt-logininfo">
															<button  className="wt-btn do-login-button">Login</button>
															
															<span className="wt-checkbox">
																<input id="wt-login" type="checkbox" name="rememberme" />
																<label htmlFor="wt-login">Keep me logged in</label>
															</span>
															
														</div>
													</fieldset>
													</form>
													</ModalBody>
													<ModalFooter>
													<div className="wt-loginfooterinfo">
														<a href="/" className="wt-forgot-password">Forgot password?</a>
														<NavLink to="/join">Create account</NavLink>
													</div>
													</ModalFooter>
												
												
												{/* <form className="wt-formtheme wt-loginform do-forgot-password-form wt-hide-form">
											        <fieldset>
											            <div className="form-group">
											                <input type="email" name="email" className="form-control get_password" placeholder="Email" />
											            </div>
											           
											            <div className="wt-logininfo">
											                <a href="/" className="wt-btn do-get-password">Get Pasword</a>
											            </div>     
											        </fieldset>
											        <div className="wt-loginfooterinfo">
											            <a href="/" className="wt-show-login">Login</a>
											            <a href="register.html">Create account</a>
											        </div>
											    </form> */}
										
									</Modal>
                                </div>   
										<NavLink  to="/join" className="wt-btn">Join Now</NavLink>
									</div>
									<div className="wt-userlogedin">
										<figure className="wt-userimg">
											<img src={process.env.PUBLIC_URL + 'assets/images/user-img.jpg'} alt="user description" />
										</figure>
										<div className="wt-username">
											<h3>Louanne Mattioli</h3>
											<span>Amento Tech</span>
										</div>
										<nav className="wt-usernav">
											<ul>
												<li className="menu-item-has-children page_item_has_children">
													<NavLink to="/dashboard">
														<span>Dashboard</span>
													</NavLink>
												</li>
												<li>
													<a href="dashboard-profile.html">
														<span>My Profile</span>
													</a>
												</li>
												<li className="menu-item-has-children">
													<a href="/">
														<span>Orders</span>
													</a>
													<ul className="sub-menu">
														<li><a href="dashboard-completejobs.html">Active Orders</a></li>
														<li><a href="dashboard-canceljobs.html">Cancelled Orders</a></li>
														<li><a href="dashboard-ongoingjob.html">Completed Orders</a></li>
														<li><a href="dashboard-ongoingjob.html">Ongoing VA Orders</a></li>
														
													</ul>
												</li>
												<li className="wt-notificationicon menu-item-has-children">
													<a href="/">
														<span>Messages</span>
													</a>
													<ul className="sub-menu">
														<li><a href="dashboard-messages.html">Messages</a></li>
														<li><a href="dashboard-messages2.html">Messages V 2</a></li>
													</ul>
												</li>
												<li>
													<a href="dashboard-invocies.html">
														<span>Invoices</span>
													</a>
												</li>
												<li>
													<a href="dashboard-category.html">
														<span>Category</span>
													</a>
												</li>
												<li>
													<a href="dashboard-packages.html">
														<span>Packages</span>
													</a>
												</li>
												<li>
													<a href="dashboard-accountsettings.html">
														<span>Account Settings</span>
													</a>
												</li>
												<li>
													<a href="dashboard-helpsupport.html">
														<span>Help &amp; Support</span>
													</a>
												</li>
												<li>
													<a href="index.html">
														<span>Logout</span>
													</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

            </>
        )
    }

}

export default withRouter(Header);


