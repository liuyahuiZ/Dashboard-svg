import React, {Component} from 'react';
import ScoreBar from './components/scoreBar';
import './style/index.less';

class ClassName extends Component {
  constructor() {

  }
  render(){
    return <ScoreBar score={90} showOutterScore/>
  }
}
