/** @format */

import React from "react";

function Testimonial() {
    return (
        <div id="testimonial">
            <h2>Testimonials</h2>
            <section>
                <TestimonialCard
                    name={"Abhishek"}
                    feddack={"Your Development skills are so good."}
                />
                <TestimonialCard
                    name={"Abhishek"}
                    feddack={"Your Development skills are so good."}
                />
                <TestimonialCard
                    name={"Abhishek"}
                    feddack={"Your Development skills are so good."}
                />
            </section>
        </div>
    );
}

const TestimonialCard = ({ name, feddack }) => (
    <article>
        <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
        />
        <h4>{name}</h4>
        <p>{feddack}</p>
    </article>
);

export default Testimonial;
