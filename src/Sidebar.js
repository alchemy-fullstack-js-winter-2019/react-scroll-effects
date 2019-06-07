import React from 'react';
import './Sidebar.css';

export class Sidebar extends React.Component {
  ref = React.createRef();

  state = {
    open: false
  }

  openMenu = () => {
    this.setState(state => ({ open: !state.open }), () => {
      if (this.state.open) {
        this.ref.current.focus();
      }
    });
  }

  closeMenu = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <>
        <a
          href="#"
          ref={this.ref}
          onBlur={this.closeMenu}
          className={`menu-toggle ${this.state.open && 'menu-toggle-open'}`}
          onClick={this.openMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </a>
        <section className={`menu-display ${this.state.open && 'menu-display-open'}`}>
          {this.props.children}
        </section>
      </>
    )
  }
}
