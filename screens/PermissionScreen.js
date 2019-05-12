import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import Permissions from 'react-native-permissions'
 
export default class SettingsScreen extends React.Component {
  // Check the status of a single permission
  // componentDidMount() {
  //   Permissions.checkMultiple(['location', 'camera', 'photo']).then(response => {
  //     // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
  //     this.setState({
  //       locationPermission: response.location,
  //       cameraPermission: response.camera,
  //       photoPermission: response.photo,
  //     })
  //   })
  // }
 
  // // Request permission to access photos
  // _requestPermission = () => {
  //   Permissions.request("location")
  //       .then(locationResponse => {
  //           console.log("location permission: " + locationResponse);
  //           return (Permissions.request("camera"));
  //       }).then(cameraResponse => {
  //           console.log("camera permission: " + cameraResponse);
  //           return (Permissions.request("photo"));
  //       }).then(photoResponse => {
  //           console.log("photo permission: " + photoResponse);
  //       });
  //   }
 
  // // Check the status of multiple permissions
  // _checkPermissions = () => {
  //   Permissions.checkMultiple(['location', 'camera', 'photo']).then(response => {
  //     //response is an object mapping type to permission
  //     this.setState({
  //       locationPermission: response.location,
  //       cameraPermission: response.camera,
  //       photoPermission: response.photo,
  //     })
  //   })
  // }
 
  // // This is a common pattern when asking for permissions.
  // // iOS only gives you once chance to show the permission dialog,
  // // after which the user needs to manually enable them from settings.
  // // The idea here is to explain why we need access and determine if
  // // the user will say no, so that we don't blow our one chance.
  // // If the user already denied access, we can ask them to enable it from settings.
  // _alertForPhotosPermission() {
  //   Alert.alert(
  //     'Can we access your photos?',
  //     'We need access so you can set your profile pic!',
  //     [
  //       {
  //         text: 'No way',
  //         onPress: () => console.log('Permission denied'),
  //         style: 'cancel',
  //       },
  //       this.state.photoPermission == 'undetermined'
  //         ? { text: 'OK', onPress: this._requestPermission }
  //         : { text: 'Open Settings', onPress: Permissions.openSettings },
  //     ],
  //   )
  // }

  // _alertForLocationPermission() {
  //   Alert.alert(
  //     'Can we access your Location?',
  //     'We need access so we can check your location!',
  //     [
  //       {
  //         text: 'No way',
  //         onPress: () => console.log('Permission denied'),
  //         style: 'cancel',
  //       },
  //       this.state.locationPermission == 'undetermined'
  //         ? { text: 'OK', onPress: this._requestPermission }
  //         : { text: 'Open Settings', onPress: Permissions.openSettings },
  //     ],
  //   )
  // }

  // _alertForCameraPermission() {
  //   Alert.alert(
  //     'Can we access your Camera?',
  //     'We need access so you can take a pic for report!',
  //     [
  //       {
  //         text: 'No way',
  //         onPress: () => console.log('Permission denied'),
  //         style: 'cancel',
  //       },
  //       this.state.cameraPermission == 'undetermined'
  //         ? { text: 'OK', onPress: this._requestPermission }
  //         : { text: 'Open Settings', onPress: Permissions.openSettings },
  //     ],
  //   )
  // }

  static navigationOptions = {
    title: null
  };
  
  render() {
    return(
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')} />
        <Text style={styles.plz}>
          강화 Math Tour의 서비스 이용을 위해서는 {"\n"}
          아래권한이 사용되오니 허용해 주시기 바랍니다.
        </Text>
        <Text style={styles.h1}>필수적 접근 권한</Text>
        
        <View style={styles.row}>
          <View style={styles.imgWrap}>
            <Image
              style={{"width": 32, "height": 32}}
              source={require('../assets/images/ic_file.png')} />
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.h2}>저장공간</Text>
            <Text style={styles.span}>주변 유적지 탐색시 사용</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.imgWrap}>
            <Image
              style={{"width": 32, "height": 32}}
              source={require('../assets/images/ic_location.png')} />
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.h2}>위치</Text>
            <Text style={styles.span}>주변 유적지 탐색시 사용</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.imgWrap}>
            <Image
              style={{"width": 32, "height": 32}}
              source={require('../assets/images/ic_camera.png')} />
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.h2}>카메라</Text>
            <Text style={styles.span}>주변 유적지 탐색시 사용</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.bottomh2}>접근권한 변경방법</Text>
          <Text style={styles.span}>설정 > 강화앱에서 각 권한별 변경이 가능합니다.</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          underlaycolor='#EB4E3D'
          onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{color:"#fff"}}>
              내용 확인했어요
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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
  logo: {
    marginTop: 52,
    marginLeft: 26
  },
  plz: {
    marginLeft: 26,
    marginTop: 14,
    textAlign: "left",
    fontWeight: "300",
    color: "#44494D"
  },
  h1: {
    marginLeft: 26,
    marginTop: 45,
    color: '#44494D',
    fontSize: 22,
    fontWeight: "600",
  },
  row: {
    marginLeft: 26,
    marginTop: 22,
    marginBottom: 22,
    flexDirection: "row",
    alignItems: "center",
  },
  imgWrap: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#929BA3",
    borderRadius: 25
  },
  textWrap: {
    marginLeft: 20
  },
  h2: {
    fontWeight: "500",
    color: "#44494D",
    fontSize: 15,
  },
  bottomh2: {
    fontWeight: "500",
    color: "#929BA3",
    fontSize: 15,
    marginBottom: 7
  },
  span: {
    fontSize: 13,
    color: "#929BA3",
    fontWeight: "300"
  },
  bottom: {
    marginLeft: 26,
  }
});