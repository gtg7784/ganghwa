import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const list = [
  {
    title: "재밌는 투어",
    date: "2019.04.20"
  }, 
  {
    title: "힘든 투어",
    date: "2019.04.20"
  }
]
export default class ArchiveScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        img: ["oeub", "eunsu", "agricultural", "war", "gabgojdondae", "nhistory", "history",
        "eubseong", "daelyong", "yubaeji", "gyodonghyanggyo", "hwagaesa", "hwamunseog", "hamheo", 
        "chojijin", "chamsungdan", "jungsusa", "jeondeungsa", "yeonmijung", "mineral", "bomunsa", 
        "foreshore", "pyeonghwa", "gwangseongbo", "stonetomb", "cheongjugyo_seongdang", "ganghwa_hyanggyo",
        "golyeo_gungji", "jungangsijang", "nammun", "pungmulsijang", "samrangsung", "seomun", "seonggonghoe",
        "simdo", "sochang", "terminal", "yongheunggun" ]
      };
  }

  static navigationOptions = {
    title: '보관함'
  };


  render() {
    return (
      <View style={styles.container}>
        {list.map(((item, key) => {
          return (
            <TouchableOpacity style={styles.row} key={key}
            onPress={() => this.props.navigation.navigate('Report', {
              name: 'ㅁㄴㅇㄹ',
              mission: 'ㅁㄴㅇㄹ'
            })} >
              <View style={styles.imgWrap}>
                <Image
                  style={{"width": 45, "height": 53}}
                  source={require('../assets/images/ic_tour.png')} />
              </View>
              
              <View style={styles.textWrap}>
                <Text style={styles.h1}>{item.title}</Text>
                <Text style={styles.span}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )
        }))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  row: {
    flexDirection: "row",
    backgroundColor: '#fff',
    width: "100%",
    height: 120,
    alignItems: "center"
  },
  imgWrap: {
    marginLeft: 35,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    color: '#44494D',
    fontSize: 22,
    fontWeight: "600",
  },
  span: {
    marginTop: 8,
    fontSize: 13,
    color: "#929BA3",
    fontWeight: "300"
  },
  row: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    borderBottomWidth: .5,
    borderColor: '#ECF3F6',
    alignItems: 'center'
  },
  textWrap: {
    marginLeft: 20,
  }
});
