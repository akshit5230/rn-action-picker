import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  FlatList
} from "react-native";
import styles from "./styles";

const SCREEN_HEIGHT = Dimensions.get('window').height

export default class BottomSheetAndroid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      minTop: SCREEN_HEIGHT,
      maxTop: 140,
      animation: new Animated.Value(SCREEN_HEIGHT)
    }
  }

  render() {
    let { title, message, tintColor = '#000000', options } = this.props.options
    return (
      <Modal
        visible={this.state.isVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => this.dismiss()}
      >
        <View style={styles.modalview}>
          <Animated.View style={{
            position: 'absolute',
            top: this.state.animation,
            width: Dimensions.get('window').width,
            backgroundColor: '#FFFFFF'
          }} onLayout={(evt) => {
            console.log('layou tis', evt.nativeEvent)
            this.setState({
              maxTop: SCREEN_HEIGHT - parseInt(evt.nativeEvent.layout.height) - 26
            })
          }}>
            <View style={{
              padding: 10
            }}>
              <Text numberOfLines={1} style={{
                padding: 10,
                textAlign: 'center'
              }}>{title}</Text>
              <Text style={{
                textAlign: 'center'
              }}>{message}</Text>
            </View>
            {this.renderList()}
            <TouchableOpacity style={[styles.modallistitemview, {borderTopWidth: 1, borderColor: "#999999"}]} activeOpacity={1} onPress={() => this.props.onPressAction(0)}>
              <Text style={[styles.recommendtext, {
                color: tintColor
              }]}>{options[0]}</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal >
    )
  }

  renderList() {
    let { options, tintColor = '#000000', destructiveButtonIndex = -1 } = this.props.options
    return (
      <FlatList
        data={options}
        renderItem={({ item, index }) => (
          index == 0 ? null :
          <TouchableOpacity style={[styles.modallistitemview]} activeOpacity={1} onPress={() => this.props.onPressAction(index)}>
            <Text style={[styles.recommendtext, {
              color: destructiveButtonIndex == index ? 'red' : tintColor
            }]}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
    )
  }

  show() {
    this.setState({
      isVisible: true
    }, () => {
      setTimeout(function () {
        Animated.timing(
          this.state.animation,
          {
            toValue: this.state.maxTop,
            duration: 200,
          }
        ).start();
      }.bind(this), 200);
    });

  }

  dismiss() {
    Animated.timing(
      this.state.animation,
      {
        toValue: this.state.minTop,
        duration: 200,
      }
    ).start();

    setTimeout(function () {
      this.setState({
        isVisible: false
      });
    }.bind(this), 200)
  }

};
