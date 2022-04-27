import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Image, TextInput } from 'react-native';
import { Button, ButtonGroup, SearchBar, Text } from '@rneui/themed';
import { useState } from 'react';

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.innerContainer}>

        <Text style={styles.textStyle}>Click test</Text>
        <Button title="Click me"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.btnTitle}
          onPress={() => setClickCount(clickCount + 1)}
        />

        <View style={styles.cardView}>
          <Image
            source={require('./assets/staticIcon.png')}
            style={styles.imageStyle}
          />
          <View style={styles.cardInerView}>
            <Text style={styles.cardTextStyle}>Number of button clicks</Text>
            <Text style={styles.cardText}>{clickCount}</Text>
          </View>
        </View>

        <Text style={[styles.textStyle, styles.searchText]}>Search test</Text>
        <SearchBar
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
          inputContainerStyle={{ backgroundColor: '#E5E5E5', borderWidth: 0 }}
          containerStyle={{ alignItems: 'center', borderRadius: 5, borderWidth: 1, margin: 0, marginTop: 10, padding: 0, borderColor: '#CDCDCD', borderTopColor: '#CDCDCD', borderBottomColor: '#CDCDCD' }}
        />

        <View style={styles.cardView}>
          <Image
            source={require('./assets/staticIcon.png')}
            style={styles.imageStyle}
          />
          <View style={styles.cardInerView}>
            <Text style={styles.cardTextStyle}>Searched text</Text>
            <TextInput
              style={styles.cardText}
              value={search}
              placeholder="text"
              editable={false}
            />
          </View>
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    letterSpacing: 0.035,
  },
  buttonStyle: {
    backgroundColor: '#FFA978',
    borderRadius: 8,
    marginTop: 16,
  },
  btnTitle: {
    color: 'white',
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '600',
    letterSpacing: 0.005
  },
  innerContainer: {
    margin: 16
  },
  cardView: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: .5,
    marginTop: 16,
    padding: 10,
    borderColor: '#CDCDCD',
    flexDirection: 'row'
  },
  cardInerView: { marginLeft: 7 },
  cardTextStyle: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
    letterSpacing: 0.025,
    color: '#4A4A4A'
  },
  cardText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
    letterSpacing: 0.025,
    color: '#C2C2C2'
  },
  imageStyle: {
    tintColor: '#C2C2C290',
    height: 32,
    width: 32
  },
  searchText: {
    marginTop: 48
  }
});
