
import { BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Default from './components/Default';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProduct productId />} />
        <Route path="/*" element={<Default />} />
      </Routes>
      
  </BrowserRouter>
  </Provider>
  );
}

export default App;
