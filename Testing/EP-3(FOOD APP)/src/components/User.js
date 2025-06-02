import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Test",
        avatar_url:
          "http://www.natrajaatachakki.com/uploads/testimonial/Dummy_Photo_Ladies_jpg.png",
      },
    };
    // console.log(this.props.name, "child constructor");
  }

  async componentDidMount() {
    try {
      // console.log(this.props.name, "child componentDidMount");
      const data = await fetch(
        `https://api.github.com/users/${this.props.username}`
      );
      const json = await data.json();
      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log(this.props.name, "child render");
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="m-4 p-4 bg-gray-200 rounded-lg w-96">
        <img src={avatar_url} />
        <h2 className="font-bold">Name : {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default User;
