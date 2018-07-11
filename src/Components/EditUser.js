import React, { Component } from "react";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.userEditObject.id,
      name : this.props.userEditObject.name,
      phone : this.props.userEditObject.phone,
      role : this.props.userEditObject.role
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    });
  }
  editUserButton = () =>{
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.phone = this.state.phone;
    info.role = this.state.role;
    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();

  }
  render() {
    return (
        <div className="row">
        <div className="col-12">
          <form>
            <div className="card text-white bg-info mb-3 mt-2">
              <div className="card-header text-center">Edit User</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                    placeholder="Username..."
                    name="name"
                    defaultValue={this.props.userEditObject.name}
                    onChange={(event)=>this.isChange(event)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                    placeholder="PhoneNumber..."
                    name="phone"
                    defaultValue={this.props.userEditObject.phone}
                    onChange={(event)=>this.isChange(event)}
                  />
                  <select
                    className="form-control"
                    name="role"
                    defaultValue={this.props.userEditObject.role}
                    onChange={(event)=>this.isChange(event)}
                  >
                    <option value={3}>Role Default</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="button"
                    className="btn btn-block btn-danger"
                    value="Save"
                    onClick = {()=>this.editUserButton()}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditUser;
