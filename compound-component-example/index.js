import React from 'react';
import ReactDOM from 'react-dom';

import Usage from './SwitchUsage'
// import Usage from './SwitchUsage2'
// import Usage from './SwitchUsage3'
// import Usage from './SwitchUsage4'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Usage />, document.getElementById('root'));
registerServiceWorker();
