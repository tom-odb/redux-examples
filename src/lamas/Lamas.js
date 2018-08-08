import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addLama, removeLama } from "../store/actions";

const listStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0
};
const listItemStyle = {
  padding: "6px 12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const iconStyle = {
  width: "24px",
  height: "24px"
};
const linkStyle = {
  textDecoration: "none",
  color: "rgb(108, 174, 221)"
};

class Lamas extends React.Component {
  addLama() {
    this.props.addLama(this.props.lamas.length);
  }

  render() {
    const lamas = this.props.lamas || [];

    return (
      <div>
        <h1>Lamas</h1>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <button onClick={() => this.addLama()}>add lama</button>
          </li>
          {!lamas.length && <li style={listItemStyle}>No lamas yet</li>}
          {lamas.map(lama => (
            <li key={lama.id} style={listItemStyle}>
              <img
                style={iconStyle}
                src="https://uploads.codesandbox.io/uploads/user/664bc7f2-473d-4189-ad79-acd1c2d928bd/HHBh-Alpaca-512.png"
                alt={lama.name}
              />
              <Link style={linkStyle} to={lama.id}>
                {lama.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lamas: state.lamas.list
});

const mapDispatchToProps = dispatch => ({
  addLama: index => dispatch(addLama(index)),
  removeLama: id => dispatch(removeLama(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lamas);