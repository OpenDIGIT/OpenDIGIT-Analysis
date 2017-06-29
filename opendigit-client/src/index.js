import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import DiseaseConfig from "./config/disease.config"
import DemoGenerator from "./data/demo"

var data = DemoGenerator.generateWithConfig(DiseaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
