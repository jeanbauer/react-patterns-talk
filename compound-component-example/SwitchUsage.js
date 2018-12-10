import React from 'react'
import Switch from './SwitchExample'

class Toggle extends React.Component {
  state = {on: false}
  toggle = () => {
    this.setState((prevState => ({
      on: !prevState.on
    })), () => this.props.onToggle(this.state.on))
  }
  render() {
    return (
      <Switch
        onClick={this.toggle}
        on={this.state.on}
      />
    )
  }
}

function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}

export {Toggle, Usage as default}















// // colinha :D
// import React from 'react'
// import Switch from './SwitchExample'

// class Toggle extends React.Component {
//   state = {on: false}
//   toggle = () =>
//     this.setState(
//       ({on}) => ({on: !on}),
//       () => {
//         this.props.onToggle(this.state.on)
//       },
//     )
//   render() {
//     const {on} = this.state
//     return <Switch on={on} onClick={this.toggle} />
//   }
// }

// function Usage({
//   onToggle = (...args) => console.log('onToggle', ...args),
// }) {
//   return <Toggle onToggle={onToggle} />
// }

// export {Toggle, Usage as default}
