import React, { Component } from 'react';

class TableDataRow extends Component {
    roleShow = ()=>{
        if(parseInt(this.props.role,20) === 1){
            return "Admin";
        }else if( parseInt(this.props.role,20) ===2){
            return "Moderator";
        }else{
            return "Normal";
        }
    }
    editClick = () =>{
        this.props.editUserFun();
        this.props.changeEditUserStatus();
    }
    deleteClick = (idUser) => {
        this.props.deleteClick(idUser);
    }
    render() {
        return (
            <tr>
                <td>{this.props.index +1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.roleShow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={()=>this.editClick()} >
                            <i className="fa fa-edit" /> Edit</div>
                        <div className="btn btn-danger sua" onClick={(idUser)=>this.deleteClick(this.props.id)}>
                            <i className="fa fa-remove" /> Remove</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;