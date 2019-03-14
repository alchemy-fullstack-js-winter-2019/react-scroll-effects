import React from 'react';

export default class ScrollAnimation extends React.PureComponent {
  ref = React.createRef();

  state = {
    inView: false,
    animationEnd: true,
  }

  isInView = bounding => {
    return bounding.top >= 0 &&
      bounding.bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
    document.addEventListener('animationstart', () => {
      this.setState({ animationEnd: false })
    })

    document.addEventListener('animationend', () => {
      this.setState({ animationEnd: true })
    })
  }

  handleScroll = () => {
    const bounding = this.ref.current.getBoundingClientRect()
    console.log(this.isInView(bounding))
    if (this.isInView(bounding)) {
      this.state.animationEnd && this.setState({ inView: true })
    } else {
      this.state.animationEnd && this.setState({ inView: false })
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
