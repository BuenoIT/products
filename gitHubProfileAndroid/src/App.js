import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const urlGitHub = 'https://github.com/BuenoIT';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/101655079?v=4';

const App = () => {
  const handlePressGoToGitHub = async () => {
    const response = await Linking.canOpenURL(urlGitHub);
    if (response) {
      await Linking.openURL(urlGitHub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Guilherme in the street com background street view"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Name: Guilherme Bueno"
          style={[style.defaultText, style.name]}>
          Guilherme Bueno
        </Text>
        <Text
          accessibilityLabel="Nickname: BuenoIT"
          style={[style.defaultText, style.nickname]}>
          BuenoIT
        </Text>
        <Text
          accessibilityLabel="Description: Student of computer programming"
          style={[style.defaultText, style.description]}>
          Student of computer programming looking for worldwide challenges.
        </Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, // Expand to full view
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGitHub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    color: colorDarkFontGitHub,
    fontSize: 18,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
