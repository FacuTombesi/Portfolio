import React from "react";
import style from "../styles/Contact.module.css";

const Contact = () => {
    return (
        <section className={style.contact} id="contact">
            <div className={style.contactCont}>
                <p className={style.contactTitle}>CONTACT</p>
                <hr color="white" width="10%" />
            </div>
        </section>
    );
};

export default Contact;