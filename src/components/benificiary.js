import react from "react";
import axios from 'axios';
import LoginAuthentication from "../authentication";
export default class Beneficiary extends react.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.props.onBeneficiaryChange(e.target.value)
      }
    handleSubmit(e){
        e.preventDefault();
        this.props.onBeneficiarySubmit()
    }
    render() {
       
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                <legend>Enter your Beneficiary Id:</legend>
                <input
                    type="text"
                    value={this.props.beneficiary_reference_id}
                    onChange={this.handleChange} />
                <input
                    type="submit" />
                </fieldset>
            </form>
        );
    }
}