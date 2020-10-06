import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import English from '../core/lang/en';
import Ukraine from '../core/lang/uk';
import Russia from '../core/lang/ru';
import PropTypes from 'prop-types';

export const Context = React.createContext();
const local = navigator.language;

let lang;
if (local === 'uk') {
    lang = Ukraine;
}else {
    if (local === 'ru') {
        lang = Russia;
    } else {
        lang = English;
    }
}
const Wrapper = (props) => {

    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'uk') {
            setMessages(Ukraine);
        } else {
            if (newLocale === 'ru'){
                setMessages(Russia);
            } else {
                setMessages(English);
            }
        }
    }
    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
};

Wrapper.propTypes = {
  children: PropTypes.object
};

export default Wrapper;