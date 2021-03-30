import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj: {}
        }
    }
    //khi nhap tt tim kiem
    isChange = (event) =>{
        this.setState({
            tempValue: event.target.value
        });
        // this.props.checkConnectProps(this.state.tempValue);
    }
    //hien thi them moi hoac dong lai
    hienThiNut = () =>{
        if(this.props.hienThiForm === true){
            return <div type="button" className="btn btn-block btn-outline-secondary" 
            onClick={() => this.props.ketNoi()}>dong lai</div>
        }
        else{
            return <div type="button" className="btn btn-block btn-outline-info" 
            onClick={() => this.props.ketNoi()}>them moi</div>
        }
    }
    //chinh sua tt user
    getUserEditInfo = (info) =>{
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info);
    }
    //hien thi form chinh sua
    isShowEditForm = () =>{
        if(this.props.editUserStatus === true){
            return <EditUser 
            getUserEditInfo = {(info) =>this.getUserEditInfo(info)}
            userEditObject = {this.props.userEditObject}
            changeEditUserStatus = {() => this.props.changeEditUserStatus()} />
        }

    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                    <input type="text" className="form-control" 
                    onChange={(event) => this.isChange(event)} placeholder="nhap ten can tim"/>
                    <div type="button" className="btn btn-info" 
                    onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tim</div>
                    </div>
                    <div>
                        {this.hienThiNut()}
                    </div>
                </div>
                <hr/>
            </div>
            
        );
    }
}

export default Search;