import react from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';
import StateCity from './statecity';
import { Button } from 'react-bootstrap';
export default class Home extends react.Component {
    render() {
        return (
            <Container >
                <div>
                    <Stack direction="horizontal" gap={3}>
                        <div className="justify-left">
                            <h3>Precaution Dose and Children Vaccination</h3>
                            <p>
                                Protect our Senior Citizens and Children. Precaution Dose is available for fully vaccinated HCW/FLW and Senior Citizens (60+ yrs) after 39 weeks from the 2nd dose. Citizens aged 60 years or more and having co-morbidities, should take precaution dose, only after medical advice. Also, getting your Children(15-18 yrs) vaccinated is the best thing you can do to protect your child against COVID-19. Both online and walk-in are available.
                            </p>
                            <Button variant="outline-secondary" href='/sessions'>Find Slots</Button>
                        </div> 
                        <div >
                            <img src='https://www.cowin.gov.in/assets/images/Precaution_dose.svg'></img>

                        </div>
                    </Stack>
                </div>
                <Row>
                        <StateCity />
                    </Row>
                <div>
                    <Stack direction="horizontal" gap={3}>
                        <div className="justify-left">
                            <img src='https://www.cowin.gov.in/assets/images/share_illustration.svg'></img>
                        </div>
                        <div >
                            <h3>
                                Download your Vaccination Certificate
                            </h3>
                            <p>
                                Be a Fighter! If you are fully or partially vaccinated, you can now share your vaccination status in your social circle. Let's encourage our friends and followers in joining India's battle against COVID-19.
                            </p>
                            <Button variant="outline-secondary" href="/certificate">Download Certificate</Button>
                        </div>
                    </Stack>
                </div>
                <div>
                </div>
            </Container>
        )
    }
}