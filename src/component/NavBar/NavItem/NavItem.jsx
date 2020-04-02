import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./NavItem.module.scss";

export default class NavItem extends Component {
    render(props) {
        return (
            <p className={styles.navitem}>
                <Link 
                {...props}
                getProps={ ({ isCurrent }) => {
                    return {
                        style: {
                            textDecoration: isCurrent ? "underline" : "none"
                        }
                    }
                } }
                to={this.props.route}>{this.props.name}</Link>
            </p>
        );
    }
}