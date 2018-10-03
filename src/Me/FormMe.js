import Firebase from "../Firebase";
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import FileUploader from 'react-firebase-file-uploader'





































constructor (props){
    super(props);
    consolo.log(props.data)
    this.state = {...props.data}
}

handleInput = (event) => {
    let {name,value} = event.target
    this.setState({[name]}:value})
}

formSubmit = (e,updateUser) => {
    e.preventDefault();
    console.log(this.state)
    updateUser(
        {variables:{...this.state}}
    )
}

uploadFile = async(filename) => {
    let url = await Firebase.storage().ref('avatars').child(filename)
    .getDownloadURL()

    this.setState({avatar:url})
}

render(){

    return(
        <Mutation  mutation={UPDATE_ME}>

        </Mutation>
    )

}