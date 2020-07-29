import React, {Component} from 'react';
import Shape from './Shape.js'

class Selector extends Component{
  constructor() {
    super();
    this.state = {
      selectedShape: 'None Yet',
      totalClicks: 0,
      special: false
    }
  }

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
      totalClicks: this.state.totalClicks + 1,
      [shapeName]: (this.state[shapeName] ? this.state[shapeName] + 1 : 1)
    })
  }

  footerOrSpecial = () => {
    this.setState({
      special: !this.state.special,
    })
  }

  runw = () => {
    if(!this.state.special){
      return (
      <div className = "clickcount">
        <div>Square: <span> {this.state.square} </span> </div>
        <div>Circle: <span> {this.state.circle} </span> </div>
        <div>Triangle: <span> {this.state.triangle} </span> </div>
        <div>Triangle_right: <span> {this.state.triangle_right}</span> </div>
        <div>Triangle_down: <span> {this.state.triangle_down} </span> </div>
        <div>Triangle_left: <span> {this.state.triangle_left} </span> </div>
        <div>oval: <span> {this.state.oval}</span> </div>
        <div>Trapezium: <span> {this.state.trapezium} </span> </div>
        <div>Star: <span> {this.state.star} </span> </div>
      </div>);
    } else {
      return;
    }
  }

  render(){
    return(
      <div className = "container">
        {/* ---------------------navbar--------------------- */}
        <div className = "navbar">
          <div>Selected: <span>{this.state.selectedShape}</span></div>
          <button id = 'special' onClick={this.footerOrSpecial}>Click Me</button>
        </div>
        {/*-----------------------SHAPES---------------------*/}
        <div >
          <div className = "shape-list">
            <Shape shape='square' selectShape={this.selectShape} value = {this.state.square} special={this.state.special}/>
            <Shape shape='circle' selectShape={this.selectShape} value = {this.state.circle} special={this.state.special}/>
            <Shape shape='triangle' selectShape={this.selectShape} value = {this.state.triangle} special={this.state.special}/>
          </div>
          <div className = "shape-list">
            <Shape shape='triangle_right' selectShape={this.selectShape} value = {this.state.triangle_right} special={this.state.special}/>
            <Shape shape='triangle_down' selectShape={this.selectShape} value = {this.state.triangle_down} special={this.state.special}/>
            <Shape shape='triangle_left' selectShape={this.selectShape} value = {this.state.triangle_left} special={this.state.special}/>
          </div>
          <div className = "shape-list">
            <Shape shape='oval' selectShape={this.selectShape} value = {this.state.oval} special={this.state.special}/>
            <Shape shape='trapezium' selectShape={this.selectShape} value = {this.state.trapezium} special={this.state.special}/>
            <Shape shape='star' selectShape={this.selectShape} value = {this.state.star} special={this.state.special}/>
          </div>
        </div>
        {/* ---------------------footer--------------------- */}
        <div className = "footer">
          <div>Total Clicks: <span>{this.state.totalClicks}</span></div>
          {this.runw()}
        </div>
      </div>
    )
  }
}

export default Selector;