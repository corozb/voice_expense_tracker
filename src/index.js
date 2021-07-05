import React from 'react'
import ReactDOM from 'react-dom'
import {SpeechProvider} from '@speechly/react-client'

import { Provider } from './context/context'
import App from './App'
import './index.css'

ReactDOM.render(
<SpeechProvider appId='201eb182-9bca-43be-b8e0-c73990b5190f' language='en-US'>
  <Provider>
    <App />
  </Provider>
    </SpeechProvider>,
  document.getElementById('root')
)
