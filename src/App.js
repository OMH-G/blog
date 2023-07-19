import About from "./components/About";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import post from './ComponentList'
export default function App() {

  return (

    <>
      <Router>
        <Header />
        <div className="container mx-auto flex flex-col min-h-screen ">
          <div className="flex-grow">
            <Routes basename="/blog">
              {Object.keys(post).map((item,index)=>{
                return <Route exact path={`blog/Post${index+1}`} Component={post[item][0]} key={index}/>
              })}
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