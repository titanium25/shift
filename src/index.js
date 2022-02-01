import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import configureStore from "./store/configureStore";
import persistStore from "redux-persist/es/persistStore";
import 'bootstrap/dist/css/bootstrap.min.css';

const mainStore = configureStore();
const persist = persistStore(mainStore);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={mainStore}>
            <PersistGate loading={null} persistor={persist}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
