import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import Styles from '../styles/styles';
import SkyscannerLogo from './SkyscannerLogo';

const Tech = props => (
  <div>
    <MediaQuery minWidth="1224px">
      <div style={Styles.contentLayer.desktop}>
        {
          props.language === 'Eng' ?
            <div>
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
          :
            <div>
              <p>
              我在
              <a href="https://www.skyscanner.com">
                <SkyscannerLogo alt="Skyscanner" />
              </a>
              的软件工程师工作
            </p>
              <p>我的经历是在</p>
              <ul>
                <li>Javascript</li>
                <ul>
                  <li>React.js (这个网站用React.js)</li>
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
        }
      </div>
    </MediaQuery>
    <MediaQuery maxWidth="1224px">
      <div style={Styles.contentLayer.mobile}>
        {
          props.language === 'Eng' ?
            <div>
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
          :
            <div>
              <p>
              我在
              <a href="https://www.skyscanner.com">
                <SkyscannerLogo alt="Skyscanner" />
              </a>
              的软件工程师工作
            </p>
              <p>我的经历是在</p>
              <ul>
                <li>Javascript</li>
                <ul>
                  <li>React.js (这个网站用React.js)</li>
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
        }
      </div>
    </MediaQuery>
  </div>
);

Tech.propTypes = {
  language: PropTypes.string.isRequired,
};

module.exports = Tech;
