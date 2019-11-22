import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions';

export default function authContainer(CurrentComponent) {
    class authContainer extends Component {
        constructor(props) {
            super(props);
        }

        render() {
          return <CurrentComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            //To bind the states to props 
            authReducer: state.authReducer,
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            //To bind the dispatch in actions
            actions: bindActionCreators(ActionCreators, dispatch),
        };
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(authContainer);
}
