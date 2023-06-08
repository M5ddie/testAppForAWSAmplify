// // images
// import aboutImg from '../assets/images/bg.png';
// import skillsImg from '../assets/images/bulb.png';
// import mem1Img from '../assets/images/george.png';
// import mem2Img from '../assets/images/cindy.png';
// import mem3Img from '../assets/images/cleo.png';

// // fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // dependecies
// import { Link } from "react-router-dom";

// // components
// import NavbarBM from '../components/navbar';
// import WwaHero from '../components/wwa_hero';
// import WwaServices from '../components/wwa_services';
// import WwaPricing from '../components/wwa_pricing';

const WhoWeAre = () => {
    return (
        <div>
            <h1>WHO WE ARE PAGE</h1>
            {/* <WwaHero /> */}
            {/* <NavbarBM /> */}

            {/* <!-- ********************** START OF ABOUT ********************** --> */}
            {/* <section className="about d-flex" id="about">
                <div className="about-desc">
                    <h1>Building brands with strong presence</h1>
                    <p>The process of improving some measure of an enterprise's success. Business growth can be achieved either
                        by boosting the top line or revenue of the business with greater product sales or service income, or by
                        increasing the bottom line or profitability of the operation by minimizing costs.
                    </p>
                    <Link to="/contactUs"><button className="about-desc-btn shadow">Meet with us</button></Link>
                </div>
                <div className="about-photo">
                    <img className="shadow-lg" src={aboutImg} alt="" />
                </div>
            </section> */}

            {/* <!-- ********************** END OF ABOUT ********************** --> */}

            {/* <!-- ********************** START OF COUNTERS ********************** --> */}
            {/* <section className="counter">
                <div className="counter-container">
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-users" className='fa-solid' />
                    </div>
                    <div className="content">
                        <span className="num" data-count="143">143</span>
                        <span className="text">Satisfied Clients</span>
                    </div>
                </div>

                <div className="counter-container">
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-gift" className='fa-solid' />
                    </div>
                    <div className="content">
                        <span className="num" data-count="69">69</span>
                        <span className="text">Completed Project a year</span>
                    </div>
                </div>

                <div className="counter-container">
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-blog" className='fa-solid' />
                    </div>
                    <div className="content">
                        <span className="num" data-count="273">273</span>
                        <span className="text">Blog Posts</span>
                    </div>
                </div>

                <div className="counter-container">
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-award" className='fa-solid' />
                    </div>
                    <div className="content">
                        <span className="num" data-val="79">79</span>
                        <span className="text">Awards Recieved</span>
                    </div>
                </div>

            </section> */}
            {/* <!-- ********************** END OF COUNTERS ********************** --> */}

            {/* <!-- ********************** START OF SKILLS ********************** --> */}
            {/* <section className="skills d-flex" id="skills">
                <div className="skills-photo">
                    <img className="shadow-lg" src={skillsImg} alt="" />
                </div>
                <div className="skills-desc">
                    <h1>Creative Solutions for your Business</h1>
                    <p>Creative problem solving is the mental process of creating a solutions to a problem. It is a special form
                        of problem solving in which the netse solution is independently created rather than learned with
                        assistance. Creative problem solving requires more than just knowledge thinking.
                    </p>
                </div>

            </section> */}

            {/* <!-- ********************** END OF SKILls ********************** --> */}

            {/* <WwaServices /> */}

            {/* <!-- ********************** START OF TEAM ********************** --> */}
            {/* <section className="team">
                <div className="member-title">
                    <h1>Meet Our Team</h1>
                </div>
                <div className="member-container">
                    <div className="member">
                        <img src={mem1Img} className="shadow-lg member-image" alt="..."/>
                            <div className="member-body">
                                <div className="member-name">
                                    <h1>George Mugiwara</h1></div>
                                <div className="member-position">
                                    <span>Web Developer</span></div>
                                <div className="member-socials">
                                    <button><FontAwesomeIcon icon="fa-brands fa-github"/></button>
                                    <button><FontAwesomeIcon icon="fa-brands fa-facebook"/></button>
                                    <button><FontAwesomeIcon icon="fa-brands fa-linkedin-in"/></button>
                                    <button><FontAwesomeIcon icon="fa-brands fa-whatsapp"/></button>
                                </div>
                            </div>
                    </div>
                    <div className="member">
                        <img src={mem2Img} className="shadow-lg member-image" alt="..."/>
                            <div className="member-body">
                                <div className="member-name">
                                    <h1>Cindy Zoldyck</h1></div>
                                <div className="member-position">
                                    <span>Chief Executive Officer</span></div>
                                <div className="member-socials">
                                    <button><FontAwesomeIcon icon="fa-brands fa-github" /></button>
                                    <button><FontAwesomeIcon icon="fa-brands fa-facebook" /></button>
                                    <button><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></button>
                                    <button><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></button>
                                </div>
                            </div>
                    </div>
                    <div className="member">
                        <img src={mem3Img} className="shadow-lg member-image" alt="..."/>
                            <div className="member-body">
                                <div className="member-name">
                                    <h1>Haruna Tempest</h1></div>
                                <div className="member-position">
                                    <span>Marketing Specialist</span></div>
                                <div className="member-socials">
                                    <button><FontAwesomeIcon icon="fa-brands fa-github"/></button>
                                    <button><FontAwesomeIcon icon="fa-brands fa-facebook"/></button>
                                    <button><FontAwesomeIcon icon="fa-brands fa-linkedin-in"/></button>
                                    <button><FontAwesomeIcon icon="fa-brands fa-whatsapp"/></button>
                                </div>
                            </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- ********************** END OF TEAM ********************** --> */}

            {/* <WwaPricing /> */}
        </div>

    )

}

export default WhoWeAre