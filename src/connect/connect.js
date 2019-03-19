import TitanFrameworkConsumer from '../components/TitanFrameworkConsumer';

export const connect = (WrappedComponent) => {
  return TitanFrameworkConsumer(WrappedComponent);
};
