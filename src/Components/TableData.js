import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

class TableData extends Component {
  deleteClick = (idUser) =>{
    this.props.deleteUser(idUser);
  }

  mappingDataUser = () =>
    this.props.showData.map((value, index) => (
      <TableDataRow
        deleteClick={(idUser)=>this.deleteClick(idUser)}
        editUserFun={user => this.props.editUser(value)}
        id = {value.id}
        key={index}
        index={index}
        name={value.name}
        phone={value.phone}
        role={value.role}
        changeEditUserStatus={()=>this.props.changeEditUserStatus()}
      />
    ))
  render() {
    return (
      <div className="col">
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableData;
