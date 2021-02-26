// @flow
import * as React from 'react';

type Props = {

};
type State = {

};

export class Home extends React.Component<Props, State> {

    constructor() {
        super();
        this.state = {
            pagedata: ""
        }

        this.load_data = () => {
            import('./Home.config.json').then(c => {
                this.setState({pagedata: c})
            })
        }
    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        return JSON.stringify(this.state.pagedata) !== JSON.stringify(nextState.pagedata)
    }

    render() {
        this.load_data()
        return (
            <div>
                <h1>{this.state.pagedata.title}</h1>
            </div>
        );
    };
};