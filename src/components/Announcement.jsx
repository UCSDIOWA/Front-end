import React, { Component } from "react";
import { Message } from "semantic-ui-react";

export default class Announcement extends Component {
  constructor(props) {
    super(props);
    this.handleDismiss = this.handleDismiss.bind(this);
  }
  handleDismiss() {
    this.props.onAnnouncementDismiss(this.props.index);
  }

  // this.prop.announcements should be an array
  render() {
    return (
      <Message className={this.props.className}
        color="teal"
        onDismiss={this.handleDismiss}
        content={this.props.content}
      />
    );
  }
}
