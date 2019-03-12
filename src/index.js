import React from 'react';

const TitanFramework = (WrappedComponent) => {
  class EnhancedComponent extends React.Component
  {
    constructor(props)
    {
      super(props);
    }

    render()
    {
      return <WrappedComponent {...this.props} />;
    }
  }

  return EnhancedComponent;
};

exports.TitanFramework = TitanFramework;
