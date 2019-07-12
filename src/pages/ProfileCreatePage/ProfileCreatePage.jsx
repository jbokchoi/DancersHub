import React, { Component } from "react";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import NavBar from "../../components/NavBar/NavBar";

class ProfileCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <ProfileForm />
        {console.log(this.state.user)}
        {console.log(this.props)}
      </div>
    );
  }
}

export default ProfileCreatePage;
