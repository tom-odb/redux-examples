import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { loadLama, updateLama, removeLama } from "../store/actions";

import { listStyle, listItemStyle, deleteButtonStyle } from '../styles';
import Icon from '../Icon';

class Lama extends React.Component {
  componentWillMount() {
    this.props.loadLama(this.props.match.params.id);
  }

  removeLama(id) {
    this.props.removeLama(id);
  }

  render() {
    const lama = this.props.lama;

    const template = lama ? (
      <div>
        <h1 style={listItemStyle}>
          <Icon src="lama.png" name={lama.name} />
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
        <button style={deleteButtonStyle} onClick={() => this.removeLama(lama.id)}>
          <Icon src="delete.svg" />
        </button>
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
