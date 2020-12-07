import ReactDOM from 'react-dom'
import React from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import Message from '@my/common/message/Message'

ReactDOM.render(
  <IntlProvider
    locale={'en'}
  >
    <Message/>
    <div>
      <FormattedMessage defaultMessage='main'/>
      <FormattedMessage defaultMessage='text'/>
      <FormattedMessage defaultMessage='dimon'/>
      <FormattedMessage defaultMessage='new'/>
    </div>
  </IntlProvider>,
  document.getElementById('app')
)
