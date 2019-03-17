import React, { Component } from 'react';
import { TitanFrameworkContext } from "./TitanFrameworkContext";

class TitanFramework extends Component
{
  constructor(props)
  {
    super(props);

    const { config, connection } = props;

    this.state = {
      config,
      connection
    };
  }

  render()
  {
    const Context = this.props.context || TitanFrameworkContext;

    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default TitanFramework;
