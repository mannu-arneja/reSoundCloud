import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { fetchTrack, removeTrack } from './actions/track_actions';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: window.currentUser
            },
            session: { id: Object.keys(window.currentUser)}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render( <Root store={store}/>, root );
    
    //test
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchTrack = fetchTrack;
    window.removeTrack = removeTrack;  
});