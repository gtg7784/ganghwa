import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Image, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class MissionDetailScreen extends React.Component {

  static navigationOptions = {
    title: '지도'
  };

  onPress = () => this.props.navigation.navigate('Main')

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title');
    const description = navigation.getParam('description');

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.textwrap}>
            <Text style={styles.headerText}>지도</Text>
          </View>
          <TouchableHighlight
            style={styles.cancelWrap}
            onPress={this.onPress}>
            <Image
              style={styles.cancel}
              source={require('../assets/images/ic_cancel.png')} />
          </TouchableHighlight>
        </View>
        <ScrollView>
          <Text style={styles.h1}>{title}</Text>
          <Text style={styles.content}>{description}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ECF3F6',
  },
  img: {
    width: "100%",
    minHeight: 200
  },
  cancelWrap: {
    position: 'absolute',
    right: 10
  },
  cancel: {
    width: 34,
    height: 34,
  },
  header: {
    paddingVertical: 14.5,
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textwrap: {
    marginRight: 10
  },
  headerText: {
    fontSize: 17,
    marginLeft: 10,
    color: '#44494D',
    fontWeight: '400'
  },
  h1: {
    fontSize: 22,
    color: '#44494D',
    marginLeft: 32,
    marginTop: 82,
  },
  content: {
    fontSize: 15,
    color: '#44494D',
    marginTop: 33,
    marginHorizontal: 34
  },
  button: {
    width: "100%",
    flexDirection: 'row',
    backgroundColor: '#EB4E3D',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    position: 'absolute',
    bottom:0
  },
});
