import React, {useEffect} from 'react';
import {useNavigation} from "../../core/hooks/useNavigation";
import { ajax, bayern, betsoft, bitcoin, evolutionGaming,inter, kings,liver,logoM,manCity,manUn,milan, narcos, neteller, netent,pirate,slider1, slotSardCover,sun,tonys, webmoney} from '../../assets/img/images';
import {discord, logo, play} from "../../assets/img/icons/icons";
import {Carousel, FooterCarousel, HeaderCarousel} from "../../components";


const MainScreen = () =>{
    const nav  = useNavigation();
    useEffect(()=>{
        console.log(nav)

    },[nav]);
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md flex-column">
                    <div className="navbar-head">
                        <div className="container">
                            <div className="d-flex justify-content-between">
                                <a className="navbar-brand d-none d-lg-flex" href="./index.html">
                                    <img src={logo} alt=""/>
                                </a>
                                <a className="navbar-brand w-auto h-auto d-lg-none" href="./index.html">
                                    <img src={logoM} alt=""/>
                                </a>
                                <div
                                    className="authorization-interface d-flex align-items-center"
                                >
                                    <button
                                        className="btn-text text-capitalize"
                                        data-bs-toggle="modal"
                                        data-bs-target="#LoginModal"
                                    >
                                        log in
                                    </button>
                                    <button
                                        className="btn-primary text-capitalize"
                                        data-bs-toggle="modal"
                                        data-bs-target="#SignupModal"
                                    >
                                        Sing up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                        <div className="container">
                            <ul className="navbar-nav">
                                <li className="nav-item d-none d-md-flex">
                                    <a className="nav-link active home" href="./main">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                id="Interface-Essential_Home_house-entrance"
                                                data-name="Interface-Essential / Home / house-entrance"
                                                transform="translate(-275 -117)"
                                            >
                                                <g id="Group_13">
                                                    <g id="house-entrance">
                                                        <path
                                                            id="Shape_15"
                                                            d="M299,126.5a1,1,0,0,0-.389-.791l-11-8.5a1,1,0,0,0-1.224,0l-11,8.5a1,1,0,0,0-.387.791V140a1,1,0,0,0,1,1h8a.5.5,0,0,0,.5-.5V136a2.5,2.5,0,0,1,5,0v4.5a.5.5,0,0,0,.5.5h8a1,1,0,0,0,1-1Z"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sport</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Live</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Virtuals</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./casino">Casino</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./slots">Slot</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./promo">Promo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="header-slider">
                    <HeaderCarousel count={3}  data={[
                        {id:1, icon:slider1 },
                        {id:2, icon:slider1 },
                        {id:3, icon:slider1 },
                        {id:4, icon:slider1 },
                        {id:5, icon:slider1 },
                        {id:6, icon:slider1 },
                        {id:7, icon:slider1 }
                    ]} />

{/*
                    <div className="swiper-container">
                        <div className="swiper-wrapper d-flex align-items-center">
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src={slider1} alt=""/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src={slider1} alt=""/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src={slider1} alt=""/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src={slider1} alt=""/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src={slider1} alt=""/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src={slider1} alt=""/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src={slider1} alt=""/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src={slider1} alt=""/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src={slider1} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-pagination"/>
                        <div className="swiper-button swiper-button-prev"/>
                        <div className="swiper-button swiper-button-next"/>
                    </div>*/}
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div
                                    className="col-12 d-flex align-items-center justify-content-between justify-content-md-start section-head">
                                    <div className="section-heading">Sport</div>
                                    <a href="#">View all</a>
                                </div>
                                <div className="col-12">
                                    <div className="row scroll">
                                        <div className="sport-col col-md-6">
                                            <div
                                                className="d-flex flex-column justify-content-between sport-card"
                                            >
                                                <div className="d-flex align-items-start">
                                                    <div
                                                        className="d-flex flex-column align-items-center w-50 team"
                                                    >
                                                        <img src={milan} alt="A.C. Milan"/>
                                                        <span className="team-name">A.C. Milan</span>
                                                    </div>
                                                    <div
                                                        className="d-flex flex-column align-items-center w-50 team"
                                                    >
                                                        <img src={inter} alt="Inter Milan"/>
                                                        <span className="team-name">Inter Milan</span>
                                                    </div>
                                                </div>
                                                <div className="d-block w-100 text-center match-date">
                                                    Jan 28, 12:00 AM
                                                </div>
                                                <div className="match-bets d-flex justify-content-between">
                                                    <div>1.23</div>
                                                    <div>4.09</div>
                                                    <div>1.21</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sport-col col-md-6">
                                            <div
                                                className="d-flex flex-column justify-content-between sport-card"
                                            >
                                                <div className="d-flex align-items-start">
                                                    <div
                                                        className="d-flex flex-column align-items-center w-50 team"
                                                    >
                                                        <img src={manCity} alt="Manchester City"/>
                                                        <span className="team-name">Manchester City</span>
                                                    </div>
                                                    <div
                                                        className="d-flex flex-column align-items-center w-50 team"
                                                    >
                                                        <img src={liver} alt="Liverpool FC"/>
                                                        <span className="team-name">Liverpool FC</span>
                                                    </div>
                                                </div>
                                                <div className="d-block w-100 text-center match-date">
                                                    Jan 29, 12:00 AM
                                                </div>
                                                <div className="match-bets d-flex justify-content-between">
                                                    <div>3.58</div>
                                                    <div>3.92</div>
                                                    <div>2.02</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div
                                    className="col-12 d-flex align-items-center justify-content-between justify-content-md-start section-head">
                                    <div className="section-heading">live</div>
                                    <a href="#">View all</a>
                                </div>
                                <div className="col-12">
                                    <div className="row scroll">
                                        <div className="sport-col col-md-6">
                                            <div
                                                className="d-flex flex-column justify-content-between sport-card live"
                                            >
                                                <div className="d-flex align-items-start">
                                                    <div
                                                        className="d-flex flex-column align-items-center w-50 team"
                                                    >
                                                        <img src={bayern} alt="FC Bayern Mu"/>
                                                        <span className="team-name">FC Bayern Munchen</span>
                                                    </div>
                                                    <div
                                                        className="d-flex flex-column align-items-center w-50 team"
                                                    >
                                                        <img src={ajax} alt="ajax amsterdam"/>
                                                        <span className="team-name">ajax amsterdam</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-between match-live-details"
                                                >
                                                    <span className="score">1</span>
                                                    <span className="match-time">54</span>
                                                    <span className="score">0</span>
                                                </div>
                                                <div className="match-bets d-flex justify-content-between">
                                                    <div>1.03</div>
                                                    <div>2.03</div>
                                                    <div>2.23</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sport-col col-md-6">
                                            <div
                                                className="d-flex flex-column justify-content-between sport-card live"
                                            >
                                                <div className="d-flex align-items-start">
                                                    <div
                                                        className="d-flex flex-column align-items-center w-50 team"
                                                    >
                                                        <img src={manCity} alt="Manchester City"/>
                                                        <span className="team-name">Manchester City</span>
                                                    </div>
                                                    <div
                                                        className="d-flex flex-column align-items-center w-50 team"
                                                    >
                                                        <img src={manUn} alt="Manchester United"/>
                                                        <span className="team-name">Manchester United</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-between match-live-details"
                                                >
                                                    <span className="score">2</span>
                                                    <span className="match-time">90+</span>
                                                    <span className="score">2</span>
                                                </div>
                                                <div className="match-bets d-flex justify-content-between">
                                                    <div>1.23</div>
                                                    <div>3.33</div>
                                                    <div>2.11</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-between justify-content-md-start section-head">
                            <div className="section-heading">slots</div>
                            <a href="#">View all</a>
                        </div>
                        <div className="col-12">
                            <Carousel count={6} data={[{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover}]}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-between justify-content-md-start section-head">
                            <div className="section-heading">casino</div>
                            <a href="#">View all</a>
                        </div>
                        <div className="col-12">
                            <Carousel count={6} data={[{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover},{id:1,icon:slotSardCover}]}/>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="container">
                    <div className="row gx-0 align-items-center">
                        <div className="col-12 d-md-none">
                            <div className="d-flex align-items-center justify-content-between social-list">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="d-flex align-items-center justify-content-center social-item rounded-circle"
                                >
                                    <i className="fab fa-facebook-f facebook"/>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="d-flex align-items-center justify-content-center social-item rounded-circle"
                                >
                                    <i className="fab fa-reddit-alien reddit"/>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="d-flex align-items-center justify-content-center social-item rounded-circle"
                                >
                                    <i className="fab fa-instagram instagram"/>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="d-flex align-items-center justify-content-center social-item rounded-circle"
                                >
                                    <i className="fab fa-twitter twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="d-flex align-items-center justify-content-center social-item rounded-circle"
                                >
                                    <img src="img/icons/discord.svg" alt="" className="discord"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <ul className="footer-menu">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Promotions</a>
                                </li>
                                <li>
                                    <a href="#">Affiliates</a>
                                </li>
                                <li>
                                    <a href="./terms.html">Terms and conditions</a>
                                </li>
                                <li>
                                    <a href="./contact.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3">
                            <ul className="footer-menu">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">KYC Policy</a></li>
                                <li><a href="#">AML Policy</a></li>
                                <li className="d-none d-md-flex"><a href="#">Responsible Gaming Policy</a></li>
                                <li className="d-md-none"><a href="#">Responsible Gaming</a></li>
                                <li><a href="#">Self Exclusion Policy</a></li>
                                <li><a href="#">Underage Gaming Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row gx-0">
                                <div className={"position-relative  logo-list ft-carousel-1"}>
                                    <FooterCarousel count={3} data={[
                                        {id:1,icon:evolutionGaming},
                                        {id:1,icon:netent},
                                        {id:1,icon:betsoft},
                                        {id:1,icon:betsoft},
                                    ]}/>
                                </div>
                                <div className={"position-relative  logo-list ft-carousel-2 last"}>
                                    <FooterCarousel count={3} data={[
                                        {id:1,icon:evolutionGaming},
                                        {id:1,icon:netent},
                                        {id:1,icon:betsoft},
                                        {id:1,icon:betsoft},
                                    ]}/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center footer-bt">
                        <div
                            className="d-flex align-items-center justify-content-center restriction"
                        >
                            <span>+18</span>
                        </div>
                        <div className="footer-copyright">
                            Copyright © 2021 www.planetaxbet.com is operated by Group
                            Enterprises N.V., a company registered and established under the
                            laws of Curaçao. Nexus Group Enterprises N.V. is licensed
                        </div>
                        <div className="d-none d-md-flex align-items-center social-list">
                            <iframe src="https://licensing.gaming-curacao.com/validator/?lh=3a84155f3027a434172149ba09f2bce5&template=seal" width={150} height={50}/>

                        <a
                                href="#"
                                target="_blank"
                                className="d-flex align-items-center justify-content-center social-item rounded-circle"
                            >
                                <i className="fab fa-facebook-f facebook"/>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                className="d-flex align-items-center justify-content-center social-item rounded-circle"
                            >
                                <i className="fab fa-reddit-alien reddit"/>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                className="d-flex align-items-center justify-content-center social-item rounded-circle"
                            >
                                <i className="fab fa-instagram instagram"/>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                className="d-flex align-items-center justify-content-center social-item rounded-circle"
                            >
                                <i className="fab fa-twitter twitter"/>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                className="d-flex align-items-center justify-content-center social-item rounded-circle"
                            >
                                <img src={discord} alt="" className="discord"/>
                            </a>
                        </div>
                        <div>
                            <iframe src="https://licensing.gaming-curacao.com/validator/?lh=3a84155f3027a434172149ba09f2bce5&template=seal" style={{'width':'150px','height':'50px','border':'none','marginLeft':'20px'}}/>
                        </div>
                    </div>
                </div>
            </footer>
            <div
                className="modal fade"
                id="LoginModal"
                tabIndex="-1"
                aria-labelledby="LoginModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered auth-modal">
                    <div className="modal-content">
                        <div className="modal-head">
                            <button className="close" data-bs-dismiss="modal">
                                <img src="img/icons/close.svg" alt="Close modal"/>
                            </button>
                            <div className="modal-title">Log In</div>
                        </div>
                        <form action="" className="form">
                            <div className="input-label">
                                <input type="email" name="email" id="email"/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-label">
                                <input type="password" name="password" id="password"/>
                                <label htmlFor="password">Password</label>
                                <div className="toggle-password hide"></div>
                            </div>
                            <button type="submit" className="btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainScreen
