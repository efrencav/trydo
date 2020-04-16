import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">User experience design <span> - UI/UX</span></a>
                                                    Delight the user and make it work.
                                                </li>
                                                <li>
                                                    <a href="/service">Web and user interface design<span> - Development</span></a>
                                                    Websites, web experiences, ...
                                                </li>
                                                <li>
                                                    <a href="/service">Design layout <span> - Graphic Design</span></a>
                                                    I have over 20-years of Graphic Design experience.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">AMA Crystal Award <span> - Packaging Design</span> - 2018</a>
                                               </li>
                                               <li>
                                                   <a href="/service">BMA Lantern Awards <span>- ASDP Launch Event</span> - 2017</a>
                                               </li>
                                               <li>
                                                   <a href="/service">BMA Lantern Awards <span>- Infinity System Trailer Traveling Exhibit</span> - 2016</a>
                                               </li>
                                               <li>
                                                   <a href="/service">BMA Lantern Awards <span>- Capability Brochure</span> - 2015</a>
                                               </li>
                                               <li>
                                                   <a href="/service">BMA Lantern Awards <span>- Products and Services Catalog</span> - 2014</a>
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Art Director<span> - Schlumberger</span></a> July 2013 - April 2020
                                               </li>
                                               <li>
                                                   <a href="/service">Art Director<span> - Cosentino</span></a> October 2008 - June 2013
                                               </li>
                                               <li>
                                                   <a href="/service">Senior Graphic Designer<span> - Morris Architects </span></a> October 2001 - September 2008
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Certificate - Full-Stack Web Development<span> - University of Texas</span></a> 2018 - 2019
                                               </li>
                                               <li>
                                                   <a href="/service">Associates of Graphic Design<span> - The Art Institute of Houston</span></a> 1997 - 1999
                                               </li>
                                               <li>
                                                   <a href="/service">Diploma<span> - San Jacinto College</span></a> 1997 - 1998
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;