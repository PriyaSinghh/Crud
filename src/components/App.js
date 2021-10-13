import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';

class App extends Component{
    state = {

        users:[
          
             {name:"Tanuja", age:21,  email:"T@gmail.com", exp:8,skill:"Java", isEditing:false},
             {name:"Linda Moorhouse", age:22, email:"L@gmail.com", exp:2, skill:"PHP",isEditing:false},
             {name:"Frank Jon", age:29,  email:"F@gmail.com", exp:1,skill:"Spring", isEditing:false}
        ]
      }
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

     
      // (i) is received from Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      updateUser = (i, name,age, email,exp,skill,
        ) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].age = age;
        users[i].email = email;
        users[i].exp = exp;
        users[i].skill = skill;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
            <div className="container">
                <h3>Employee Details</h3>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;