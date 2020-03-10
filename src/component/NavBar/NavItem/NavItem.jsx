import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./NavItem.module.scss";

export default class NavItem extends Component {
    render() {
        return (
            <p className={styles.navitem}>
                <Link to={this.props.route}>{this.props.name}</Link>
            </p>
        );
    }
}