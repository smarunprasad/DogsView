import React from 'react';
import { ScrollView, Text } from 'react-native';

//Common
import ActivityIndicatorView from '../common/View/ActivityIndicatorView';
import NoDataAlertView from '../common/View/NoDataAlertView';
//Constants
import { alertMessages } from '../../constants/constants';

//View
import DogsBreedsItemView from '../screen-components/DogsBreadsItemsView';
//Styles
import { styles, customFontFamily } from '../../styles/StyleSheet';

export default class DogsBreedsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breedList: [],
            updatedOn: '',
            loading: true,
        };
    }

    componentDidMount() {
        const { actions, breedName, navigation } = this.props;
        actions.getBreedList(breedName);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        //Asign the value to states from props
        const {
            authReducer: { isBreedListLoaded, breedList },
        } = nextProps;
        if (isBreedListLoaded) {
            return {
                loading: false,
                breedList: breedList,
            };
        }
        return null;
    }

    componentDidUpdate() {
        //Clear actions data 
        const {
            authReducer: { isBreedListLoaded },
            actions,
        } = this.props;

        if (isBreedListLoaded) {
            actions.clearAuthReducer();
        }
    }

    render() {
        return (
            <ScrollView style={[styles.containerPadding8]}>
                {/* Show Breed Title */}
                <Text style={[
                      styles.breedTitleTextPadding,
                      customFontFamily.medium.medium,
                    ]}>{this.props.breedName}</Text>
                {/* Show Loading indicator during the Api call */}
                {
                    this.state.loading ?
                        (
                            <ActivityIndicatorView />
                        ) :
                        this.state.breedList && this.state.breedList.length ?
                            (
                                <DogsBreedsItemView firstImageurl={this.state.breedList[0]} secondImageurl={this.state.breedList[1]} />
                            ) :
                            (
                                <NoDataAlertView noDataText={alertMessages.noDogsMessage}></NoDataAlertView>
                            )
                }
            </ScrollView>
        );
    }
}
