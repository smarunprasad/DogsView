import React from 'react';
import { View, FlatList } from 'react-native';

//Common
import ActivityIndicatorView from '../common/View/ActivityIndicatorView';
import NoDataAlertView from '../common/View/NoDataAlertView';
//Constants
import { alertMessages } from '../../constants/constants';

//View
import DogsBreadsListItemView from '../screen-components/DogsBreadsListItemView';
//Styles
import { styles } from '../../styles/StyleSheet';

export default class DogsListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadList: [],
      updatedOn: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { actions, breadName, navigation } = this.props;
    actions.getBreadList(breadName);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //Asign the value to states from props
    const {
      authReducer: { isBreadListLoaded, breadList },
    } = nextProps;
    if (isBreadListLoaded) {
      return {
        loading: false,
        breadList: breadList,
      };
    }
    return null;
  }

  componentDidUpdate() {
    //Clear actions data 
    const {
      authReducer: { isBreadListLoaded },
      actions,
    } = this.props;
   // this.props.navigation.setParams({ 'title': this.props.titleSavedInState })

    if (isBreadListLoaded) {
      actions.clearAuthReducer();
    }
  }

  renderItems(item, index) {
    debugger;
    if (item.index <= 7) {// We can change the condition based on our need
      return <DogsBreadsListItemView url={item.item} />;
    }
  }

  render() {
    return (
      <View style={[
        styles.containerPadding8
        ]}>
        {/* Show Loading indicator during the Api call */}
        {this.state.loading ? (
          <ActivityIndicatorView />
        ) : 
        this.state.breadList && this.state.breadList.length ? (
          <FlatList
            data={this.state.breadList}// Passing the data
            renderItem={this.renderItems} 
            numColumns={2}//Setting the no of coloums based on our need
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
              <NoDataAlertView noDataText={alertMessages.noDogsMessage}></NoDataAlertView>
            )}
      </View>
    );
  }
}
