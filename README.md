# react-patterns-talk
Slides e códigos da talk na trilha de JS no TDC 2018

# Como ver os slides?
> Eu deveria ter subido no heroku.
Baixe o repo e depois instale as dep. 

`$ yarn` 

depois

`$ yarn start`

depois




Exemplos de compound component estão na pasta **compound-components** onde:

```
SwitchUsage.js é a forma mais básica do componente
SwitchUsage2.js é utilizando compound components
SwitchUsage3.js é utilizando compound components e context api
SwitchUsage4.js é utilizando tratamento de erro
```

Para ver como ficou basta importar no seu index, exemplo:

```
import React from 'react';
import ReactDOM from 'react-dom';

import Usage from './SwitchUsage'
// import Usage from './SwitchUsage2'
// import Usage from './SwitchUsage3'
// import Usage from './SwitchUsage4'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Usage />, document.getElementById('root'));
registerServiceWorker();
```