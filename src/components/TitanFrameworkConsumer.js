import React, { Component } from 'react';
import { TitanFrameworkContext } from "./TitanFrameworkContext";

export default (WrappedComponent) => {
  return class extends Component
  {
    constructor(props)
    {
      super(props);
      this.wrappedComponent = WrappedComponent;
    }

    render()
    {
      return (
        <TitanFrameworkContext.Consumer>
          {value => <WrappedComponent {...this.wrappedComponent.props} {...value} />}
        </TitanFrameworkContext.Consumer>
      );
    }
  };
};
