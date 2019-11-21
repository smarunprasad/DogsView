import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles, colors, customFontFamily } from '../../styles/StyleSheet';

export default class DogsListItemView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onClickItem, isForReport } = this.props;
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 0.5,
          borderColor: colors.seperator,
          paddingLeft: isForReport ? 15 : 0,
          backgroundColor: 'transparent'
        }}
        activeOpacity={1}
        onPress={onClickItem}>
        <View>
          <Text
            style={[
              styles.setting,
              customFontFamily.regular.regular,
              { color: colors.black },
            ]}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
