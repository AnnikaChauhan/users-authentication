import React, { Component } from "react";
import NavItem from "./NavItem";

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <NavItem route="/public" name="Public" />
                    <NavItem route="/private/me" name="Private" />
                </ul>
            </nav>
        );
    }
}