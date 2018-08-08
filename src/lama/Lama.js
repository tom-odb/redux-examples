import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { loadLama, updateLama, removeLama } from "../store/actions";

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

class Lama extends React.Component {
  componentWillMount() {
    this.props.loadLama(this.props.match.params.id);
  }

  render() {
    const lama = this.props.lama;

    const template = lama ? (
      <div>
        <h1 style={listItemStyle}>
          <img
            style={iconStyle}
            src="https://uploads.codesandbox.io/uploads/user/664bc7f2-473d-4189-ad79-acd1c2d928bd/HHBh-Alpaca-512.png"
            alt={lama.name}
          />
          {lama.name}
        </h1>
        <ul style={listStyle}>
          {!lama.hobbies.length && (
            <li style={listItemStyle}>this lama has no hobbies</li>
          )}
          {lama.hobbies.map((hobby, i) => (
            <li key={i} style={listItemStyle}>
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>Lama not found</p>
    );

    return (
      <div>
        <Link to="/">back</Link>
        {template}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lama: state.lamas.detail
});

const mapDispatchToProps = dispatch => ({
  loadLama: id => dispatch(loadLama(id)),
  updateLama: lama => dispatch(updateLama(lama)),
  removeLama: id => dispatch(removeLama(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lama);
