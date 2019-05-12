import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import geolib from 'geolib';

import info from '../assets/json/info.json'

export default class PlanScreen extends React.Component {
  static navigationOptions = {
    title: '투어'
  }

  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: JSON.stringify(position.coords.latitude),
          longitude: JSON.stringify(position.coords.longitude),
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <SafeAreaView style={styles.container} showsButtons={true}>
        <View style={styles.header}>
          <Text style={styles.h2}>여행지 주변 200m 이내에서만</Text>
          <Text style={styles.h1}>미션을 수행할 수 있어요</Text>
        </View>
        <ScrollView style={styles.body}>
          { info.map((content, key) => {
            return(
              <View style={styles.list} key={key}>
                <View style={styles.listitem}>
                  <Text style={styles.listname}>{content.name}</Text>
                  <Text style={styles.listdis}>
                    { geolib.getDistance(
                        { latitude: content.latitude, longitude: content.longitude },
                        { latitude: this.state.latitude, longitude: this.state.longitude }
                      )}m
                    </Text>
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate('Mission', {
                    name: content.name,
                    mission: content.mission
                  })} >
                  <Text style={styles.btntext}>미션수행</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF3F6'
  },
  header: {
    flex: 0.2,
    height: 100,
    width: "100%",
    flexDirection: 'column',
    backgroundColor: '#fff',
    color: '#44494D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontSize: 22,
    fontWeight: '400',
    color: '#44494D',
    paddingRight: 60
  }, 
  h2: {
    fontSize: 22,
    fontWeight: '600',
    color: '#44494D'
  },
  body: {
    width: "100%",
    flexDirection: 'column',
  },
  listname: {
    fontSize: 17,
    fontWeight: '400',
  },
  listdis: {
    fontSize: 15,
    fontWeight: '300',
    marginTop: 5
  },
  btn: {
    width: 100,
    height: 30,
    alignItems: 'center',
    backgroundColor: '#FF5026',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btntext: {
    color: '#fff',
  },
  list: {
    width: "100%",
    height: 80,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: .5,
    borderColor: '#D1D7DE'
  }
});
