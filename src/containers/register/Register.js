import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Register"
                        />
                        <TextField
                            hintText="Enter your Company ID"
                            floatingLabelText="Company ID"
                            onChange = {(event,newValue) => this.setState({company_id:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Full Name"
                            floatingLabelText="Full Name"
                            onChange = {(event,newValue) => this.setState({full_name:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Company Name"
                            floatingLabelText="Company Name"
                            onChange = {(event,newValue) => this.setState({company_name:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            onChange = {(event,newValue) => this.setState({email:newValue})}
                        />
                        <br/>
                        <TextField
                            type = "password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <TextField
                            type = "password"
                            hintText="Re-Enter your Password"
                            floatingLabelText="Re-Enter Password"
                            onChange = {(event,newValue) => this.setState({rpassword:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Register;