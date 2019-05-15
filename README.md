# React Native Action Sheet
A simple action sheet for iOS and Android. Renders Native ActionSheetIOS Component in iOS and custom ActionSheet lookalike component in Android.

## Installation
`npm i --save rn-action-sheet`

## Usage

1. Minimal example
```
<ActionSheet 
  options={{
    options: ['Cancel', 'Camera', 'Gallery'],
    destructiveButtonIndex: 1,
    title: "Choose photo from?",
    message: "Please select where you want the photo to be picked from",
    tintColor: "#000000"
  }}
  onPressAction={(buttonIndex) => {
    if (buttonIndex === 1) {
      // Do something if you tap on 'Camera'
    } else if (buttonIndex === 2) {
      // Do something if you tap on 'Gallery'
    }
   }
/>
```

2. Full Example 
```
import React from 'react';
import {
  View, Button
} from 'react-native;
import ActionSheet from 'rn-action-sheet';

const options = {
  options: ['Cancel', 'Camera', 'Gallery'],
  destructiveButtonIndex: 1,
  title: "Choose photo from?",
  message: "Please select where you want the photo to be picked from",
  tintColor: "#000000"
}

export default class MyExample extends React.Component {
  
  render() {
    return(
      <View style={styles.container}>
        <Button title="Upload Photo" onPress={() => this.actionSheetRef.show()} />
        <ActionSheet
          ref={(ref) => this.actionSheetRef = ref}
          options={options}
          onPressAction={this.onPressAction}
        />
      </View>
    )
  }
  
  onPressAction = (buttonIndex) => {
    if (buttonIndex === 1) {
      // Do something if you tap on 'Camera'
    } else if (buttonIndex === 2) {
      // Do something if you tap on 'Gallery'
    }
  }
  
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}
```

## Props
| Name | Description | Type |
| --- | --- | --- |
| options | Takes an object which has all the properties for the action sheet such as options array | Object |
| onPressAction | Callback function to trigger press on an option. Returns the index of the option pressed. | Function |

### Options 
| Name | Description | Type | Example | 
| --- | --- | --- | --- |
| options | An array of options to show in the action sheet. Note that the first option (at index 0) will always be the cancel button. | Array of Strings | ['Cancel', 'Camera', 'Gallery'] |
| destructiveButtonIndex | If you want to show a button in red color, pass the index of that option to this. | Integer | 2 |
| title | Provide a title to the action sheet. Renders on top. | String | "Choose an option" |
| message | Provide a descriptive message below the title. | String | "Please choose one of the following options" |
| tintColor | Color for the options text | String | "#000000" |

Note that `cancelButtonIndex` is default to 0 always. So you must put that option at 0th index in the `options` array.

### Functions
| Name | Description | Example | 
| --- | --- | --- |
| show() | Create a reference of the ActionSheet component and call this function to present it. | `this._actionSheetRef.show()` |

Hope it helps!

      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
