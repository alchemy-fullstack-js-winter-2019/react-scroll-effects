import React from 'react';

export default class ScrollAnimation extends React.PureComponent {
  ref = React.createRef();

  state = {
    inView: false
  }

  isInView = bounding => {
    return bounding.top >= 0 &&
      bounding.bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const bounding = this.ref.current.getBoundingClientRect()
    console.log(this.isInView(bounding))
    if (this.isInView(bounding)) {
      this.setState({ inView: true })
    } else {
      this.setState({ inView: false })
    }
  }

  render() {
    const className = this.state.inView ? this.props.enter : this.props.exit;
    return (
      <div ref={this.ref} className={className}>
        {this.props.children}
      </div>
    )
  }
}
