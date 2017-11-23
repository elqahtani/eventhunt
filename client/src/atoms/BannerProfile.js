import React from "react"
import {Container} from "reactstrap"
import axios from "axios"

import IconF from "../static/iconFwhite.png";
import IconMap from "../static/map.png"

const div1 = {
  fontFamily: "lato",
  textAlign: "center",
  color: "#ffffff"
};

const styleTextBold={
  fontFamily: "lato",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  color: "#ffffff"

}
const styleText1 = {
  width:"150px",
  marginTop:"120px",
  marginBottom:"30px",
  borderRadius: "200px",
  border:"solid 2px",
  borderColor: "#ffffff"
};

const styleText4 = {
  fontFamily: "lato",
  fontSize: "13px",
  textAlign: "center",
  color: "#ffffff"
};

const styleIcon = {
  width: "15px",
  marginRight: "22px",
  marginLeft: "35px"
}

const styleIcon2 = {
  width: "25px",
  marginRight: "22px",
  marginLeft: "35px"
}

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: props.profile
    }
  }

  componentWillMount() {
    this.getEvents();
  }

  getEvents(){
    axios.request({
      method:"get",
      url: process.env.REACT_APP_API_URL + `/api/users/${this.state.profile.id}`
    }).then((response) => {
        console.log(response.data);
        this.setState({profile: response.data},() => {
          console.log(this.state);
        });
    }).catch(error => {
        console.log(error)
    })


    // const id = Number(this.props.id)
    // axios
    //   .get(`${process.env.REACT_APP_API_URL}/api/users/${id}`)
    //   .then(response => {
    //     const profile = response.data
    //     console.log(profile)
    //     this.setState({
    //       profile: profile
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
  render() {
    const profile = this.state.profile
    return (
      <div style={div1}>
        <Container style={styleText1}>
        <img src="" alt="Profile image"/>
        </Container>
          <h3 style={styleTextBold}>{profile.name}</h3>
          <p style={styleText4}> <img src={IconMap} alt="map" style={styleIcon}/>Profile location</p>
          <p style={styleText4}> I am Ayu, a Freelance Graphic Designer based in Hermitage, Berkshire. </p>
          <p style={styleText4}> With over 8 years experience I offer the same full range of design services as an agency but at the fraction of the cost.</p>
          <div>
            <a href=""><img src={IconF} alt="facebook" style={styleIcon2}/></a>
          </div>
      </div>
      )
    }
  }
