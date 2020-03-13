import React, {Component} from "react";
import { globalHistory } from "@reach/router";

export default class PrivateRoutes extends Component {
    render(){
        if(!this.props.user){
            globalHistory.navigate("/public");
            return null;
        } else {
            //globalHistory.navigate("/private/me");
            return this.props.children;
        }
    }
}