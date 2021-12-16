import "./Signup.scss";
import React from "react";
import Header from "../../layouts/header/Header";
import SignupComponent from "../../components/signup/Signup";
import Perks from "../../components/perks/Perks";

function Signup(){
    return(
        <section className="container">
            <Header/>
            <section className="account">
                <SignupComponent/>
                <Perks/>
            </section>
        </section>
    );
}

export default Signup;