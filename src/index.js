// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Home layout
import Demo from './dark/PortfolioLanding';

// Element Layout
// import Service from "./elements/Service";
// import ServiceDetails from "./elements/ServiceDetails";
// import About from "./elements/About";
// import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
// import Blog from "./elements/Blog";
// import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";


// Blocks Layout

// import Team from "./blocks/Team";
// import Counters from "./blocks/Counters";
// import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
// import VideoPopup from "./blocks/VideoPopup";
// import Gallery from "./blocks/Gallery";
// import Brand from "./blocks/Brand";
// import ProgressBar from "./blocks/ProgressBar";
// import ContactForm from "./blocks/ContactForm";
// import GoogleMap from "./blocks/GoogleMap";
// import Columns from "./blocks/Columns";
// import PricingTable from "./blocks/PricingTable";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} />

                    {/* Blocks Elements  */}
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio} />

                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio/branding-guidelines`} component={PortfolioDetails} />
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio/kinsmen-group`} component={PortfolioDetails} />
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio/trivia-game`} component={PortfolioDetails} />
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio/jewel-game`} component={PortfolioDetails} />
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio/six-ways`} component={PortfolioDetails} />
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio/portfolio`} component={PortfolioDetails} />

                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
                    <Route component={error404} />

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();