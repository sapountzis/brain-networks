// @flow
import * as React from 'react';
import classes from './ThemeSwitch.module.css'
import ThemeContext from "../ThemeContext";

type Props = {
    changeTheme: Function
};

export function ThemeSwitch(props: Props) {

    const toggleTheme = (theme) => {
        if (theme === 'light') {
            props.changeTheme('dark')
        } else {
            props.changeTheme('light')
        }
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className={classes.switchDiv}>
                    <label className={classes.switch}>
                        <input checked={theme === "dark"} type="checkbox" onChange={() => toggleTheme(theme)} />
                        <span className={[classes.slider, classes.round].join(" ")}/>
                    </label>
                </div>
            )}
        </ThemeContext.Consumer>

    );
}