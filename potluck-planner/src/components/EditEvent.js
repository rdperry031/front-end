import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import { useHistory, useParams, Link } from 'react-router-dom';

// Styling
import "bootstrap/dist/css/bootstrap.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  //   FormFeedback,
  Button,
  Col,
  Row,
} from "reactstrap";
import styled from "styled-components";

const StyledAddEvent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    // text-align: center;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    padding: 2% 3%;
    width: 40%;
    height: max-content;
  }
  h2 {
    text-align: center;
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  input {
    margin-bottom: 2%;
  }

  button {
    margin-top: 2%;
    background-color: var(--accent-color);
    border: none;

    &:hover {
      background-color: #58602e;
    }
  }

  @media (min-height: 900px) {
    height: calc(100vh - 210px);
  }

  @media (max-height: 900px) {
    form {
      margin-top: 3%;
      margin-bottom: 3%;
    }
  }

  @media (max-width: 500px) {
    form {
      width: 70%;
    }
  }
`;

export default function EditEvent() {
    const { push } = useHistory();
    const { id } = useParams();


    const [formValues, setFormValues] = useState({
        potluck_name: '',
        potluck_description:'',
        potluck_date: '',
        potluck_time: '',
        potluck_location: '',
        organizer: 2,
    });

    const[potluckName, setPotluckName] = useState([]);
    
    useEffect(() => {
        axiosWithAuth()
            .get(`/potlucks/${id}`)
            .then(res => {
                setPotluckName(res.data);
            })
            .catch(err => {console.log({ err })
            })
    }, [])

    useEffect(() => {
        axiosWithAuth()
            .get(`/potlucks/${id}`)
            .then(res => {
                setFormValues(res.data.details);
            })
            .catch(err => {console.log({ err })
            })
    }, [])

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleNameChange = (e) => {
        setPotluckName({
            ...potluckName,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .put(`/potlucks/${id}`, {
            potluck_name: `${potluckName.potluck_name}`,
            potluck_description:`${formValues.potluck_description}`,
            potluck_date: `${formValues.potluck_date}`,
            potluck_time: `${formValues.potluck_time}`,
            potluck_location: `${formValues.potluck_location}`,
            organizer: 2,
        })
        .then(res => {
            setFormValues(res.data)
            push('/upcomingevents')
        })
        .catch(err => console.log(err.response))
    }

  let mdValue1 = 6;
  let mdValue2 = 5;

  let x = window.matchMedia("(max-width: 770px)");

  x.addEventListener("change", function (e) {
    if (e.matches) {
      mdValue1 = 6;
      mdValue2 = 5;
    } else {
      mdValue1 = 12;
      mdValue2 = 12;
    }
  });


    return (
        <StyledAddEvent>
      <Form onSubmit={handleSubmit}>
        <h2>Edit Your Event</h2>
        <Label htmlFor="potluck_name">Potluck Name</Label>
        <Input
          id="potluck_name"
          value={potluckName.potluck_name}
          name="potluck_name"
          onChange={handleNameChange}
        />
        {/* <label htmlFor= 'potluck_time'>Time</label> */}
        <FormGroup>
          <Label htmlFor="potluck_description">Potluck Description</Label>
          <Input
            type="textarea"
            id="potluck_description"
            value={formValues.potluck_description}
            name="potluck_description"
            //   type="text"
            onChange={handleChange}
            rows="5"
            cols="15"
          />
        </FormGroup>

        <Row form>
          <Col className={`col-md${mdValue1}`}>
            <FormGroup>
              <Label htmlFor="potluck_time">Time</Label>
              <Input
                id="potluck_time"
                value={formValues.potluck_time}
                name="potluck_time"
                type="time"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col className={`col-md${mdValue2}`}>
            <FormGroup>
              <Label htmlFor="potluck_date">Date</Label>
              <Input
                id="potluck_date"
                value={formValues.potluck_date}
                name="potluck_date"
                type="date"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label htmlFor="potluck_location">Location</Label>
          <Input
            id="potluck_location"
            value={formValues.potluck_location}
            name="potluck_location"
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Save Changes</Button>
        <Link to={`/upcomingevents`}>
        <Button>Cancel Edit</Button>
        </Link>     
      </Form>
    </StyledAddEvent>
    )
}
