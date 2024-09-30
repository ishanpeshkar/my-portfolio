import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact =() => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Wanna Connect?</h2>
                <p>Feel free to Reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:ishanpeshkar@gmail.com">ishanpeshkar@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/ishan-peshkar/">LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Githhub icon" />
                    <a href="https://github.com/ISHANPESHKAR">GitHub</a>
                </li>
            </ul>
        </footer>
    )
}