
import React, { Component } from 'react';

class ResultComponent extends Component {

    //Rendering the result 
    render() {
        let { result } = this.props;
        return (
            <div className = "">
            <div className="result">
                <p>{result}</p>
                </div>
                </div>
        );
    }
}

export default ResultComponent;