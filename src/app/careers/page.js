import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Careers from "./Career";

const CareersPage = ()=>{
    return(
    <div>
        <Navbar />

        <div className="mt-8">
            <Careers />
        </div>

        <div className="mt-8">
            <Footer />
        </div>

    </div>
    );
}
export default CareersPage;