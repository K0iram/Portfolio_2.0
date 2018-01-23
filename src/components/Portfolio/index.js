import React, { Component } from 'react'
import MadLibs from '../../images/madlibs.png'
import HealthApp from '../../images/EliminationHealth.png'
import StoreApp from '../../images/0squad.png'
import TicTacToe from '../../images/tictactoe.png'
import NeuroMotion from '../../images/Neuromotion.png'
import Ideaboard from '../../images/ideaboards.png'
import './style.css'


class Portfolio extends Component {

  render() {
    return (
      <div className="work">
        <h4 className="section-title">Professional Work</h4>
        <div className="schoolProject-container project-section">
        <div className="project">
            <a href="https://wicked-mad-libs.herokuapp.com" target='_blank'><img src={Ideaboard} alt="Ideaboards App"/></a>
          </div>
          <div className="project">
            <a href="https://wicked-mad-libs.herokuapp.com" target='_blank'><img src={NeuroMotion} alt="Mighteor Game"/></a>
          </div>
        </div>
        <h4 className="section-title">School Work</h4>
        <div className='schoolProject-container project-section'>
          <div className="project">
            <a href="https://wicked-mad-libs.herokuapp.com" target='_blank'><img src={MadLibs} alt="Wicked Mad Libs"/></a>
          </div>

          <div className="project">
            <a href="https://mario7746.github.io/Elimination-Health" target='_blank'><img src={HealthApp} alt="Health App"/></a>
          </div>

          <div className="project">
            <a href="https://0squad.github.io/0squadmerch" target='_blank'><img src={StoreApp} alt="Squad Store"/></a>
          </div>

          <div className="project">
            <a href="https://mario7746.github.io/tic-tac-toe" target='_blank'><img src={TicTacToe} alt="TicTacToe"/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
