import React from "react";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer"

function ParentChild () {
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
            )
    } 

    export default ParentChild;