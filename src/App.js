import React, { Component } from 'react';
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import ruLocaleData from 'react-intl/locale-data/ru';
import en from '../public/en.json'
import ru from '../public/ru.json'
import logo from './logo.svg';
import './App.css';

addLocaleData([...enLocaleData, ...ruLocaleData])

const translations = {
  en,
  ru
}

class App extends Component {
  constructor() {
    super()
    this.toggleLocale = this.toggleLocale.bind(this)
    this.state = {
      locale: 'en'
    }
  }

  toggleLocale() {
    this.setState({
      locale: this.state.locale === 'en' ? 'ru' : 'en'
    })
  }

  render() {
    const { locale } = this.state
    return (
      <IntlProvider locale={locale} messages={translations[locale]}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2><FormattedMessage
              id='welcome'
              defaultMessage='Welcome to React!'
              />
            </h2>
          </div>
          <p className="App-intro">
              <FormattedMessage
                id='get_started'
                defaultMessage='To get started, edit <code>src/App.js</code> and save to reload.'
                />
          </p>
          <button onClick={this.toggleLocale}>
            <FormattedMessage
              id='toggle_language'
              defaultMessage='Toggle Language'
              />
          </button>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
