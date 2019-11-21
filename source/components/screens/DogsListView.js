import React from 'react';
import {View, FlatList} from 'react-native';

//Common
import ActivityIndicatorView from '../common/View/ActivityIndicatorView';
import NoDataAlertView from '../common/View/NoDataAlertView';
//Constants
import {alertMessages} from '../../constants/constants';

//View
import DogsListItemView from '../screen-components/DogsListItemView';
//Styles
import {styles} from '../../styles/StyleSheet';
import {Actions} from 'react-native-router-flux';

export default class DogsListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogList: [],
      isConnected: false,
      loading: true,
    };
  }

  componentDidMount() {
    //TO call the API
    this.props.actions.getDogList();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //Asign the value to states from props
    const {
      authReducer: {isDogListLoaded, dogList},
    } = nextProps;
    if (isDogListLoaded) {
      debugger;
      return {
        loading: false,
        dogList: Object.entries(dogList),
      };
    }
    return null;
  }

  removeLoadingIndicator() {
    this.setState({
      loading: false,
      isRefreshing: false,
    });
  }

  componentDidUpdate() {
    //Clear actions data 
    const {
      authReducer: {isDogListLoaded},
      actions,
    } = this.props;
    if (isDogListLoaded) {
      actions.clearAuthReducer();
    }
  }

  render() {
    const {dogList, loading} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={
        [styles.containerPadding12]
      }>
        {/* Show Loading indicator during the Api call */}
        {loading ? (
          <ActivityIndicatorView />
        ) : dogList && dogList.length ? (
          <FlatList
            data={dogList}// Passing the data
            renderItem={({item, index}) => (
              <DogsListItemView
                title={item}
                onClickItem={() => {
                  Actions.DogsBreadsListView({breadName: item});
                }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <NoDataAlertView
            noDataText={alertMessages.noDogsMessage}></NoDataAlertView>
        )}
      </View>
    );
  }
}
