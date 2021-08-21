import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    //This is one way of initializing state
    /* constructor(props) {
        super(props); // Super must be called everytime the constructor function is used

        this.state = { latitude: null, errorMessage: '' }; // This, initializes the state to an object with a key.
    } */

    //This is the cleanest and most common way of initializing state. No constructor is required.
    state = { latitude: null, errorMessage: '' };

    // It is better to put initial data loading or API calls inside the componentDidMount lifecycle method.
    // This is specially true if that data only needs to be loaded one time.

    componentDidMount() {
        //Assigning the latitude property to "this" so instead of loading the full geolocation object,
        //it loads only the latitude

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message }),
        );
    }

    //DIRECT ASSIGNMENT TO this.state CAN ONLY BE DONE WHEN STATE IS INITIALIZED IN THE CONSTRUCTOR FUNCTION.
    //IN ALL OTHER CASES, THE setState FUNCTION MUST BE USED!!!

    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <ErrorMessage errorMessage={this.state.errorMessage} />;
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude} />;
        }
        return <LoadingSpinner message="Please accept location request" />;
    }

    render() {
        return <div className="border-red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
