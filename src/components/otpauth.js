import react from "react";
import axios from 'axios';
import LoginAuthentication from "../authentication";
export default class OtpAuthentication extends react.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.props.onOtpChange(e.target.value);
      }
    handleSubmit(e){
        e.preventDefault();
          this.props.onOtpSubmit()
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                <legend>Enter otp:</legend>
                <input
                    type="text"
                    value={this.props.otp}
                    onChange={this.handleChange} />
                <input
                    type="submit" />
                </fieldset>
            </form>
        );
    }
}