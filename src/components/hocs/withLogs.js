import React from 'react';

export default function withLogs(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(componentName, this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}