import React, { Component } from 'react'
import SkillLevel from './SkillLevel'
import Speed from './Speed'
import TurnRadius from './TurnRadius'
import Snow from './Snow'
import LandingPage from './LandingPage'
import Gender from './Gender'
import Terrain from './Terrain'
import Result from './Result'
// import Calculation from './Calculation'


export class UserForm extends Component {
    state = {
        step: 1,
        terrain: '',
        gender: '',
        skillLevel: '',
        speed: '',
        turnRadius: '',
        snow: '',
        result: '',
        
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
          step: step + 1
        })
    }

    // Go to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    restart = () => {
        this.setState({
            step: 1,
            terrain: '',
            gender: '',
            skillLevel: '',
            speed: '',
            turnRadius: '',
            snow: '',
            result: '',
        })
    }

    //Handle field change

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state
        const { terrain, gender, skillLevel, speed, turnRadius, snow, result } = this.state
        const values = {step, terrain, gender, skillLevel, speed, turnRadius, snow, result }
        
        switch (step) {
            default:
                case 1: 
                return(
                    <LandingPage
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
                case 2: 
                return ( 
                    <Terrain
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 3: 
                return ( 
                    <Gender
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 4: 
                return(
                    <SkillLevel
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 5:
                return(
                    <Speed
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 6:
                return (
                    <TurnRadius
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 7:
                return (
                    <Snow
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    // setResult={this.setResult}
                    />
                )
            case 8: 
                return (
                    <Result />
            )
            }
    }
}

export default UserForm
