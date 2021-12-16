import "./OTP.scss";
import React from "react";
import Header from "../../layouts/header/Header";
import OTPComponent from "../../components/otp/OTP"
import Perks from "../../components/perks/Perks";

function OTP() {
    return (
        <section className="container">
            <Header />
            <section className="account">
                <OTPComponent/>
                <Perks />
            </section>
        </section>
    );
}

export default OTP;