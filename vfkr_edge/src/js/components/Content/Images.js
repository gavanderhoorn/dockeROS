import React from "react";

import {Card, Col, Row} from "react-materialize";

import Image from "./Image";

export default class Images extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
	    names: [
        "ros",
        "roslaunch_multi_robot_nav_navigation_launch",
        "roslaunch_multi_robot_nav_localization_launch",
        "roslaunch_holistic_environment_model_launch",
        "roslaunch_cooperative_slam_launch",
        "roslaunch_monitoring_launch",
        "node",
        "mongodb",
        "react"
      ]
	  };

    // this.update()
  }

  update() {
    $.get("http://localhost:5000/v2/_catalog", function(data, status){
        if (status == 'success') {
          this.setState({names: data['repositories']});
        }
    }.bind(this));

    setTimeout(this.update.bind(this), 1000);
  }

  render() {
  	const names = this.state.names

    return (
      <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexFlow: "row wrap"
          }}> 
        {
          names.map((name) => 
          <div key={name} style={{
            flex: 1
          }}>
            <Image name={name} emitter={this.props.emitter} />
          </div>)}
      </div>
    )
  }
}
