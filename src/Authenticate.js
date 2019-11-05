import React, { Component } from 'react'
const firebase = require('firebase');

// var firebaseConfig = {
//     apiKey: "AIzaSyBVM0CWoVGIGR_GOkCi-2sI_ESO7CE20MY",
//     authDomain: "loginauth-5c727.firebaseapp.com",
//     databaseURL: "https://loginauth-5c727.firebaseio.com",
//     projectId: "loginauth-5c727",
//     storageBucket: "loginauth-5c727.appspot.com",
//     messagingSenderId: "251965654313",
//     appId: "1:251965654313:web:d1e018b9e3a81017b7e338"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

var firebaseConfig = {
  apiKey: "AIzaSyD0EYybFgtDvcqnwOK90P6gQMs8y_2V1XY",
  authDomain: "basic-survey.firebaseapp.com",
  databaseURL: "https://basic-survey.firebaseio.com",
  projectId: "basic-survey",
  storageBucket: "basic-survey.appspot.com",
  messagingSenderId: "91800356453",
  appId: "1:91800356453:web:466dc5ef7d60141800a88c",
  measurementId: "G-LK2Y5XFC4G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Authenticate extends Component {
    logIn(event) {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.then(user => {
          const logOut = document.getElementById('logout');
          logOut.classList.remove('hide')
          // const err = "Welcome you are logged in"
          // TODO: Write a welcome message for the user

        })
        promise.catch(e => {
            var error = e.message;
            console.log(error)
            this.setState({error:error})
        })
    }

    signUp(){
      const email = this.refs.email.value;
      const password = this.refs.password.value;
      console.log(email, password);

      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(email, password);

      promise
      .then(user => {
        // var err = "Hey " + user.email;
        var err;
        firebase.database().ref('users/'+ user.user.uid).set({
          email: user.user.email
        });
        console.log(user);
        this.setState({err:err});
      });
      promise
      .catch(e => {
        var err = e.message;
        console.log(err);
        this.setState({ err: err });

      })
    }


    logOut(){
      firebase.auth().signOut();

      const logOut = document.getElementById('logout');

      // TODO: Write a thanks message for the user
      // const authMessage "You have logged out"
      logOut.classList.add('hide')
    };
      //
    //   promise
    //   .then(user => {
    //     var err ;

    //     firebase.database().ref("users/"+ user.uid).set({
    //       email: user.email
    //     });
    //     console.log(user);
    //     this.setState({err:err});
    //     })

    //   promise
    //   .catch(e => {
    //     var err = e.message;
    //     console.log(err)
    //     this.setState(({ err: err }));
    //   });
    // }
    
  
constructor(props) {
  super(props)

  this.state = {
      error:''
  }
  this.logIn = this.logIn.bind(this);
  this.signUp = this.signUp.bind(this);
  this.logOut = this.logOut.bind(this);
}

  render() {
    return (
      <div>
            <div><input id="email" type="email" ref="email" placeholder="Email" /></div>
            <div>
                <input id="password" type="password" ref="password" placeholder="Password" />
                <p>{this.state.err}</p>
                {/* <p>{authMessage}</p> */}
            </div>
            <button onClick={this.logIn}>Login</button>
            <button onClick={this.signUp}>Sign Up</button>
            <button className="hide" id="logout" onClick={this.logOut}>Log Out</button>
      </div>
    )
  }
}

export default Authenticate;