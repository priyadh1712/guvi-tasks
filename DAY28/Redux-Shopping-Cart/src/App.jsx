//App component's style sheet
import "./App.css";

//Importing Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//Importing other child components
import Header from './Components/Header';
import ProductList from './Components/ProductList';

//Importing Provider from react-redux third party library to give store to the child components
import { Provider } from "react-redux";

//Importing Productstore to provide data to child components
import { ProductStore } from "./Features/ProductStore";

function App() {
  return (
    <>
    
    {/* Provider component used to provide the state and update of state to the inside given
    components. We achieve it through store property where we give the create productStore as value */}
    <Provider store={ProductStore}>
      <Header />
      <ProductList />
    </Provider>
    </>
  );
}

export default App;
