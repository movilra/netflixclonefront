import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Mutation,Query} from 'react-apollo';
import FileUploader from 'react-firebase-file-uploader';
import Firebase from '../../Firebase';

const GET_ME = gql`

    query{
        me{
            name,
            lastname,
            email,
            birth_date,
            gender,
            avatar,
            suscription{
                suscription_type
            }
        }
    }
`;

const UPDATE_ME = gql`
    mutation UpdateUser(
        $name:String!,
        $lastname:String!,
        $password:String!,
        $birth_date:String!,
        $gender:String!,
        $avatar:String!
    ){
        updateUser(
            name:$name,
            lastname:$lastname,
            password:$password,
            birth_date:$birth_date,
            gender:$$gender,
            avatar:$avatar
        ){
            _id,
            name,
            avatar,
            gender
        }
    }
`;

class Me extends Component{
    
    constructor(){
        super();

        this.state = {
            name:"",
            lastname:"",
            email:"",
            password:"",
            gender:"",
            birth_date:"",
            avatar:""
        }
    }

    copyData = (data) => {
        if(data){

        this.setState(
            {...data.me}
        )
    }

    handleInput = (event) => {
        let {name,value} = event.target
        this.setState({[name]:value})
    }


    render(){
        return(
            <Query query={GET_ME}>
            {
                ({loading,error,data}) => {
                    if(loading), return (<h4>Loading...</h4>)
                    if(error) return (<h4>{error}</h4>)
                    if(data) this.copyData(data)
                    return(
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="">Nombre:</label>
                                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Apellidos:</label>
                                        <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="">Fecha de nacimiento</label>
                                        <input type="text" className="form-control" name="birth_date" value={this.state.birth_date} onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="">Apellidos:</label>
                                        <input type="text" className="form-control" name="gender" value={this.state.gender} onChange={this.handleInput}/>
                                        <option value="H" >

                                        </option>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email:</label>
                                        <input type="text" className="form-control" name="email" value={data.me.name}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="btn btn-danger">Avatar
                                            <FileUploader
                                                hidden
                                                accept="image/*"
                                                randomizeFilename
                                                storageRef={
                                                    Firebase.storage().ref('avatars')
                                                }
                                                onUploadError={(err) => console.log(err)}
                                                onUploadSuccess={() => {}}
                                            />
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>

                    )
                }

                </Query>

            }
        )

        export default Me;


    }




}