import './App.css';
import {TopNav} from "./Components/TopNav/TopNav";
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Body} from "./Components/Body/Body";
import {ThemeSwitch} from "./Components/ThemeSwitch/ThemeSwitch";
import {useState} from "react";
import ThemeContext from "./Components/ThemeContext";


function App() {
    import('bootstrap/dist/css/bootstrap.min.css')

    const savedTheme = window.localStorage.getItem('theme')

    const [theme, setTheme] = useState(savedTheme ? savedTheme : 'light')

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
        window.localStorage.setItem('theme', newTheme)
    }

    return (
        <div className={"App" + (theme==="dark" ? " dark" : "")}>
            <Router>
                <TopNav />
                <ThemeContext.Provider value={theme}>
                    <ThemeSwitch changeTheme={changeTheme} />
                    <Body />
                </ThemeContext.Provider>
            </Router>
        </div>
    );
}

export default App;
