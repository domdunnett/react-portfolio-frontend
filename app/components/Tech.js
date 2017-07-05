import React from 'react';
import Styles from '../styles/styles';
import SkyscannerLogo from './SkyscannerLogo';

const Tech = () => (
  <div style={Styles.contentLayer}>
    <p>
      Currently I am a full stack developer @
      <a href="https://www.skyscanner.com">
        <SkyscannerLogo alt="Skyscanner" />
      </a>
    </p>
    <p>I am comfortable working in all areas of web development from initial design,
      to both frontend and backend development.</p>
    <p>Tech Experience:</p>
    <ul>
      <li>Javascript</li>
      <ul>
        <li>React.js (this site is built using React)</li>
        <li>AngularJS</li>
        <li>Nodejs</li>
        <li>Meteorjs</li>
      </ul>
      <li>Web Design</li>
      <ul>
        <li>Sketch</li>
        <li>Adobe Illustrator</li>
      </ul>
      <li>Python</li>
      <ul>
        <li>Django</li>
        <li>Flask</li>
      </ul>
      <li>Ruby</li>
      <ul>
        <li>Rails</li>
      </ul>
    </ul>
  </div>
);

module.exports = Tech;
