import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Image, TextInput ,ScrollView} from 'react-native';
import { Button, SearchBar, Text } from '@rneui/themed';
import { useState } from 'react';
import constants from './constants';
import styles from './styles';

export default function App() {
  const [clickCount, setClickCount] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.innerContainer}>
      
        {/*Click Test*/}
        
        <Text style={styles.textStyle}>{constants.clickTest.title}</Text>
        <Button title={constants.clickTest.buttonText}
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
            <Text style={styles.cardTextStyle}>{constants.clickTest.text}</Text>
            <Text style={styles.cardText}>{clickCount}</Text>
          </View>
        </View>

        
        {/*Search Test*/}
        
        <Text style={[styles.textStyle, styles.searchText]}>{constants.searchTest.title}</Text>
        <SearchBar
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
          inputContainerStyle={{ backgroundColor: '#E5E5E5', borderWidth: 0 }}
          containerStyle={styles.searchContainer}
        />
        <View style={styles.cardView}>
          <Image
            source={require('./assets/staticIcon.png')}
            style={styles.imageStyle}
          />
          <View style={styles.cardInerView}>
            <Text style={styles.cardTextStyle}>{constants.searchTest.text}</Text>
            <TextInput
              style={styles.cardText}
              value={search}
              placeholder="text"
              editable={false}
            />
          </View>
        </View>

        {/*Message Test*/}
        <Text style={[styles.textStyle, styles.searchText]}>{constants.messageText.title}</Text>
        <View style={styles.messageContainer}>
          <View style={styles.messageView}>
            <View style={styles.messageTextView}>
              <Text style={styles.messageHeading}>{constants.messageText.heading}</Text>
              <Text style={styles.messageText}>{constants.messageText.text}</Text>
            </View>
            <Image
              source={require('./assets/message.png')}
              style={styles.messageImageStyle}
            />
          </View>
          <View style={styles.messageBtnView}>
            <Button title="Not Now"
              disabledStyle={styles.messageNotBtn}
              disabledTitleStyle={styles.messageNotBtnText}
              disabled={true}
            />
            <Button title="See message"
              disabledStyle={styles.messageBtn}
              disabledTitleStyle={styles.messageBtnText}
              disabled={true}
            />
          </View>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
}

