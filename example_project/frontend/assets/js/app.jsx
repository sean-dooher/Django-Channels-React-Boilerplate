import React from "react";
import {connect} from 'react-redux'
import {Navigation} from "./components/navigation/Navigation";
import {PageOne} from "./components/content/page1";
import {PageTwo} from "./components/content/page2";
import PropTypes from "prop-types";
import history from "./history";
import {Router, Route, Switch} from "react-router-dom";

export class AppBase extends React.Component {
    render() {
        return (
            <Router>
                <Navigation> 
                    <Route exact={true} path="/" component={PageOne}/>
                    <Route path="/page2" component={PageTwo}/>
                </Navigation>
            </Router>);
    }
}

AppBase.propTypes = {
};

const mapStateToProps = (state) => {
    return {};
};


let App = connect(mapStateToProps, null)(AppBase);
export default App;