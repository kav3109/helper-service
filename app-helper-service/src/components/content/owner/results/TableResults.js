import React from 'react';
import StartResults from "./StartResults";
import PropTypes from 'prop-types';
import './results.scss';



function TableResults(props) {
    
    console.log(props.colors);
    console.log(props.questions);
    console.log(props.options);

    return (
        <div className="tableWrapper">
            <table className="table">
                <caption>{props.title}</caption>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Question</th>
                    <th scope="col">Options</th>
                    <th scope="col">Results</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Быть?</td>
                    <td>
                        <span style={{backgroundColor:"rgba(255, 0, 255, 0.75)"}} className="colorOption"></span>
                        <span>Да</span><br/>
                        <span style={{backgroundColor:"rgba(0, 255, 0, 0.75)"}} className="colorOption"></span>
                        <span>Нет</span><br/>
                    </td>
                    <td>
                        <span>123</span><br />
                        <span>45</span><br />
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Кандидат</td>
                    <td>
                        <span style={{backgroundColor:"rgba(255, 0, 255, 0.75)"}} className="colorOption"></span>
                        <span>вилкул</span><br/>
                        <span style={{backgroundColor:"rgba(0, 255, 0, 0.75)"}} className="colorOption"></span>
                        <span>филатов</span><br/>
                        <span style={{backgroundColor:"rgba(123, 255, 123, 0.75)"}} className="colorOption"></span>
                        <span>краснов</span><br/>
                    </td>
                    <td>
                        <span>123</span><br />
                        <span>12</span><br />
                        <span>45</span><br />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

StartResults.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.string),
    questions: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string
};

export default TableResults;