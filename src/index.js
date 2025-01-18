import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion<sup style="font-size:70%">&reg;</sup>  license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF5cXmBCf0x3Qnxbf1x1ZFdMZF1bRXZPMyBoS35Rc0ViWH9ecnBUR2BVUEBz');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);