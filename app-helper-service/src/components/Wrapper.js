import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import English from '../core/lang/en';
import Ukraine from '../core/lang/uk';
import Russia from '../core/lang/ru';

const Context = React.createContext();
const local = navigator.language.slice(0,2);
let lang;
if (local === 'ru') {
    lang = Russia;
} else {
    if (local === 'uk') {
        lang = Ukraine;
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
        if (newLocale === 'ru') {
            setMessages(Russia);
        } else {
            if (newLocale === 'ua'){
                setMessages(Ukraine);
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
export default Wrapper;