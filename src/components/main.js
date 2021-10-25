import React, { Component }  from "react";
import { connect} from 'react-redux';
import { Route, Switch, withRouter } from "react-router";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import OneOff from "./oneOff";
import Register from "./register";
import Virtual from "./virtual";
import Services from "./services";
import Dashboard from "./dashboard/dashboard";
// import Head from "./heaad";
import About from "./about";
import Profile from "./profile/profile";
import Password from "./profile/password";
import Email from "./profile/email";
import Delete from "./profile/delete";
import Completed from "./orders/completed";
import Cancelled from "./orders/cancelled";
import Ongoing from "./orders/ongoing";
import WorkFuxServices from "./dashboard/workfuxservices";
import Messages from "./dashboard/messages";
import Custom from "./dashboard/custom";
import OrderDetails from "./orders/order-detail";
import Sidebar from "./sidebar";
import Invoices from "./dashboard/invoices";
import Register2 from "./registration2";
import { loginUser, regUser } from "../redux/useraction";

class Main extends Component {

    
    render () {
        
        
       
        
        return (
            <>
                <Header loginUser={this.props.loginUser} 
                        isauth={this.props.isAuthenticated} />
                
                {
                    window.location.pathname !== '/join' && window.location.pathname !== '/about'
                    && window.location.pathname !== '/continue-reg'
                     && window.location.pathname !== '/services' && window.location.pathname !== '/' && window.innerWidth > 660 &&
                      <Sidebar />
                }
                <Switch>
               
                    <Route exact path="/" component={Home} />
                    <Route   path="/join" component={() => <Register regUser={this.props.regUser} />} />
                    <Route  path="/services" component={Services} />
                    <Route  path="/about" component={About} />
                    <Route path="/hire-virtual-assistant" component={Virtual} />
                    <Route path="/one-off-project" component={OneOff} />
                    <Route path="/dashboard"  component={Dashboard} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/password"  component={Password} />
                    <Route path="/email"  component={Email} />
                    <Route path="/delete" component={Delete} />
                    <Route path="/completed" component={Completed} />
                    <Route path="/cancelled" component={Cancelled} />
                    <Route path="/ongoing" component={Ongoing} />
                    <Route path="/workfuxservices" component={WorkFuxServices} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/custom-offers" component={Custom} />
                    <Route path="/invoices" component={Invoices} />
                    <Route path="/order-details" component={OrderDetails} />
                    <Route path="/continue-reg"  component={Register2} />
                </Switch>
             
                <Footer/>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => ({
    
    regUser: (email, username, password) => {dispatch(regUser(email, username, password))},
    loginUser: (email, password) => {dispatch(loginUser(email, password))}
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));