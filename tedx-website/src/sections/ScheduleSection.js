import React from 'react'
import {Element} from "react-scroll";
import Count from "../Components/Count";

function ScheduleSection() {
    return (
        <Element name="schedule" className="section mx-5">
            <div 
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
            <div className="columns">
                <div className="column">
                    <h1 className="section-title has-text-centered is-size-1-mobile">SCHEDULE</h1>
                </div>
            </div>
            <Count className="" />
            </div>
           
            
            <div className="xl:mx-4">
            <div className="columns">
                <div className="column"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">08.30 - 09.00</p>
                                <p className="has-text-weight-bold">OPEN GATE</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.00 - 09.09</p>
                                <p className="has-text-weight-bold">OPENING VIDEO & MC</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.09 - 09.13</p>
                                <p className="has-text-weight-bold">OPENING SPEECH</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.15 - 09.33</p>
                                <p className="has-text-weight-bold">DR. ANTON WARDAYA</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.34 - 09.52</p>
                                <p className="has-text-weight-bold">JOANNE GISELLA</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="column"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.53 - 09.58</p>
                                <p className="has-text-weight-bold">SERENITY PERFORMANCE</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.59 - 10.17</p>
                                <p className="has-text-weight-bold">BILLY STEVANUS</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">10.18 - 10.36</p>
                                <p className="has-text-weight-bold">BETHA REIKA</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">10.37 - 11.07</p>
                                <p className="has-text-weight-bold">BREAK</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.08 - 11.26</p>
                                <p className="has-text-weight-bold">IRAWATI PUTERI</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="column"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.27 - 11.45</p>
                                <p className="has-text-weight-bold">NICOLE ELEANORE</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.46 - 11.56</p>
                                <p className="has-text-weight-bold">SYC PERFORMANCE</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.57-12.15</p>
                                <p className="has-text-weight-bold">CHRISTIE BASIL</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">12.16-12.34</p>
                                <p className="has-text-weight-bold">GEDE TANOK (BAGUSDE)</p>
                            </div>
                        </div>
                        
                         <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">12.35-12.38</p>
                                <p className="has-text-weight-bold">CLOSING STATEMENT</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">12.38 - 12.48</p>
                                <p className="has-text-weight-bold">CRESSENDO PERFORMANCE</p>
                            </div>
                        </div>
                        {/*<div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.58 - 12.00</p>
                                <p className="has-text-weight-bold">Closing</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="column"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="timeline">
                    <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">13.45-13.59</p>
                                <p className="has-text-weight-bold">Ayesha Felice</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">13.59-14.19</p>
                                <p className="has-text-weight-bold">QnA</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">14.19-14.29</p>
                                <p className="has-text-weight-bold">Kevin Frans</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">14.29-14.49</p>
                                <p className="has-text-weight-bold">QnA</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">14.49-14.54</p>
                                <p className="has-text-weight-bold">SEREN1TY Performance</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">14.54-15.03</p>
                                <p className="has-text-weight-bold">Timothy Ronald</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">15.03-15.20</p>
                                <p className="has-text-weight-bold">Closing</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            </div>
        </Element>
    )
}

export default ScheduleSection

/**/
