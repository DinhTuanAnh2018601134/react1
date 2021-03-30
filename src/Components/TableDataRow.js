import React, { Component } from 'react';

class TableDataRow extends Component {
    //hien thi quyen
    permissionShow = () =>{
        if(this.props.permission === 1){
            return "Admin";
        }
        else if(this.props.permission === 2){
            return "Moderator";
        }
        else{
            return "Normal User";
        }
    }
    //click vao nut edit
    editClick = () =>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    //click vao nut xoa
    deleteButtonClick = (idUser) =>{
        this.props.deleteButtonClick(idUser);
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>
                    {this.permissionShow()}
                </td>
                <td>
                <div className="btn-group">
                    <div type="button" className="btn btn-warning sua" onClick={() => this.editClick()}><i className="fa fa-edit">Sua</i></div>
                    <div type="button" className="btn btn-danger xoa" onClick={(idUser) => this.deleteButtonClick(this.props.id)} ><i className="fa fa-delete">Xoa</i></div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;