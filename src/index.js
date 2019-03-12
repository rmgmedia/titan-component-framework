import React from 'react';

export const TitanFramework = (WrappedComponent) => {
  return class TitanFramework extends React.Component
  {
    constructor(props)
    {
      super(props);
    }

    render()
    {
      return <WrappedComponent {...this.props} />;
    }
  };
};
