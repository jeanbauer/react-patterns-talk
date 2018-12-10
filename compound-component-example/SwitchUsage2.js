// USAGE2 - First compound component

import React from 'react'
import Switch from './SwitchExample'

class Toggle extends React.Component {
  state = {on: false}
  static On = ({ on, children }) => (on ? children : null)
  static Off = ({ on, children }) => (on ? null : children)
  static Button = ({ on, toggle, ...props }) => (
    <Switch on={on} onClick={toggle} {...props} />
  )

  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => this.props.onToggle(this.state.on),
    )
  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    )
  }
}

function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>Botão ligado</Toggle.On>
      <Toggle.Off>Botão desligado</Toggle.Off>
      <div className="excluir-para-funcionar">
        <Toggle.Button />
      </div>
    </Toggle>
  )
}

export {Toggle, Usage as default}










// Compound Components
// // Colinha
// import React from 'react'
// import Switch from './SwitchExample'

// class Toggle extends React.Component {
//   static On = ({on, children}) => (on ? children : null)
//   static Off = ({on, children}) => (on ? null : children)
//   static Button = ({on, toggle, ...props}) => (
//     <Switch on={on} onClick={toggle} {...props} />
//   )
//   state = {on: false}
//   toggle = () =>
//     this.setState(
//       ({on}) => ({on: !on}),
//       () => this.props.onToggle(this.state.on),
//     )
//   render() {
//     return React.Children.map(this.props.children, child =>
//       React.cloneElement(child, {
//         on: this.state.on,
//         toggle: this.toggle,
//       }),
//     )
//   }
// }

// function Usage({
//   onToggle = (...args) => console.log('onToggle', ...args),
// }) {
//   return (
//     <Toggle onToggle={onToggle}>
//       <Toggle.On>The button is on</Toggle.On>
//       <Toggle.Off>The button is off</Toggle.Off>
//       <Toggle.Button />
//     </Toggle>
//   )
// }
// Usage.title = 'Compound Components'

// export {Toggle, Usage as default}

