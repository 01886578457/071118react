import React, { Component } from 'react';
import Header from './Header';
import './../App.css';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './../Data.json';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }
  componentWillMount() {
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser)); //parse [] -> key-value
    } else {
      var temp = JSON.parse(localStorage.getItem('userData')); //giải mã key-value thành []
      this.setState({
        data: temp
      });
    }
  }
  changeStatusForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  GetTextSearch = (data) => {
    this.setState({
      searchText: data
    });
  }
  GetAddUser = (item) => {
    var data = {};
    data.id = uuidv1();
    data.name = item.name;
    data.phone = item.phone;
    data.role = item.role;

    var datas = this.state.data;
    datas.push(data);

    this.setState({
      data: datas
    });
    localStorage.setItem('userData', JSON.stringify(datas));
  }
  editUser = (user) => {

    this.setState({
      userEditObject: user
    });
    
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  getUserEditInfo = (info) => {

    this.state.data.forEach((value, index) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.role = info.role;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  deleteUser = (idUser) => {
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser);

    this.setState({
      data: tempData
    });
    ///push data
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  render() {
    var result = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    })

    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <SearchForm thongbao={() => this.changeStatusForm()} showForm={this.state.showForm}
                GetTextSearch={(dl) => this.GetTextSearch(dl)} editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()} userEditObject={this.state.userEditObject}
                getUserEditInfo={(info) => this.getUserEditInfo(info)} />

              <TableData showData={result} editUser={(user) => this.editUser(user)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                deleteUser={(idUser) => this.deleteUser(idUser)} />

              <AddUser showForm={this.state.showForm} add={(item) => this.GetAddUser(item)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
