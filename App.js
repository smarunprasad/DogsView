import React, {Component} from 'react';
import DogsListView from './source/components/screens/DogsListView';
import DogsBreadsListView from './source/components/screens/DogsBreadsListView';
import authContainer from './source/container/authContainer';
import {Provider} from 'react-redux';
import configureStore from './source/store/configureStore';
import {Scene, Router, Actions} from 'react-native-router-flux';

export const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              key="DogsListView"
              component={authContainer(DogsListView)}
              title="DogsBread"
              panHandlers={null}
            />
            <Scene
              key="DogsBreadsListView"
              component={authContainer(DogsBreadsListView)}
              title="Breads List"
              panHandlers={null}
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}