import { Component } from "react";

class Login extends Component {
  state = { title: "", imageUrl: "", description: "" };

  onChangeUserTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  onChangeImageUrl = (e) => {
    this.setState({ imageUrl: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  onClickSubmit = async (e) => {
    e.preventDefault();
    const { title, imageUrl, description } = this.state;
    const apiUrl = "http://localhost:4000/blogs";
    const options = {
      method: "POST",
      body: JSON.stringify({ title, imageUrl, description }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(apiUrl, options);
    console.log(res);
  };

  render() {
    const { imageUrl } = this.state;
    return (
      <div className="login-container">
        <form onSubmit={this.onClickSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter Title"
              onChange={this.onChangeUserTitle}
            />
          </div>
          <div>
            <label htmlFor="title">Image</label>
            <input
              type="text"
              id="title"
              placeholder="Insert Image url"
              onChange={this.onChangeImageUrl}
            />
          </div>
          <div>
            <label htmlFor="title">Description</label>
            <input
              type="text"
              id="title"
              placeholder="Enter Description"
              onChange={this.onChangeDescription}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <img alt="image" src={imageUrl} />
      </div>
    );
  }
}

export default Login;
