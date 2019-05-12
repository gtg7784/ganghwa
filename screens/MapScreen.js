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
      markers: [
        { 
          title: '연산군 유배지',
          description: '조선시대 왕의 장자인 왕세자와 같이 정상적인 법통이 아닌 다른 방법이나 사정으로 인해 임금으로 추대된 사람이, 왕위에 오르기 전에 살던 집을 잠저(潛邸)라고 하였는데 이는 주역에서 유래된 말이다. 용흥궁(龍興宮)은 강화도령으로 불렸던 조선의 25대 왕 철종(哲宗)이 강화도에 은거하며 살았던 집을 후일 그가 왕위에 오르고 난 이후에 보수하여 단장하고 그 이름을 궁이라고 고쳐부른 이름이다. 조선시대의 대표적인 잠저로는 태조의 함흥 본궁과 개성 경덕궁, 인조의 저경궁과 어의궁, 영조의 창의궁 등이 있다. 대개 잠저는 왕위에 오른 뒤에 다시 짓는다. 용흥궁도 원래는 보잘것 없는 초가였으나, 1853년 철종이 보위에 오른지 4년 만에 강화 유수 정기세(鄭基世)가 지금과 같은 집을 짓고 용흥궁이라 부르게 되었다. 그뒤 1903년(광무 7)에 청안군(淸安君) 이재순(李載純)이 중건하였다. 좁은 고샅 안에 대문을 세우고 행랑채를 둔 이 궁의 건물은 창덕궁의 연경당(演慶堂), 낙선재(樂善齋)와 같이 살림집의 유형에 따라 만들어졌다.',
          coordinate: {
            latitude: 37.791337, 
            longitude: 126.2656923
          }
        },
        { 
          title: '교동대룡시장', 
          description: '교동대룡시장',
          coordinate: {
            latitude: 37.7821128, 
            longitude: 126.2773714
          }
        },
        { 
          title: '화개사',
          description: '화개사',
          coordinate: {
            latitude: 37.7763345, 
            longitude: 126.290731
          }
        },
        { 
          title: '교동향교',
          description: '교동향교',
          coordinate: {
            latitude: 37.7736127,
             longitude: 126.2950362
          }
        },
        {
          title: '교동읍성',
          description: '교동읍성',
          coordinate: {
            latitude: 37.7687848, 
            longitude: 126.2935169
         }
        },
        {
          title: '석모도미네랄온천',
          description: '석모도미네랄온천',
          coordinate: {
            latitude: 37.6853939, 
            longitude: 126.3104394
          }
        },
        { 
          title: '보문사',
          description: '보문사',
          coordinate: {
            latitude: 37.6874402,
            longitude: 126.3186842
          }
        },
        { 
          title: '강화평화전망대',
          description: '강화평화전망대',
          coordinate: {
            latitude: 37.8264419,
            longitude: 126.4309658
          }
        },
        { 
          title: '화문석문화관',
          description: '화문석문화관',
          coordinate: {
            latitude: 37.7951374,
            longitude: 126.4531589
          }
        },
        { 
          title: '자연사박물관',
          description: '자연사박물관',
          coordinate: {
            latitude: 37.7745226,
            longitude: 126.4326553
          }
        },
        { 
          title: '부근리지석묘',
          description: '부근리지석묘',
          coordinate: {
            latitude: 37.7736581,
            longitude: 126.4351194
          }
        },
        { 
          title: '연미정',
          description: '연미정',
          coordinate: {
            latitude: 37.7745895,
            longitude: 126.3998246
          }
        },
        { 
          title: '은수물 약수터',
          description: '은수물 약수터',
          coordinate: {
            latitude: 37.7543912, 
            longitude: 126.4751968
          }
        },
        { 
          title: '고려궁지',
          description: '고려궁지',
          coordinate: {
            latitude: 37.7517604,
            longitude: 126.483124
          }
        },
        { 
          title: '천주교강화성당',
          description: '천주교강화성당',
          coordinate: {
            latitude: 37.75023, 
            longitude: 126.482324
          }
        },
      ]
    }
  }

  static navigationOptions = {
    title: '지도',
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.mapview}
          initialRegion={this.state.region}
         >
         {this.state.markers.map((marker, i) => {
            return (
              <MapView.Marker 
                coordinate={marker.coordinate} 
                key={i}
                image={MarkerImg}
                onPress={() => this.props.navigation.navigate('Info', {
                  title: marker.title,
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
