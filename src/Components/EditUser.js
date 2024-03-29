import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            nam: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission
        }
    }
    //khi nhap tt thay doi
    isChange = (event) =>{
        const name = event.target.name;
        const value  = event.target.value;
        this.setState({
            [name]: value
        });
    }
    //click nut save tt user
    saveButton =() =>{
        var info = {}
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();//an form

    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form>
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header text-center">Sua thong tin User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="ten user" />
                            </div>
                            <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="dien thoai" />
                            </div>
                            <div className="form-group">
                            <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.Permission} name="Permission" className="custom-select" required>
                                <option value>Chon quyen mac dinh</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <input type="button" className="btn btn-block btn-primary" value="luu" onClick={() => this.saveButton()}/>
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