import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Logout from './components/Logout/Logout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
	  return (
		  <Router>
			  <div>
				  <Header />
				  <Container>
					  <Route exact path='/' component={Signup} />
					  <Route exact path='/signin'
						  render={(props) => <Signin {...props} />} />
					  <Route exact path='/logout'
						  render={(props) => <Logout {...props}/>} />
				  </Container>
				  <Footer />
			  </div>
		  </Router>
	  );
  }
}

export default App;
