import React, { Component } from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dropdown: false,
    };
  }
  render() {
    let navigationArea = {
      background: "linear-gradient(to right, #8a2387, #e94057, #f27121)",
      display: "flex",
      flexDirection: "row",
      height: "5vh",
    };
    let mainList = {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      width: "80%",
      height: "99%",
      margin: "0 2vh 0 0",
      padding: "0",
    };
    let dropdown = {
      backgroundColor: "rgb(148, 193, 227)",
      margin: "0",
      marginLeft: "-3vh",
      textAlign: "start",
      width: "40%",
      zIndex: "12",
      border: "2px solid red",
    };
    let liStyle = {
      listStyleType: "none",
      margin: "0 1vh 0 0",
    };

    return (
      <div>
        <nav style={navigationArea}>
          <h2 style={{ margin: "0.6vh 0.5em 0 1.3vh", width: "7em",fontSize:"1.5rem", }}>NewsPort</h2>
          <ul style={mainList}>
            <li style={liStyle}>
              <select
                style={{
                  cursor: "pointer",
                  color: "black",
                  textDecoration: "none",
                  border: "none",
                  backgroundColor: "",
                  borderRadius: "30px",
                  height: "2.8vh",
                  outline: "none",
                }}
                onChange={this.props.Select_Country}
                placeholder="Select a Country"
              >
                <option value="Country"  > Select a Country</option>
                <option value="in" >India</option>
                <option value="us">USA</option>
                <option value="sa">Saudi Arabia</option>
                <option value="jp">Japan</option>
              </select>
            </li>

            <li style={liStyle}>
              <select
                style={{
                  cursor: "pointer",
                  color: "black",
                  textDecoration: "none",
                  border: "none",
                  backgroundColor: "",
                  borderRadius: "30px",
                  height: "2.8vh",
                  outline: "none",
                }}
                onChange={this.props.Select_Category}
              >
                <option value="Select">Select a Category</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="tech">Tech</option>
                <option value="politics">Politics</option>
                <option value="viral">Viral</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
