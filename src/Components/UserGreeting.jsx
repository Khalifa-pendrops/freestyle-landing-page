import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

    render() {
      return this.state.isLoggedIn && <div>Welcome Khalifa</div>

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Khalifa</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // if (this.state.isLoggedIn) {
    //     return <div>Welcome khalifa</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }

    // return (
    //   <div>
    //     <h1>Welcome Guest!</h1>
    //   </div>
    // )
  }
}




