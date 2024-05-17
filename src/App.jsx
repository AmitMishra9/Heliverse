import './App.css'
import Navbar from './component/Navbar/Navbar'
import Header  from './component/Header/Header'
import FireEffect from './component/Canvas'
import Main from './component/Mian/Main'
import Footer from './component/Footer/Footer'
import Trusted from './component/Mian/Trusted'
import Apply from './component/Mian/Apply'
import Features from './component/Mian/Features'
function App(){
  return (
     <> 
        <FireEffect/>
        <Navbar/>
        <Header/> 
        <Main/>
        <Trusted/>
        <Apply/>
         <Features/>
         
        <Footer/>
     </>
  )
}

export default App
