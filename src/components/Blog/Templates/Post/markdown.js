import React, { Component } from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'


class Markdown extends Component {

   static propTypes = {
    text: PropTypes.string.isRequired,
  }

  render() {
    const text = marked(this.props.text);

    return <div dangerouslySetInnerHTML={ {__html: text} } />;

  }
}

export default Markdown;