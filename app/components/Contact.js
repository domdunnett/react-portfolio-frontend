import React from 'react';
import Styles from '../styles/styles';

const Contact = React.createClass({
  render: function() {
    return(
      <div style={Styles.contentLayer}>
        <span>Ping me an Email.</span>
      </div>
    )
  }
});

module.exports = Contact;
