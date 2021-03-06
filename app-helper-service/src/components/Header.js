import React, {useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import {Context} from "./Wrapper";
import { Link } from 'react-router-dom';

function Header() {

    const context = useContext(Context);

    return (
        <div>
        <header className="header">
            <div
                className="d-flex flex-column flex-md-row align-items-center px-md-4 mb-3 bg-white border-bottom shadow-sm">

                    <h5 className="my-0 mr-md-auto font-weight-normal">
                        <Link to="/" style={{textDecoration: "none"}}>
                        <FormattedMessage
                            id = "app.header"
                            defaultMessage="Welcome to Helper"
                        />
                        </Link>
                    </h5>

                <nav className="my-2 my-md-0 mr-md-3">
                    {/*<a className="p-2 text-dark" href="#">Features</a>*/}
                    <select className="custom-select custom-select-sm language" value = {context.locale} onChange={context.selectLanguage}>
                        <option value= 'en'>EN</option>
                        <option value= 'uk'>UK</option>
                        <option value= 'ru'>RU</option>
                    </select>
                </nav>

            </div>
        </header>
        </div>
    )
}
export default Header;