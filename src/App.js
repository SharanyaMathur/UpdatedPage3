import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";


function App() {
  return (
    <div>
      <Topbar/>
      <div class="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
