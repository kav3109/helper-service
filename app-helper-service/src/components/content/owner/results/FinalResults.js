import React, {useState} from 'react';
import StartResults from "./StartResults";
import PropTypes from 'prop-types';
import ChartResults from "./ChartResults";
import TableResults from "./TableResults";

function FinalResults(props) {

    const [results, setResults] = useState();
    console.log(props.dataResults);

    return (
        <div className="card w-75 m-auto">
            <div className="card-body">
                <TableResults />
                <ChartResults />
            </div>
        </div>
    )
}

StartResults.propTypes = {
    dataResults: PropTypes.array
};

export default FinalResults;