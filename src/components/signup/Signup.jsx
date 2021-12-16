import "./Signup.scss";
import React from "react";
import Button from "../button/Button";

function Signup() {

    function togglePassword(id) {
        var x = document.getElementById(id);
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    return (
        <form action="" className="signup">
            <h1 className="signup__heading typo__heading-h1">Create an Account</h1>

            <input type="tel" placeholder="Enter Mobile" className="signup__input" />
            <input type="item" placeholder="Enter Email" className="signup__input" />
            <div className="signup__password">
                <input type="password" placeholder="Enter Password" className="signup__input" id="password" />
                <i className="signup__eyeopenner" onClick={() => togglePassword("password")}>
                    <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3636 7.00006C13.3636 7.84393 13.0284 8.65323 12.4317 9.24994C11.835 9.84665 11.0257 10.1819 10.1818 10.1819C9.33795 10.1819 8.52864 9.84665 7.93193 9.24994C7.33523 8.65323 7 7.84393 7 7.00006C7 6.15618 7.33523 5.34688 7.93193 4.75017C8.52864 4.15346 9.33795 3.81824 10.1818 3.81824C11.0257 3.81824 11.835 4.15346 12.4317 4.75017C13.0284 5.34688 13.3636 6.15618 13.3636 7.00006V7.00006Z" fill="#859FC1" />
                        <path d="M0 7C0 7 3.81818 0 10.1818 0C16.5455 0 20.3636 7 20.3636 7C20.3636 7 16.5455 14 10.1818 14C3.81818 14 0 7 0 7ZM10.1818 11.4545C11.3632 11.4545 12.4963 10.9852 13.3317 10.1498C14.167 9.31445 14.6364 8.18142 14.6364 7C14.6364 5.81858 14.167 4.68555 13.3317 3.85016C12.4963 3.01477 11.3632 2.54545 10.1818 2.54545C9.0004 2.54545 7.86737 3.01477 7.03198 3.85016C6.19659 4.68555 5.72727 5.81858 5.72727 7C5.72727 8.18142 6.19659 9.31445 7.03198 10.1498C7.86737 10.9852 9.0004 11.4545 10.1818 11.4545V11.4545Z" fill="#859FC1" />
                    </svg>
                </i>
            </div>
            <div className="signup__password">
                <input type="password" placeholder="Confirm Password" className="signup__input" id="confirmPassword" />
                <i className="signup__eyeopenner" onClick={() => togglePassword("confirmPassword")}>
                    <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3636 7.00006C13.3636 7.84393 13.0284 8.65323 12.4317 9.24994C11.835 9.84665 11.0257 10.1819 10.1818 10.1819C9.33795 10.1819 8.52864 9.84665 7.93193 9.24994C7.33523 8.65323 7 7.84393 7 7.00006C7 6.15618 7.33523 5.34688 7.93193 4.75017C8.52864 4.15346 9.33795 3.81824 10.1818 3.81824C11.0257 3.81824 11.835 4.15346 12.4317 4.75017C13.0284 5.34688 13.3636 6.15618 13.3636 7.00006V7.00006Z" fill="#859FC1" />
                        <path d="M0 7C0 7 3.81818 0 10.1818 0C16.5455 0 20.3636 7 20.3636 7C20.3636 7 16.5455 14 10.1818 14C3.81818 14 0 7 0 7ZM10.1818 11.4545C11.3632 11.4545 12.4963 10.9852 13.3317 10.1498C14.167 9.31445 14.6364 8.18142 14.6364 7C14.6364 5.81858 14.167 4.68555 13.3317 3.85016C12.4963 3.01477 11.3632 2.54545 10.1818 2.54545C9.0004 2.54545 7.86737 3.01477 7.03198 3.85016C6.19659 4.68555 5.72727 5.81858 5.72727 7C5.72727 8.18142 6.19659 9.31445 7.03198 10.1498C7.86737 10.9852 9.0004 11.4545 10.1818 11.4545V11.4545Z" fill="#859FC1" />
                    </svg>
                </i>
            </div>
            <span className="signup__confirm">
                <input type="checkbox" className="signup__confirm_input" />
                <label htmlFor="signup__item_input" className="signup__confirm_label typo__heading-h4">I
                    hereby confirm that I am above 18 years old.</label>
            </span>

            <Button className="signup__submit" link="otp">
                Verify OTP
            </Button>
            


            <span className="signup__agreement typo__heading-h5">
                By creating this account, you agree to our <a href="/#/">Privacy Policy</a>
                and <a href="/#/">Terms of Use</a>
            </span>
        </form>
    )
}

export default Signup;