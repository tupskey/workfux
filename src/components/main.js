import React, { Component }  from "react";
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

class Main extends Component {

    render () {
        
        
       
        
        return (
            <>
                <Header/>
                
                {
                    window.location.pathname !== '/join' && window.location.pathname !== '/about'
                     && window.location.pathname !== '/services' && window.location.pathname !== '/' &&
                      <Sidebar />
                }
                <Switch>
               
                    <Route exact path="/" component={Home} />
                    <Route   path="/join" component={Register} />
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
                    <Route path="/order-details" component={OrderDetails} />
                </Switch>
             
                <Footer/>
            </>
        )
    }

}

export default withRouter(Main);