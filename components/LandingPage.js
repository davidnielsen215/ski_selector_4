import React, { Component } from 'react'
import '../styles.css'
import { Spring } from 'react-spring/renderprops'

export default class LandingPage extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        
        return (
                    <div className='maincont'>
                        <div className="container">

                        <Spring 
                        from={{ opacity: 0}}
                        to={{ opacity: 1}}
                        config={{ duration: 1700}}
                        >
                        { props => (
                        <div style={props}>
                            <h1 className='title'>SKI SELECTOR</h1>
                            
                            <h3 className='statement'><i>A Personalized Assesment To Find You The Best Equipment</i></h3>

                            <button onClick={this.continue}
                            className='button'>B E G I N</button>

                            </div>
                            )}
                        </Spring>
                        </div>
                    </div>
                )
        }
}