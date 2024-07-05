import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            <div className="px-lg-3">Shopping Bazaar</div>
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
        </nav>
      </>
    );
  }
}

export default Navbar;
