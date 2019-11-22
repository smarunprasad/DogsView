import React, {Component} from 'react';
import DogsListView from './source/components/screens/DogsListView';
import DogsBreedsView from './source/components/screens/DogsBreedsView';
import authContainer from './source/container/authContainer';
import {Provider} from 'react-redux';
import configureStore from './source/store/configureStore';
import {Scene, Router, Actions} from 'react-native-router-flux';
import { navigationNames } from './source/constants/constants';

export const store = configureStore();

export default class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Router>
            <Scene key="root">
              <Scene
                key={navigationNames.DogsListView}
                component={authContainer(DogsListView)}
                title="Back"
                panHandlers={null}
                hideNavBar={true}
              />
              <Scene
                key={navigationNames.DogsBreedsView}
                component={authContainer(DogsBreedsView)}
                title=""
                panHandlers={null}
              />
            </Scene>
          </Router>
        </Provider>
      );
    }
}