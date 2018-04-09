import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBar from './components/scoreBar';
import './style/index.less';

ReactDOM.render(
  <ScoreBar score={90} showOutterScore />,
  document.getElementById('root')
)
