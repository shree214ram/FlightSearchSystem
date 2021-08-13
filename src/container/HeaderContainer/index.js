import React from 'react';
import HeaderComponent from '../../components/Header';
import { connect } from 'react-redux';

class Header extends React.Component {
  componentDidMount() {
   
  }

  render() {
    return <HeaderComponent {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};
const mapStateToProps = (state) => {
  return {
    flight: state.UserLoginReducers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
