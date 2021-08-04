import React from 'react';
import { BrowserRouter, useHistory} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
export let Context = React.createContext()


let store
let thunkFake = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch)
    }
    return next(action)
}
function App({ children, reducers = {} }) {
    let history = useHistory()
    function linkLoading(e) {
        document.body.classList.remove('menu-is-show')
        document.querySelector('.loading-page').style.transform = 'scale(25)';

        e.preventDefault()
        setTimeout(() => {
            console.log(e.target.href)
            history.push(e.target.href.replace(window.location.origin, ''))
          
            document.querySelector('.loading-page').style.transform = 'scale(0)';
            
            
        }, 500)
    }

    if (!store) {
        reducers = combineReducers(reducers)
        const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose
        store = createStore(reducers, composeEnhancers(applyMiddleware(thunkFake)))

    }


    return (
        <Provider store={store} >
            <Context.Provider  value={{ linkLoading }}>
            {children}
            </Context.Provider>
        </Provider>

    );
}
export default function AppProvider({ children,reducers }) {
    return <BrowserRouter >
        <App reducers={reducers} >
            {children}
        </App>
    </BrowserRouter>
}