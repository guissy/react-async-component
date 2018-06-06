import React, { Component } from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    static Component = null;
    state = { component: AsyncComponent.Component };

    async componentDidMount() {
      const { default: component } = await importComponent();
      await new Promise(cb => setTimeout(cb, 3000));
      AsyncComponent.Component = component;
      this.setState({ component });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : "loading...";
    }
  }

  return AsyncComponent;
}
