import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addLama, removeLama } from "../store/actions";
import { listStyle, listItemStyle, linkStyle, deleteButtonStyle } from '../styles';
import Icon from '../Icon';

class Lamas extends React.Component {
  addLama() {
    this.props.addLama(this.props.lamas.length);
  }

  removeLama(id) {
    this.props.removeLama(id);
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
              <Icon src="lama.png" alt={lama.name} />
              <Link style={linkStyle} to={lama.id}>
                {lama.name}
              </Link>
              <button style={deleteButtonStyle} onClick={() => this.removeLama(lama.id)}>
                <Icon src="delete.svg" />
              </button>
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
