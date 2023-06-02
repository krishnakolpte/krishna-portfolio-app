/** @format */

import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <HeaderPhone
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
            <Header
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
            <Home />
            <Work />
            <Timeline />
            <Services />
            <Testimonial />
            <Contact />
            <Footer />
            <Toaster />
        </>
    );
}

export default App;
