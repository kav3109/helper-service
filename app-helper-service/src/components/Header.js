import React from 'react';
import {FormattedMessage} from 'react-intl';
import {LANGUAGES} from '../core/constants';

export default class Header extends React.Component {


    constructor(props) {
        super(props);
        this.curLangs = [props.lang];
        LANGUAGES.forEach((val) => {
            if(val !== this.props.lang) this.curLangs.push(val);
        });
        console.log(this.curLangs);
    }

    render() {

        return (
            <header className="header">
                <div
                    className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal">
                        <FormattedMessage
                            id = "app.header"
                            defaultMessage="Welcome to Helper"
                        />
                    </h5>
                    <nav className="my-2 my-md-0 mr-md-3">
                        {/*<a className="p-2 text-dark" href="#">Features</a>*/}
                    </nav>
                    <select className="custom-select custom-select-sm language">
                        {this.curLangs.map(city => {
                            return (
                                <option key={city} value={city}>{city.toUpperCase()}</option>
                            )
                        })}
                    </select>
                </div>
            </header>
        )
    }
}