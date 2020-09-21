import React, {useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import {Context} from "./Wrapper";

function Header(props) {

    const context = useContext(Context);

    return (
        <div>
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
                <select className="custom-select custom-select-sm language" value = {context.locale} onChange={context.selectLanguage}>
                    <option value= 'en'>EN</option>
                    <option value= 'uk'>UK</option>
                    <option value= 'ru'>RU</option>
                </select>
            </div>
        </header>
        </div>
    )
}
export default Header;