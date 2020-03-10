import React, { Component } from "react";
import NavItem from "./NavItem";
import styles from "./NavBar.module.scss";

export default class NavBar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <ul>
                    <NavItem route="/public" name="Public" toggleMenu={this.props.toggleMenu} />
                    <NavItem route="/private/me" name="Private" />
                </ul>
            </nav>
        );
    }
}