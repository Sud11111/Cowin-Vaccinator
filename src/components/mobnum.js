import react from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class MobileNumber extends react.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.props.onMobileChange(e.target.value)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onMobileSubmit()
    }
    render() {

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col sm={3}>
                    <Form >
                    <Form.Group>
                    <div className="d-grid gap-2 bg-light">

                        <Form.Label><h3>Register or Sign In for Vaccination</h3></Form.Label>
                        <Form.Text className="text-muted">
                            An OTP will be sent to your mobile number for verifiction
                        </Form.Text>
                        <Form.Control
                            type="text"
                            value={this.props.mobile}
                            onChange={this.handleChange}
                            placeholder='Enter your mobile number'
                            />
                        <Button
                            type="submit"
                            onClick={this.handleSubmit} 
                            >
                            Get OTP
                            </Button>
                            </div>

                    </Form.Group>
                </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}