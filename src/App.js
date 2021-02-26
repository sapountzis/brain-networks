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

    const [theme, setTheme] = useState('light')

    return (
        <div className={"App" + (theme==="dark" ? " dark" : "")}>
            <Router>
                <TopNav />
                <ThemeContext.Provider value={theme}>
                    <ThemeSwitch changeTheme={setTheme} />
                    <Body />
                </ThemeContext.Provider>
            </Router>
        </div>
    );
}

export default App;
