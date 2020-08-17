import React from 'react';

class GoogleAuth extends React.Component {

  state = {
    isSignedIn: null,
    // userId:null,
    // userName:null
  };

  componentDidMount() {

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '702101659901-g1ppdkvgmftdg80cua8otbbln0gaomab.apps.googleusercontent.com',
        scope: 'email'
      })
      .then(()=> {
        //saving reference to auth object
        this.auth = window.gapi.auth2.getAuthInstance();

        //setting up an event listener to which we can pass a callback function which will be called anytime the users authentication sttaus changes
        this.auth.isSignedIn.listen(this.onAuthChange);
        this.onAuthChange(this.auth.isSignedIn.get())
      })
    });
  }


  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.setState({
        isSignedIn:this.auth.isSignedIn.get(),
        // userId:this.auth.currentUser.get().getId(),
        // userName:this.auth.currentUser.get().Ot.Cd
      })
    } else {
        this.setState({
          isSignedIn:this.auth.isSignedIn.get(),
          // userId:null,
          // userName:null
        })
    }
  }

  renderAuthButton () {
    if (this.state.isSignedIn == null ) {
      return null;
    } else if (this.state.isSignedIn) {
        return (
          <button onClick={this.onSignOutClick} className="ui red google button ">
            Sign Out
          </button>
        )
    } else {
        return (
          <button onClick={this.onSignInClick} className="ui blue google button ">
            Sign In with Google
          </button>
        )
    }
  }

  onSignInClick = async () => {

    await this.auth.signIn();
    this.setState({
      isSignedIn:this.auth.isSignedIn.get(),
      // userId:this.auth.currentUser.get().getId(),
      // userName:this.auth.currentUser.get().Ot.Cd || ''
    })
  }

  onSignOutClick = () => {

    this.auth.signOut();
    this.setState({
      isSignedIn:this.auth.isSignedIn.get(),
      // userId:null,
      // userName:null
    })

  }

  render() {
      return (
        <div>
          {this.renderAuthButton()}
          {this.state.userName
            ? <p>Welcome {this.auth.currentUser.get().Ot.Cd}</p>
            : null
          }
        </div>
      )
  }
}

export default GoogleAuth;