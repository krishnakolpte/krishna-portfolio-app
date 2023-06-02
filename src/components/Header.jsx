/** @format */

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Header({ openMenu, setOpenMenu }) {
    return (
        <>
            <nav>
                <NavContent setOpenMenu={setOpenMenu} />
            </nav>

            <button
                className="navBtn"
                onClick={() => setOpenMenu(!openMenu)}>
                <AiOutlineMenu />
            </button>
        </>
    );
}

export const HeaderPhone = ({ openMenu, setOpenMenu }) => {
    return (
        <div className={`navPhone ${openMenu ? "navPhoneComes" : ""}`}>
            <NavContent setOpenMenu={setOpenMenu} />
        </div>
    );
};

const NavContent = ({ setOpenMenu }) => (
    <>
        <h2>Krishna.</h2>
        <div>
            <a
                onClick={() => setOpenMenu(false)}
                href="#home">
                Home
            </a>
            <a
                onClick={() => setOpenMenu(false)}
                href="#work">
                Work
            </a>
            <a
                onClick={() => setOpenMenu(false)}
                href="#timeline">
                Experience
            </a>
            <a
                onClick={() => setOpenMenu(false)}
                href="#services">
                Servicess
            </a>
            <a
                onClick={() => setOpenMenu(false)}
                href="#testimonial">
                Testimonials
            </a>
            <a
                onClick={() => setOpenMenu(false)}
                href="#contact">
                Contact
            </a>
        </div>
        <a
            onClick={() => setOpenMenu(false)}
            href="mailto:official.krishna@gmail.com">
            <button>Email</button>
        </a>
    </>
);

export default Header;
