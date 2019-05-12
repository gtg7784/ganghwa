import React from 'react';
import { SafeAreaView, View,  StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box'


export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        id: '',
        gender: '',
        school: '',
        schoolname: '',
        isChecked1: false,
        isChecked2: false,
        isChecked3: false,
        isChecked4: false,
        isChecked5: false
    };
  }

  onChangeText(){

  }

  static navigationOptions = {
    title: null
  };
  
  render() {
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.safecontainer}>
          <Text style={styles.h1}>환영합니다</Text>
          <Text style={styles.label}>이름</Text>
          <TextInput
              style={styles.textinput}
              onChangeText={(text) => this.setState({ id: text })}
              value={this.state.id}
              placeholder="이름을 기입해주세요"
          />
          <Text style={styles.label}>성별</Text>
          <View style={styles.input}>
            <CheckBox
              size={24}
              value={this.state.gender}
              onClick={() => this.setState({ 
                gender: '남자',
                isChecked1: !this.state.isChecked1 })}
              isChecked={this.state.isChecked1}
            />
            <Text style={styles.checkboxlabel}>남성</Text>
            <CheckBox
              size={24}
              value={this.state.gender}
              onClick={() => this.setState({ 
                gender: '여자',
                isChecked2: !this.state.isChecked2 })}
              isChecked={this.state.isChecked2}
            />
            <Text style={styles.checkboxlabel}>여성</Text>
          </View>

          <Text style={styles.label}>학교</Text>
          <View style={styles.input}>
            <CheckBox
              size={24}
              value={this.state.gender}
              onClick={() => this.setState({ 
                school: '초등학생',
                isChecked3: !this.state.isChecked3 })}
              isChecked={this.state.isChecked3}
            />
            <Text style={styles.checkboxlabel}>초</Text>
            <CheckBox
              size={24}
              value={this.state.gender}
              onClick={() => this.setState({
                school: '중학생',
                isChecked4: !this.state.isChecked4 })}
              isChecked={this.state.isChecked4}
            />
            <Text style={styles.checkboxlabel}>중</Text>
            <CheckBox
              size={24}
              value={this.state.gender}
              onClick={() => this.setState({
                school: '고등학생',
                isChecked5: !this.state.isChecked5 })}
              isChecked={this.state.isChecked5}
            />
            <Text style={styles.checkboxlabel}>고</Text>
          </View>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ schoolname: text})}
            value={this.state.schoolname}
            placeholder="학교 이름을 기입해주세요"
          />
          <Text style={styles.text}>
            본 개인정보는 수집되지 않으며, 탐방 보고서 작성을 위해서만 사용됩니다.
          </Text>
        </SafeAreaView>
        <TouchableOpacity
          style={styles.button}
          underlaycolor='#EB4E3D'
          onPress={() => this.props.navigation.navigate('Main')}>
            <Text style={{color:"#fff"}}>
              가입하기
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  safecontainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginTop: 60,
  },
  h1: {
    color: '#44494D',
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 30
  },
  label: {
    color: '#44494D',
    fontSize: 15,
    fontWeight: "600",
    marginTop: 50,
  },
  checkboxlabel:{
    color: '#44494D',
    fontSize: 15,
    fontWeight: "600",
    alignItems: 'center',
    marginRight: 30,
    marginTop: 3,
  },
  textinput: {
    backgroundColor: '#FAFAFB',
    width: 328,
    height: 60,
    paddingLeft: 16,
    marginTop: 20
  },
  input: {
    marginTop: 10,
    flexDirection: 'row',
    height: 20,
  },
  Checkbox: {
    width: 20,
    height: 20,
    borderColor: '#EE7B5C',
    borderRadius: 10,
  },
  button: {
    width: 1000,
    flexDirection: 'row',
    backgroundColor: '#EB4E3D',
    justifyContent: 'space-around',
    height: 60,
    alignItems: 'center'
  },
  text: {
    fontSize: 13,
    color: '#929BA3',
    width: 280,
    marginTop: 40
  }
});
