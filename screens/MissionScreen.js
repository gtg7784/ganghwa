import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';

export default class MissionScreen extends React.Component {

  static navigationOptions = {
    title: '지도'
  };

  onPress = () => this.props.navigation.navigate('Main')

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.textwrap}>
            <Text style={styles.headerText}>미션수행</Text>
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
          <View style={styles.title}>
            <Image
              style={styles.img}
              source={require('../assets/images/info.png')} />
            
            <Text style={styles.h1}>{navigation.getParam('name')}</Text>
          </View>

          <View>
            <Text style={styles.h2}>Mission1</Text>
            <Text style={styles.question}>{navigation.getParam('mission1')}</Text>
          </View>
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
    backgroundColor: '#fff',
  },
  img: {
    width: 86,
    height: 86,
    margin: 20
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
  title: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  h1: {
    fontSize: 22,
    color: '#44494D',
    fontWeight: '500'
  },
  h2: {
    backgroundColor: "#FF5026",
    fontSize: 17,
    paddingHorizontal: 33,
    paddingTop: 20,
    width: 144,
    color: "#fff",
    fontWeight: "600"
  },
  question: {
    marginLeft: 33,
    marginTop: 26,
    color: "#44494D",
    fontWeight: "500",
    
  }
});
