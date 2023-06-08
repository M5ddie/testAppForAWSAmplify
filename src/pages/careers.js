// images
// import aboutImg from '../assets/images/careers.png';


// fontawesome
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// dependecies
//import { Link } from "react-router-dom";
// import { useState } from 'react';

// components
// import NavbarBM from '../components/navbar';
// import CareersHero from '../components/careers_hero';
// import CareersSearchBar from '../components/careers_searchbar';
// import CareersCategFilter from '../components/careers_categFilter';
// import CareersSearchResult from '../components/careers_searchResult';

const Careers = () => {
    // const [searchParam, setSearchParam] = useState("");
    // const [dropDownParam, setDropDownParam] = useState("");
    
    // function getSearch(val){
    //     setSearchParam(val)
    // }

    // function getCategory(val){
    //     setDropDownParam(val)
    // }
    
    return (
        <div>
            <h1>CAREERS PAGE</h1>
            {/* <NavbarBM /> */}
            {/* <CareersHero /> */}
            {/* <!-- ********************** START OF ABOUT ********************** --> */}
            {/* <section className="careers-about d-flex" id="careers-about">
                <div className="careers-about-desc">
                    <h1>What we do</h1>
                    <p>BrightMinds aims to build great business stories, thus helping companies innovate. Concretely,
                        we help marketing managers start meaningful conversations with new talented partners, focusing
                        on building communication and marketing success. Via the platform, marketing managers can identify,
                        in just a few minutes, the most relevant agencies to address ther marketing, creative and digital needs. 
                    </p>
                </div>
                <div className="careers-about-photo">
                    <img className="shadow-lg" src={aboutImg} alt="" />
                </div>
            </section> */}

            {/* <!-- ********************** END OF ABOUT ********************** --> */}

            {/* <!-- ********************** START OF OPENINGS ********************** --> */}
            {/* <section className="careers-opening" id="careers-opening">
                <div className="careers-opening-title text-center">
                    <h1>Our Openings</h1>
                </div>
                <div className="careers-opening-searchWrap d-flex">
                    <CareersSearchBar getSearch={getSearch}/>
                    <CareersCategFilter getCategory={getCategory}/>
                </div>
                <CareersSearchResult searchParam={searchParam} dropDownParam={dropDownParam}/>
            </section> */}
            {/* <!-- ********************** END OF OPENINGS ********************** --> */}

            
        </div>
    )
}

export default Careers