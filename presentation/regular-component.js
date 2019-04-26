import React from 'react';
import { Heading, Text } from 'spectacle';

export default class RegularComponent extends React.Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    // bad pattern
    this.setState({ count: this.state.count + 1})
    // this.setState({ count: this.state.count + 1})
    // this.setState({ count: this.state.count + 1})
    // batching!

    // good pattern
    // this.setState(state => ({
    //   count: state.count + 1
    // }))
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <Heading>Sou um componente react de verdade</Heading><br />
        <Text>(no meio de uma apresentação 🤯)</Text><br />
        <Text>{count}</Text><br />
        <Text>Clicar no botão para </Text><br />
        <button onClick={this.incrementCount}>Aumentar</button>
      </div>
    )
  }
}