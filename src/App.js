import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TopNav} from "./TopNav/TopNav";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Plot from 'react-plotly.js';

function App() {
    var trace1 = {
        type: 'bar',
        x: [1, 2, 3, 4],
        y: [5, 10, 2, 8],
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
    };

    var data = [ trace1 ];

    var layout = {
        title: 'Responsive to window\'s size!',
        font: {size: 18}
    };

    var config = {responsive: true}
    return (
        <div className="App">
            <Router>
                <TopNav />
                <Switch>
                    <Route path="/home">
                        <Plot data={data} layout={layout} config={config} />
                    </Route>
                    <Route path="/link">
                        <p>link</p>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
