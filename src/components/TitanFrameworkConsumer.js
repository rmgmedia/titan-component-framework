import React, { Component } from 'react';
import { TitanFrameworkContext } from "./TitanFrameworkContext";

export default (WrappedComponent) => {
  return class extends Component
  {
    constructor(props)
    {
      super(props);
    }

    render()
    {
      return (
        <TitanFrameworkContext.Consumer>
          {value => {<WrappedComponent {...props} {...value} />}}
        </TitanFrameworkContext.Consumer>
      );
    }
  };
};
