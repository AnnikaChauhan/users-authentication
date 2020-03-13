import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import PrivateRoutes from "./PrivateRoutes";
import PrivateProfile from "../component/PrivateProfile";

import firebase, { providers } from "../firebase";
import PublicProfile from "../component/PublicProfile/PublicProfile";
import NavBar from "../component/NavBar/NavBar";

const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {
    state = {
        user: null,
        name: null,
        photo: null,
        email: null
    }

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                // console.log(result.user);
                this.setState({ 
                    user: result.user,
                    name: result.user.displayName,
                    photo: result.user.photoURL,
                    email: result.user.email
                });
                globalHistory.navigate("/private/me");
                console.log(this.state.user);
                console.log(this.state.name);
                console.log(this.state.photo);
                console.log(this.state.email);
            })
            .catch(error => {
                console.log(error)
            })
    }

    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({ 
                    user: null,
                    name: null,
                    photo: null,
                    email: null
                });
                globalHistory.navigate("/public");
                //console.log(this.state.user);
            })
    }

    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="public" />
                <PublicProfile signIn={this.signIn} path="public" />
                <PrivateRoutes path="private" user={this.state.user}>
                    <PrivateProfile path="me" signOut={this.signOut} name={this.state.name} email={this.state.email} photo={this.state.photo} />
                </PrivateRoutes>
                <NotFound default />
            </Router>
        );
    }
}