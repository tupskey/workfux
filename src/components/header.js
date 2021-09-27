import React, { Component } from "react"
import { NavLink, Link} from 'react-router-dom'
import { withRouter } from "react-router"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'





class Header extends Component {

    constructor () {
        super()

		this.state = {
			isModalOpen : false,
			isnavopen: false,
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
		this.toggleNav = this.toggleNav.bind(this)
    }



	

	toggleModal () {
		this.setState({
			isModalOpen : !this.state.isModalOpen
		})
	}

	toggleNav() {
		this.setState({
			isnavopen: !this.state.isnavopen
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
                                                    <NavLink to="/about"> About </NavLink>
												</li>
                                            
												<li className="menu-item-has-children page_item_has_children">
													<NavLink to="/services">Services</NavLink>
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
													<NavLink to="/hire-virtual-assistant">
														<span>Virtual Assistant</span>
													</NavLink>
												</li>
												<li className="menu-item-has-children page_item_has_children">
												<a href="/">
														<span>Profile</span>
													</a>
													<ul className="sub-menu">
														<li><Link to="/profile">Profile Details</Link></li>
														<li><Link to="/password">Password</Link></li>
														<li><Link to="/email">Email Notification</Link></li>
														<li><Link to="/delete">Delete Account</Link></li>													
													</ul>
												</li>
												<li className="menu-item-has-children">
													<a href="/">
														<span>Orders</span>
													</a>
													<ul className="sub-menu">
													<li><Link to="/completed">Completed Orders</Link></li>
													<li><Link to="/cancelled">Cancelled Orders</Link></li>
													<li><Link to="/ongoing">Ongoing Orders</Link></li>
													</ul>
												</li>
												<li>
													<NavLink to="/workfuxservices">
														<span>WorkFux Services</span>
													</NavLink>
												</li>
												<li className="wt-notificationicon menu-item-has-children">
													<NavLink to="/messages">
													<span>Messages</span>
													</NavLink>	
												</li>
												<li><NavLink to="/custom-offers">
													<span>Custom Offers</span>
													</NavLink>	
												</li>
												<li>
													<NavLink to="/">
													<span>Logout</span>
													</NavLink>
													
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


