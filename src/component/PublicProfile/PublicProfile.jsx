import React, {Component} from "react";
import placeholderPerson from "../../static/images/placeholderPerson.jpeg";
import styles from "../profile.module.scss";

export default class PublicProfile extends Component {
    render(){
        return(
            <section className={styles.profile}>
                <button onClick={this.props.signIn}>Sign In</button>
                <h1>Anonymous</h1>
                <img src={placeholderPerson}/>
                <h2>Hi, I'm Anonymous</h2>
                <p>My email is CLASSIFIED</p>
            </section>
        );
    }
}