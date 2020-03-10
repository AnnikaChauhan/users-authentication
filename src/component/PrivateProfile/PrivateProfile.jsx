import React, {Component} from "react";
import styles from "../profile.module.scss";

export default class PrivateProfile extends Component {
    render(){
        return(
            <section className={styles.profile}>
                <button onClick={this.props.signOut}>Sign Out</button>
                <h1>{this.props.name}</h1>
                <img src={this.props.photo}/>
                <h2>Hi, I'm {this.props.name}</h2>
                <p>My email is: {this.props.email}</p>
            </section>
        );
    }
}