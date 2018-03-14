// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import './App.css';
import {registerAction, loginAction} from '../../redux/action/users';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Header from "../../components/Index/header";

class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <Header registerActions={this.props.registerActions} loginActions={this.props.loginActions}
                  auth={this.props.auth} users={this.props.users}/>
        </div>
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              <div>1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd</div>
            </div>
            <div className="main">
              21adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
            <div className="sidebar">
              31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(
  (state) => {
  return { users: state.users }
},
  (dispatch) => {
  return {
    registerActions: bindActionCreators(registerAction, dispatch),
    loginActions: bindActionCreators(loginAction, dispatch),
  }
})(App);
