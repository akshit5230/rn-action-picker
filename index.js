import React from "react";
import {
  View,
  Platform,
  ActionSheetIOS
} from 'react-native';
import BottomSheetAndroid from './BottomSheetAndroid/BottomSheetAndroid';

class ActionSheet extends React.Component {
  render() {
    return (
      <View>
        <BottomSheetAndroid
          ref={(ref) => this._bottomSheetAndroidRef = ref}
          options={this.props.options}
          onPressAction={(index) => {
            this._bottomSheetAndroidRef.dismiss()
            setTimeout(() => {
              this.props.onPressAction(index)
            }, 200)
          }}
        />
      </View>
    )
  }

  show() {
    if (Platform.OS === 'android') {
      this._bottomSheetAndroidRef.show()
    } else {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          ...this.props.options,
          cancelButtonIndex: 0
        },
        (index) => this.props.onPressAction(index)
      )
    }
  }
}

module.exports = ActionSheet;