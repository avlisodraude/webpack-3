import messages from './modules/messages';
import React from 'react';
import ReactDom from 'react-dom';
/*
 * A simple React component
 */
class ReactButton extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            number: messages(1,8)
        };
    }

    changeLabel(){
        console.log('hoi hoi');
        return true;
    }
    render() {
        this.changeLabel();
        return (
            <button className="button" onClick={this.changeLabel}>
                {this.props.name}  {this.state.number}
            </button>
        );
    }
}

class App extends React.Component {

    render() {
        console.log('testing');
        return (
            <div>
                <h1>REACT JS TEMPLATE PROJECT</h1>
                <ReactButton name="Submit Form"/>
                <ReactButton name="Close Form"/>
                <ReactButton name="Open Form"/>
            </div>
        );
    }
}

//Render App component composed of many ReactButton components
ReactDom.render(<App/>, document.getElementById('root'));