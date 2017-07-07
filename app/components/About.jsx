import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import Styles from '../styles/styles';

const About = props => (
  <div>
    <MediaQuery minWidth="1224px">
      <div style={Styles.contentLayer}>
        { props.language === '中文' ?
          <div>
            <p>我叫邓大义。我是苏格兰，愛丁堡人。现在，我住在新加坡。我是軟件工程師。</p>
            <p>我的爱好：</p>
            <ul style={{ listStyle: 'none' }}>
              <li>- 旅行</li>
              <li>- 摄影术</li>
              <li>- 可持续性</li>
              <li>- 中文</li>
            </ul>
          </div> :
          <div>
            <p>I am a full stack web developer and web designer from Edinburgh,
              Scotland currently resident in Singapore.</p>
            <p>Hobbies:</p>
            <ul style={{ listStyle: 'none' }}>
              <li>- Travel</li>
              <li>- Photography</li>
              <li>- Sustainability</li>
              <li>- Mandarin</li>
            </ul>
          </div>
        }
      </div>
    </MediaQuery>
    <MediaQuery maxWidth="1224px">
      <div style={Object.assign({}, Styles.contentLayer, Styles.contentLayer.mobile)}>
        { props.language === '中文' ?
          <div>
            <p>我叫邓大义。我是苏格兰，愛丁堡人。现在，我住在新加坡。我是軟件工程師。</p>
            <p>我的爱好：</p>
            <ul style={{ listStyle: 'none' }}>
              <li>- 旅行</li>
              <li>- 摄影术</li>
              <li>- 可持续性</li>
              <li>- 中文</li>
            </ul>
          </div> :
          <div>
            <p>I am a full stack web developer and web designer from Edinburgh,
              Scotland currently resident in Singapore.</p>
            <p>Hobbies:</p>
            <ul style={{ listStyle: 'none' }}>
              <li>- Travel</li>
              <li>- Photography</li>
              <li>- Sustainability</li>
              <li>- Mandarin</li>
            </ul>
          </div>
        }
      </div>
    </MediaQuery>
  </div>
);

About.propTypes = {
  language: PropTypes.string.isRequired,
};

module.exports = About;
