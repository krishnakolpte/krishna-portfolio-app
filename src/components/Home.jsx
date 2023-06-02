/** @format */

import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

function Home({ ratio }) {
    const ClientCount = useRef(null);
    const ProjectCount = useRef(null);

    const animationClientCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (ClientCount.current.textContent = v.toFixed()),
        });
    };
    const animationProjectCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (ProjectCount.current.textContent = v.toFixed()),
        });
    };

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: "0",
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: "0",
                opacity: 1,
            },
        },
    };

    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I Am <br /> Krishna Kolapte
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: ["A Developer", "A Designer", "A Creater"],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}
                    />
                    <div>
                        <a href="mailto:official.krishna@gmail.com">Hire Me</a>
                        <a href="#work">
                            Projects <BsArrowUpRight />
                        </a>
                    </div>

                    <article>
                        <p>
                            +{" "}
                            <motion.span
                                whileInView={animationClientCount}
                                ref={ClientCount}>
                                100
                            </motion.span>
                        </p>
                        <span>Clients Worldwide</span>
                    </article>

                    <aside>
                        <article>
                            <p>
                                +{" "}
                                <motion.span
                                    whileInView={animationProjectCount}
                                    ref={ProjectCount}>
                                    500
                                </motion.span>
                            </p>
                            <span>Projects Done</span>
                        </article>
                        <article data-special>
                            <p>Contact</p>
                            <span>official.krishna@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img
                    src={me}
                    alt="Krishna"
                />
            </section>
            <BsChevronDown />
        </div>
    );
}

export default Home;
