
import React, {Component} from 'react';

class ResultComponent extends Component {

//Rendering the result 
    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    );
    }
}


export default ResultComponent;