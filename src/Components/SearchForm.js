import React, { Component } from "react";
import EditUser from "./EditUser";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
      userObj: {}
    };
  }

  showButton = () => {
    if (this.props.showForm === true) {
      return (
        <div
          className="btn btn-block btn-outline-danger"
          onClick={() => this.props.thongbao()}
        >
          Cancle
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-block btn-outline-primary"
          onClick={() => this.props.thongbao()}
        >
          Add New
        </div>
      );
    }
  };
  isChange = event => {
    this.setState({
      tempValue: event.target.value
    });
    this.props.GetTextSearch(this.state.tempValue);
  };
  isShowEditForm = () =>{
    if(this.props.editUserStatus === true){
      return (
        <EditUser changeEditUserStatus= {()=>this.props.changeEditUserStatus()} userEditObject={this.props.userEditObject} getUserEditInfo={(info)=>this.getUserEditInfo(info)}/>
      );
    }
  }
  getUserEditInfo = (info) =>{
    this.setState({
      userObj : info
    });
    this.props.getUserEditInfo(info);
  }
  render() {
    
    return (
      <div className="col-12">
        {this.isShowEditForm()}
        <div className="form-group">
          <div className="btn-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Keyword"
              aria-describedby="helpId"
              onChange={event => this.isChange(event)}
            />
            <div
              className="btn btn-info"
              onClick={dl => this.props.GetTextSearch(this.state.tempValue)}
            >
              Find
            </div>
          </div>
          {this.showButton()}
        </div>
        <hr />
      </div>
    );
  }
}

export default SearchForm;
