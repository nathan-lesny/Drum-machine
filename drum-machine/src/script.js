import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const root = ReactDOM.createRoot(document.getElementById('root'));

const heater1Audio = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
const heater2Audio = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
const heater3Audio = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
const heater4Audio = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
const clapAudio = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
const openHHAudio = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
const kickHatAudio = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
const kickAudio = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
const closedhhAudio = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"

class App extends React.Component {
  render() {
    return(
      <container id="drum-machine">
        <Box />
      </container>
    )
  }
}
const outerbox = document.getElementById("outer-box");

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pressed: 'Display'
    }
  }
  
  changeState = (e) => {
    this.setState({
      pressed: e.title
    })
  }
  
  render() {
    return (
    <div id="outer-box">
      <div id="pad-box">
        <Pad onpress={this.changeState} id="Heater 1" audio={heater1Audio} name="Heater 1" letter="Q" />
        <Pad onpress={this.changeState} id="Heater 2" audio={heater2Audio} name="Heater 2" letter="W" />
        <Pad onpress={this.changeState} id="Heater 3" audio={heater3Audio} name="Heater 3" letter="E" />
        <Pad onpress={this.changeState} id="Heater 4" audio={heater4Audio} name="Heater 4" letter="A" />
        <Pad onpress={this.changeState} id="Clap" audio={clapAudio} name="Clap" letter="S" />
        <Pad onpress={this.changeState} id="Open High Hat" audio={openHHAudio} name="Open High Hat" letter="D" />
        <Pad onpress={this.changeState} id="Kick Hat" audio={kickHatAudio} name="Kick Hat" letter="Z" />
        <Pad onpress={this.changeState} id="Kick" audio={kickAudio} name="Kick" letter="X" />
        <Pad onpress={this.changeState} id="Closed High Hat" audio={closedhhAudio} name="Closed High Hat" letter="C" />
      </div>
      <div id="display">
        <h1>
        {this.state.pressed}
        </h1>
      </div>
    </div>
     )
  }
}

window.addEventListener("keydown", e => {
  const audioplay = document.getElementById(e.key.toUpperCase())
  audioplay.play();
})

class Pad extends React.Component {
  constructor(props) {
    super(props)
  }
  
  playSound = (e) => {
    const audio = document.getElementById(this.props.letter)
    audio.play()
    this.props.onpress(audio)
  }
  
    render() {
      return(
        <button className="drum-pad" id={this.props.name} onClick={this.playSound}>{this.props.letter}<audio className="clip" id={this.props.letter} title={this.props.name} src={this.props.audio} /></button>
      )
    }
}

root.render(<App/>)
