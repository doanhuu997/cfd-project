import logo from './logo.svg';
import './App.css';
import AppProvider from './core/AppProvider';
import reducers from './redux/reducers';
import routers from './router';
import renderRouter from './core/routerConfig'
function App() {
  return (
    <AppProvider reducers={reducers}>
      {renderRouter(routers)}
    </AppProvider>
  );
}

export default App;
