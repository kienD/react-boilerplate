import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import '../css/styles.scss';

const appNode = document.createElement('div');

appNode.id = 'app';

document.body.appendChild(appNode);

ReactDOM.render(<div className="sample">Hello World!</div>, appNode);