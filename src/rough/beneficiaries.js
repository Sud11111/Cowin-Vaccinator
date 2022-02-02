import react from "react";
import axios from "axios";
import MobileNumber from "../components/mobnum";
import Beneficiary from "../components/benificiary";
import OtpAuthentication from "../components/otpauth";
import { sha256 } from "js-sha256";

export default class Benefeciaries extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            otp: '',
            txnId: '',
            token: '',
            beneficiary_reference_id: ''
        }
        this.handleMobileSubmit = this.handleMobileSubmit.bind(this);
        this.handleOtpSubmit = this.handleOtpSubmit.bind(this);
        this.handleMobileChange = this.handleMobileChange.bind(this);
        this.handleOtpChange = this.handleOtpChange.bind(this);
        this.handleBeneficiarySubmit = this.handleBeneficiarySubmit.bind(this);
        this.handleBeneficiaryChange = this.handleBeneficiaryChange.bind(this);

    }
    handleMobileSubmit() {
        axios({
        method:'POST', 
        url:'https://cdndemo-api.co-vin.in/api/v2/auth/generateOTP',
        headers:{
            'accept': 'application/json', 
            "x-api-key": "3sjOr2rmM52GzhpMHjDEE1kpQeRxwFDr4YcBEimi ",
            "Content-Type": "application/json"
        },
        
        data:{'mobile': this.state.mobile }
        })
            .then(res => {
                this.setState({ txnId: res.data.txnId })
            })
            .catch(err => {
                console.log(err)
            })
    }
    handleOtpSubmit() {
        console.log({ otp: sha256(this.state.otp), txnId: this.state.txnId })
        axios({
            method:'post',
            url:'https://cdndemo-api.co-vin.in/api/v2/auth/confirmOTP', 
            headers:{
                'x-api-key':'3sjOr2rmM52GzhpMHjDEE1kpQeRxwFDr4YcBEimi'
            },
            data:{ 
            "otp": sha256(this.state.otp), 
            "txnId": this.state.txnId 
            }
        })
            .then(res => {
                this.setState({ token: res.data.token })
            })
            .catch(err => {
                console.log(err)
            })
    }
    handleBeneficiarySubmit() {

        axios.get('https://cdndemo-api.co-vin.in/api/v4/appointment/beneficiaries', {
            responseType: 'application/json',
            params: {
                beneficiary_reference_id: this.state.beneficiary_reference_id
            },
            headers: {
                Authorization: 'Bearer' + ' ' + this.state.token,
                'x-api-key':'3sjOr2rmM52GzhpMHjDEE1kpQeRxwFDr4YcBEimi'
            }
        })
            .then((response) => {
                console.log(response.data)
                window.open(URL.createObjectURL(response.data));
            })
            .catch(err => {
                console.log(err)
            })
    }
    handleOtpChange(otp) {
        this.setState({ otp: otp })
    }
    handleBeneficiaryChange(beneficiary_reference_id) {
        this.setState({ beneficiary_reference_id: beneficiary_reference_id })
    }
    handleMobileChange(mobile) {
        this.setState({ mobile: mobile })
    }
    render() {
        const txnId =this.state.txnId;
        const token=this.state.token;
        let input;
        input=
        (txnId==='')?
        <MobileNumber
            onMobileChange={this.handleMobileChange}
            onMobileSubmit={this.handleMobileSubmit}
            mobile={this.state.mobile} />
    :
        <OtpAuthentication
            onOtpChange={this.handleOtpChange}
            onOtpSubmit={this.handleOtpSubmit}
            otp={this.state.otp} />

        return (
        <div>
            {
            (token==='')?
            input
           :
            <Beneficiary
                onBeneficiaryChange={this.handleBeneficiaryChange}
                onBeneficiarySubmit={this.handleBeneficiarySubmit}
                beneficiary_reference_id={this.state.beneficiary_reference_id} />
            }
        </div>
        )
    }
}