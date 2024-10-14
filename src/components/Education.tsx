import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Education(){
    return(<>
    <Container className="education-container" id="education">
        <Row>
            <Col xs={12} className="education-title text-center">
                <h1 className="mb-3">Education</h1>
 
                <div className="education-scroller">
                <table className="education-table">
                    <tr>
                        <td>Northview Heights Secondary School</td>
                        <td className="right-edu-text">Toronto, ON</td>
                    </tr>
                    <tr>
                        <td>Ontario Highschool Diploma</td>
                        <td className="right-edu-text">AVG</td>
                    </tr>
                    <tr>
                        <td>Expected June 2025</td>
                    </tr>
                </table>
                <table className="education-table">
                    <tr>
                        <td>Northview Heights Secondary School</td>
                        <td className="right-edu-text">Toronto, ON</td>
                    </tr>
                    <tr>
                        <td>HMST Program</td>
                        <td className="right-edu-text">AVG</td>
                    </tr>
                    <tr>
                        <td>May 2024</td>
                    </tr>
                </table>
                </div>
            </Col>
        </Row>
    </Container>
    </>)
}

export default Education;