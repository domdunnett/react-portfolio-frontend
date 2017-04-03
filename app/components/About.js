import React from 'react';
import Styles from '../styles/styles';

const About = props => (
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
      <p>I am a full stack web developer and web designer from Edinburgh, Scotland currently resident in Singapore.</p>
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
);

module.exports = About;
