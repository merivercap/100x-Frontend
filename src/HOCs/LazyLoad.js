import * as React from 'react';
import Loading from 'shared/Loading';


class LazyLoad extends React.Component {
  cancelUpdate = false;

  componentDidMount() {
    this.cancelUpdate = false;
    this.props.component.then(Component => {
      if (!this.cancelUpdate) this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.cancelUpdate = true;
  }

  render() {
    const { component, ...props } = this.props;
    return this.C
      ? this.C.default
        ? <this.C.default {...props} />
        : <this.C {...props} />
      : <Loading />;
  }
}

export default LazyLoad;