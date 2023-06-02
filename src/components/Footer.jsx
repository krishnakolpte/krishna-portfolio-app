/** @format */

import React from "react";
import {
    AiFillGithub,
    AiOutlineArrowUp,
    AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <div>
                <img
                    src={
                        "https://res.cloudinary.com/do3egmobd/image/upload/v1683035420/personal/founder_nbnszd.jpg"
                    }
                    alt="Founder"
                />
                <h2>Krishna Kolapte</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>
            <aside>
                <h2>Social Media</h2>
                <article>
                    <a
                        href="https://www.instagram.com/its_krishnavk"
                        target={"blank"}>
                        <AiOutlineInstagram />
                    </a>
                    <a
                        href="https://github.com/krishnakolpte"
                        target={"blank"}>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
}

export default Footer;
