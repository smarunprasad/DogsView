import React from 'react';
import {Dimensions, Image, View} from 'react-native';

export default class DogsBreadsListItemView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {url} = this.props;
    const dimensions = Dimensions.get('window');

    return (
      <View>
        <Image
          style={{
            width: dimensions.width/2 - 12, 
            height: dimensions.width/2 - 12, 
            margin: 3,
            borderRadius: 8

          }}
          source={{uri: url}}
        />
      </View>
    );
  }
}
