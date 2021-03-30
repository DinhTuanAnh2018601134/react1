import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            Permission: ""
        }
    }
    //nhap tt user moi
    isChange = (evnet) =>{
        const name = evnet.target.name;
        const value = evnet.target.value;
        this.setState({
            [name]: value
        });
    }
    //hien thi form them user
    kiemTraTrangThai = () =>{
        if(this.props.hienThiForm === true){
            return (
                <div className="col">
                    <form>
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Them moi User vao he thong</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                            <input type="text" onChange={(event)=>this.isChange(event)} name="name" className="form-control" placeholder="ten user" />
                            </div>
                            <div className="form-group">
                            <input type="text" onChange={(event)=>this.isChange(event)} name="tel" className="form-control" placeholder="dien thoai" />
                            </div>
                            <div className="form-group">
                            <select onChange={(event)=>this.isChange(event)} name="Permission" className="custom-select" required>
                                <option value>Chon quyen mac dinh</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <input type="reset" onClick={(name,tel,Permission)=>this.props.add(this.state.name,this.state.tel,this.state.Permission)} className="btn btn-block btn-primary" value="Them moi"/>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>
        );
    }
}

export default AddUser;