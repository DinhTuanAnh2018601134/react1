import React, { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: true,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }
  
  componentWillMount() {
    //kiem tra xem co localStorage nao chua
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }
  
  //hien form them user
  doiTrangThai = () =>{
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  //hien form chinh sua user
  changeEditUserStatus = () =>{
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  //chinh sua user
  editUser = (user) =>{
    this.setState({
      userEditObject: user
    });
  }
  getUserEditInfoApp = (info) =>{
    this.state.data.forEach((value,key) =>{
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  //them user moi
  getNewUserData = (name,tel,Permission) =>{
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data : items
    });
    localStorage.setItem('userData',JSON.stringify(items));
  }
  //tim kiem user
  getTextSearch = (dl) =>{
    this.setState({
      searchText: dl
    });
  }
  //xoa user
  deleteUser =(idUser) =>{
    var tempDate = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempDate
    });
    localStorage.setItem('userData',JSON.stringify(tempDate));
  }
  render() {
    var ketQua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(item);
      }
    })
    return (
      <div>
       <Header/>
       <div className="searchForm">
         <div className="container">
           <div className="row">
             <Search 
             getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)} 
             userEditObject={this.state.userEditObject}
             editUserStatus={this.state.editUserStatus} 
             changeEditUserStatus={() => this.changeEditUserStatus()} 
             checkConnectProps={(dl)=>this.getTextSearch(dl)} 
             ketNoi={()=>this.doiTrangThai()} 
             hienThiForm={this.state.hienThiForm} />
             <TableData 
             deleteUser = {(idUser) => this.deleteUser(idUser)}
             changeEditUserStatus={() => this.changeEditUserStatus()} 
             editFun={(user) => this.editUser(user)} dataUserProps={ketQua}/>
             <AddUser add={(name,tel,Permission)=>this.getNewUserData(name,tel,Permission)} 
             hienThiForm={this.state.hienThiForm}/>
           </div>
         </div>
       </div>
      </div>
    );
  }
}

export default App;
