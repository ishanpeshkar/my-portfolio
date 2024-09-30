import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, myself <br />Ishan Peshkar</h1>
                <p className={styles.description}>I am a Full Stack Web Developer. <br /> Reach out to know more.</p>
                <a href="mailto:ishanpeshkar@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroMale.png")} alt="Hero Image of Me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};