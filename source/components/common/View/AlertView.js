import React from 'react'
import { Alert } from 'react-native'

import { app, buttonTitle } from '../../../constants/constants'

export default class AlertView extends React.Component {

    static showOkButtonAlert(subtitle, okButtonBlock) {

         Alert.alert(app.appName, subtitle,
            [
              {
                text: buttonTitle.ok, onPress: () => {
                  okButtonBlock()
                }
              }
            ]
          );
    }
}