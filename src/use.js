import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScoreBar from './components/scoreBar';
import './style/index.less';

export default class Use extends  Component{
  constructor(props) {
      super(props);
      this.state={
        value: 90
      }
  }
  randomValue(){
    this.setState({
      value: Number((Math.random()*100).toFixed(2))
    })
  }
  render(){
    const {value} = this.state;
    return (<div>
      <ScoreBar score={value} showOutterScore />
      <div className={'buttons'} onClick={()=>{
        this.randomValue()
      }}>Random</div>
    </div>)
  }
}
