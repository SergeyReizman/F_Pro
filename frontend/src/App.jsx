// One-page application with a navigation bar, a hero section,
// and multiple sections for different types of content such as statistics,
// business details, billing information, card deals, testimonials, clients, 
// a call-to-action, and a footer. (JSX allows to write HTML-like code)
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import axios from 'axios'
import { useEffect, useState } from "react";
// const Navbar = () => {
const App = () => {
    const [customers, setcustomers] = useState([])
    const test=async()=>{
        const SERVER ="http://127.0.0.1:5000/api/customers"
        const res =await axios.get(SERVER)
        setcustomers(res.data)
        console.log(customers);
    }
    useEffect(() => {
        test()
    }, [])
    
    return(
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
       <h1 style={{color:"red"}}>aa {customers && customers.length}a</h1>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
       
      </div>
    </div>
   
  </div>
)};

export default App;