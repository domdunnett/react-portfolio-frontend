import React from 'react';
import Styles from '../styles/styles';

const Contact = (props) => (
  <div style={Styles.contentLayer}>
    {
      props.language === 'Eng' ?
      <div>
        <div>Ping me an Email at <a href="mailto:domdunnett@gmai.com">domdunnett@gmail.com</a></div>
        <div>Connect with me on <a href="https://www.linkedin.com/in/domdunnett">LinkedIn</a></div>
      </div>
      :
      <div>
        <div>发一封邮件在<a href="mailto:domdunnett@gmai.com">domdunnett@gmail.com</a></div>
        <div>连接在<a href="https://www.linkedin.com/in/domdunnett">LinkedIn</a>上</div>
      </div>
    }
  </div>
);

module.exports = Contact;
