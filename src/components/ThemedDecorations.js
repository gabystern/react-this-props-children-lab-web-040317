import React from 'react';

class ThemedDecorations extends React.Component {
  constructor(){
    super()
    this.renderChildren = this.renderChildren.bind(this)
  }

  renderChildren(){
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
  };

  render(){
    return (
      <div>
        {this.renderChildren()}
      </div>
    )
  }
}

export default ThemedDecorations;
