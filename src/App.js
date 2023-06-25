import About from "./components/About";
import Post1 from "./components/Post1";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container mx-auto flex flex-col min-h-screen ">
          <div className="flex-grow">
            <Routes basename="/blog">
              <Route exact path="/post" Component={Post1}/>
              <Route exact path="/blog" Component={Body} />
              <Route exact path="/about" Component={About} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  )
}