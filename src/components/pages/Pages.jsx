// import React from "react"
// import Header from "../common/header/Header"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Home from "../home/Home"
// import Footer from "../common/footer/Footer"
// import About from "../about/About"
// import Pricing from "../pricing/Pricing"
// import Blog from "../blog/Blog"
// import Services from "../services/Services"
// import Contact from "../contact/Contact"
// import Signin from "../signin/singin"
// const Pages = () => {
//   return (
//     <>
//       <Router>
//         <Route exact path='/signin' component={Signin}/>
//         <Header />
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/about' component={About} />
//           <Route exact path='/services' component={Services} />
//           <Route exact path='/blog' component={Blog} />
//           {/* <Route exact path='/pricing' component={Pricing} /> */}
//           <Route exact path='/contact' component={Contact} />
//           {/* <Route exact path='/signin' component={Signin}/> */}
//         </Switch>
//         <Footer />
//       </Router>
//     </>
//   )
// }

// export default Pages
import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Signin from "../signin/singin";
import SignUp from "../signup/signup";
const Pages = () => {
  return (
    <Router>
      <Switch>
        {/* Signin Route - no header/footer */}
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={SignUp}/>

        {/* All other routes */}
        <Route path="/">
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/blog" component={Blog} />
              {/* <Route exact path="/pricing" component={Pricing} /> */}
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </>
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
