import PropTypes from 'prop-types';
import React from 'react';

import Context from './Context';

export default class Say extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.text !== this.props.text;
  }

  render() {
    const { lang, pitch, rate, text, voice, volume } = this.props;

    return (
      <Context.Consumer>
        { context => context.speak({ lang, pitch, rate, text, voice, volume }) }
      </Context.Consumer>
    );
  }
}

Say.propTypes = {
  lang: PropTypes.string,
  pitch: PropTypes.number,
  rate: PropTypes.number,
  onEnd: PropTypes.func,
  onStart: PropTypes.func,
  text: PropTypes.string,
  voice: PropTypes.any,
  volume: PropTypes.number
};