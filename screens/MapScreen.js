import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { MapView, Marker } from 'expo';
import list from '../assets/json/info.json'
import MarkerImg from '../assets/images/marker.png'

export default class MapScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      region: {
        latitude: 37.716847,
        longitude: 126.373,
        latitudeDelta: 0.35,
        longitudeDelta: 0.35,
      },
      coordinate: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  static navigationOptions = {
    title: '지도',
  };


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.mapview}
          initialRegion={this.state.region}
         >
          {list.map((marker, i) => {

            const coordinate = {
              latitude: marker.latitude,
              longitude: marker.longitude
            }
          
            return (
              <MapView.Marker 
                coordinate={coordinate} 
                key={i}
                image={MarkerImg}
                onPress={() => this.props.navigation.navigate('Info', {
                  title: marker.name,
                  description: marker.description
                })} />
            );
          })}
         </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapview: {
    flex: 1,
  }
});
