import react from "react";
import LoginAuthentication from "../authentication";
export default class MobileNumber extends react.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.props.onMobileChange(e.target.value)
      }
    handleSubmit(e){
        e.preventDefault();
        this.props.onMobileSubmit()
    }
    render() {
       
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                <legend>Enter your mobile number:</legend>
                <input
                    type="text"
                    value={this.props.mobile}
                    onChange={this.handleChange} />
                <input
                    type="submit" />
                </fieldset>
            </form>
        );
    }
}