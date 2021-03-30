import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    //xoa user
    deleteButtonClick = (iduser) =>{
        this.props.deleteUser(iduser);
    }
    mappingDataUser = () => this.props.dataUserProps.map((value,key) =>(
            <TableDataRow editFunClick={(user) => this.props.editFun(value)} 
            deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
            changeEditUserStatus={() => this.props.changeEditUserStatus()}
            id={value.id}
            userName={value.name} 
            key={key} 
            stt={key} 
            tel={value.tel} 
            permission={value.Permission}/>
    ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Ten</th>
                        <th>Dien Thoai</th>
                        <th>Quyen</th>
                        <th>Thao Tac</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;