import React from 'react';
import '../footer/footer.scss';
import {FooterCarousel} from "../index";
import {betsoft, evolutionGaming, netent} from "../../assets/img/images";
import {discord} from "../../assets/img/icons/icons";

const Footer =()=>{
    return(
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


                <div className="row gx-0 align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="d-flex align-items-center footer-bt">
                            <div className="d-flex align-items-center justify-content-center restriction">
                                <span>+18</span>
                            </div>
                            <div className="footer-copyright d-flex align-items-center">
                                Copyright ?? 2021 www.planetaxbet.com is operated by Group
                                Enterprises N.V., a company registered and established under the
                                laws of Cura??ao. Nexus Group Enterprises N.V. is licensed
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="d-flex align-items-center justify-content-center footer-bt">

                            <div className="d-none d-md-flex align-items-center social-list">


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
                                <iframe src="https://licensing.gaming-curacao.com/validator/?lh=3a84155f3027a434172149ba09f2bce5&template=seal"
                                        style={{'width':'150px','height':'50px','border':'none','marginLeft':'20px'}}/>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </footer>
    );
}
export default Footer;