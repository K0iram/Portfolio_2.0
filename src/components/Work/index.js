import React, { Component } from 'react'
import MadLibs from '../../images/madlibs.png'
import HealthApp from '../../images/EliminationHealth.png'
import StoreApp from '../../images/0squad.png'
import TicTacToe from '../../images/tictactoe.png'
import './style.css'


class Work extends Component {

  render() {
    return (
      <div className="work">
        <div className="section-title">
          <br/>
          <h5>Projects</h5>
        </div>

        <div className='project-container'>
          <div className="project">
            <h5>Wicked Mad Libs</h5>
            <a href="https://wicked-mad-libs.herokuapp.com" target='_blank'><img src={MadLibs} alt="Wicked Mad Libs"/></a>
            <p>My interpretation of the classic game mad libs. Built using React.js, this project was the culmination of 
            my time at General Assembly. This full stack application has a custom Express API written in Node.js with a 
            Mongo database. I used Material-UI component library and skeleton.css to standardize the styles.
            <br />
            <a href="https://github.com/mario7746/wicked-mad-libs" target='_blank'>Check out the code!</a>
            </p>
          </div>

        <div className="project">
          <h5>Elimination Health App</h5>
          <a href="https://mario7746.github.io/Elimination-Health" target='_blank'><img src={HealthApp} alt="Health App"/></a>
          <p>A full stack application that tracks a user's meals with an associated "feeling" value. This allows
          the user to gauge their daily meals on how they felt afterward. I built the back-end with rails which interacts
          with an SQL database. The front-end was created with Javascript and Bootstrap utilizing 
          the Handlebars templating engine.
          <br />
          <a href="https://github.com/mario7746/Elimination-Health" target='_blank'>Check out the code!</a>
          </p>
        </div>

        <div className="project">
          <h5>0 Squad Merch</h5>
          <a href="https://0squad.github.io/0squadmerch" target='_blank'><img src={StoreApp} alt="Squad Store"/></a>
          <p>Our team was given the task of creating a custom mock E-commerce application. We were to use Express
          for our store API and use Stripes developer API for the checkout process. Through this week long sprint, 
          we learned to work as a team. We had daily morning stand-ups and clearly laid out the
          goals for each day.
          <br />
          <a href="https://github.com/0squad/0squadmerch" target='_blank'>Check out the code!</a>
          </p>
        </div>

        <div className="project">
          <h5>Tic Tac Toe</h5>
          <a href="https://mario7746.github.io/tic-tac-toe" target='_blank'><img src={TicTacToe} alt="TicTacToe"/></a>
          <p>My first project! The task was to create a simple tic-tac-toe game that communicated with an API that was
          supplied to us by General Assembly. Using best practices I creating custom Javascript game engine and used 
          Bootstrap and CSS3 to design the user experience. This project taught me the fundamentals I've used in every 
          project I've worked on since.
          <br />
          <a href="https://github.com/mario7746/tic-tac-toe" target='_blank'>Check out the code!</a>
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default Work;
