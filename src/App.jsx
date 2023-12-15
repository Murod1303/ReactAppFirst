import "./App.css"
import Header from "./components/header/Header";
import ListCard from "./components/listCard/ListCard";
import Search from "./components/search/Search";




const App = () => {
  
  return (
    <>
    <Header/>
    <main className="main">
    <div className="container">
    <div className="wrapper__hero">
    <Search/>
    <ListCard/>
    </div>
    </div>
    </main>
    </>
    )
  }
  
  export default App
  