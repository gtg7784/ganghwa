import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
    };
  }

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

  static navigationOptions = {
    title: '프로필'
  };
  
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.tourinfo}>
          <View style={styles.tourwrap}>
            <Text style={styles.tourtext}>나만의 투어</Text>
            <Text style={styles.tourtext}>달성한 미션</Text>
          </View>
          <View>
            <Text style={styles.tourlight}>4</Text>
            <Text style={styles.tourtext}>
              <Text style={styles.tourlight}>12 </Text>
              / 40
            </Text>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.label}>이름</Text>
            <Text style={styles.span}>고태건</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>성별</Text>
            <Text style={styles.span}>남자</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>email</Text>
            <Text style={styles.span}>colada@launchrs.io</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>학교</Text>
            <Text style={styles.span}>선린인터넷고등학교</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>학년</Text>
            <Text style={styles.span}>1학년</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF3F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tourinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginVertical: 40,
  },
  tourwrap: {
    marginRight: 130
  },
  tourtext: {
    fontSize: 22,
    fontWeight: "300",
    color: "#44494D"
  },
  tourlight: {
    fontSize: 22,
    fontWeight: "400",
    color: "#02C0FB"
  },
  info: {
    width: "100%",
    height: 400,
    paddingHorizontal: 65,
    paddingVertical: 35,
    backgroundColor: "#fff"
  },
  label: {
    color: "#44494D",
    fontWeight: "300",
    marginBottom: 9
  },
  span: {
    color: "#44494D",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 20
  }
});
