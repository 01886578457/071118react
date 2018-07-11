import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      phone: "",
      role: ""
    }
  }


  checkStatus = () => {
    if (this.props.showForm === true) {
      return (
        <div className="card text-left ">
          <form>
            <div className="card mt-2">
              <div className="card-header">Add new</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                    placeholder="Username..."
                    name="name"
                    onChange={(event) => this.isChange(event)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                    placeholder="PhoneNumber..."
                    name="phone"
                    onChange={(event) => this.isChange(event)}
                  />
                  <select className="form-control" name="role" onChange={(event) => this.isChange(event)}>
                    <option value={3}>Role Default</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="reset" className="btn btn-block btn-primary" onClick={(item) => this.props.add(this.state)} value="Add New" />
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });

  }

  render() {

    return (

      <div>
        {this.checkStatus()}
      </div>
    );
  }
}

export default AddUser;
