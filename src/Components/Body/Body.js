// @flow
import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import {Home} from "./Home/Home";
import classes from './Body.module.css'

type Props = {
    
};

export function Body(props: Props) {
    return (
        <div className={classes.dark}>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/link">
                    <p>link</p>
                </Route>
            </Switch>
        </div>
    );
};