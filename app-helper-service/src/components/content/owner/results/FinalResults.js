import React from 'react';
import StartResults from "./StartResults";
import PropTypes from 'prop-types';
import Charts from "./Charts";

function FinalResults(props) {

    console.log(props.dataResults);

    return (
        <div className="content card w-50">
            <div className="card-body">
                <h1>Final results</h1>
                <Charts />
            </div>
        </div>
    )
}

StartResults.propTypes = {
    dataResults: PropTypes.array
};

export default FinalResults;