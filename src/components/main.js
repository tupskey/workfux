import React, { Component }  from "react";
import { Route, Switch } from "react-router";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import OneOff from "./oneOff";
import Register from "./register";
import Virtual from "./virtual";

class Main extends Component {

    render () {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/join" component={Register} />
                    <Route path="/hire-virtual-assistant" component={Virtual} />
                    <Route path="/one-off-project" component={OneOff} />
                </Switch>
                <Footer/>
            </>
        )
    }

}

export default Main;