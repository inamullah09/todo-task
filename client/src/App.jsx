import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Navigations from "./Navigation/Navigations";
import { ToastContainer } from "react-toastify";
function App() {
  return<>
    <Navigations />
    <ToastContainer/>
  </>;
}

export default App;
