import React, {Component} from 'react'
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo'

const CREATE_USER = gql`
        mutation signup($name:String!,$email:String!,$lastname:String!,$password:String!,$birth_date:String!){
            signup(
                name:$name
                email:$email
                lastname:$lastname
                password:$password
                birth_date:$birth_date
                ){
                user{
                    id
                    email
                }
                token
                }
        }
`



class signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            lastname:'',
            password:'',
            birth_date:''
        }
    }

    onInputChange = (event) => {
        let {id,value} = event.target
        this.setState({
            [id]:value
        });
        //console.log(event.target.id);
        //console.log(event.target.value);
    }

    onFormSubmit = (event,signup) => {
        event.preventDefault();
        console.log('Ya le puche al botón');
        console.log(this.state);
        signup({
            variables:{
                name:this.state.name,
                email:this.state.email,
                lastname:this.state.lastname,
                password:this.state.password,
                birth_date:this.state.birth_date
            }
        }).then(response => {
            console.log(response);
            alert('Todo bien')
            this.props.history.push('/login')
        }).catch(err => {
            console.log(err);
            alert('Todo mal')
        })
        
    }


    render(){
        //console.log('-->',this.state);
        //console.log('-->',this.state);

        return(
            <Mutation mutation={CREATE_USER}>
                {(signup,{data})=>(
                <div>
                <form onSubmit={(e) => this.onFormSubmit(e,signup)}>
                <div className="form-group">
                    <label for="e-mail address">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter e-mail" 
                        id="email"
                        onChange={this.onInputChange}
                        value={this.state.email}
                    />
                </div>

                <div className="form-group">
                    <label for="Name">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" 
                        id="name"
                        onChange={this.onInputChange}
                        value={this.state.name}
                    />
                </div>

                <div className="form-group">
                    <label for="Name">Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter last name" 
                        id="lastname"
                        onChange={this.onInputChange}
                        value={this.state.lastname}
                    />
                </div>

                <div className="form-group">
                    <label for="birth_date">Birth Date</label>
                    <input type="text" className="form-control" placeholder="Enter birth date" 
                        id="birth_date"
                        onChange={this.onInputChange}
                        value={this.state.birth_date}
                    />
                </div>

                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" 
                        id="password"
                        onChange={this.onInputChange}
                        value={this.state.password}
                    />
                </div>
                <button type="submit" className="btn btn-success">Registrarme</button>

                </form>
                </div>
                )}

            </Mutation>

        )
    }
}

export default signup;