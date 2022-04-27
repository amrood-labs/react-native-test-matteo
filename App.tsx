import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Image, TextInput, ScrollView, FlatList } from 'react-native';
import { Button, SearchBar, Text } from '@rneui/themed';
import { useEffect, useState } from 'react';
import constants from './constants';
import styles from './styles';
import Data, { dataType, itemType } from './data';
import { Calendar } from 'react-native-calendars';


export default function App() {
  const [clickCount, setClickCount] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [listItem, setListItem] = useState<dataType[]>(Data);
  const [selectedDate, setSelectedDate] = useState({})

  useEffect(() => {
    selectedDates()
  }, [])

  const selectedDates = () => {
    let selectDates: object = {};
    const { year, month, date, weekDay } = getCurrentDate();
    let currDate: number = +date - weekDay;

    for (let i = 0; i < 7; i++) {
      const newDate: number = currDate + i
      const obj: string = year + '-' + 0 + month + '-' + newDate;

      selectDates[obj] = i == 0 ? { startingDay: true, color: '#3975FF', textColor: 'white' } :
        i == 6 ?
          { endingDay: true, color: '#3975FF', textColor: 'white' } :
          { color: '#3975FF', textColor: 'white' }
    }
    setSelectedDate(selectDates)
  }

  const weekSelect = (type: string) => {
    var keys = Object.keys(selectedDate);
    const currFirstDateOfWeek = keys[0].split('-');
    const currLastDateOfWeek = keys[6].split('-');

    const { firstDayWeek, month, year} = getFirsDayOfWeek(currFirstDateOfWeek, currLastDateOfWeek, type)
    
    let selectDates: object = {};
    for (let i = 0; i < 7; i++) {
      const newDate: number = firstDayWeek + i;
      let monthEndCheck = newDate > lastDayOfMonth(+year, +month) ? newDate - lastDayOfMonth(+year, +month) : newDate
      let nextMonth = newDate > lastDayOfMonth(+year, +month) ? `0${+month + 1}` : month
      const obj: string = year + '-' + nextMonth + '-' + (monthEndCheck.toString().length == 1 ? `0${monthEndCheck
        }` : monthEndCheck);

      selectDates[obj] = i == 0 ? { startingDay: true, color: '#3975FF', textColor: 'white' } :
        i == 6 ?
          { endingDay: true, color: '#3975FF', textColor: 'white' } :
          { color: '#3975FF', textColor: 'white' }
    }
    setSelectedDate(selectDates)
  }
  
  const getFirsDayOfWeek = (currFirstDate: string[],currLastDate: string[], type: string) => {
    let firstDayWeek = type == 'pre' ? +currFirstDate[2] - 7 : +currLastDate[2] + 1; 
    firstDayWeek = firstDayWeek > lastDayOfMonth(+currFirstDate[0], +currFirstDate[1]) ? 1 : firstDayWeek;
    let month = firstDayWeek == 1 ? `0${+currFirstDate[1] + 1}` : currFirstDate[1];
    month = firstDayWeek < 0 ? `0${+currFirstDate[1] - 1}` : month;
    firstDayWeek = firstDayWeek < 0 ? lastDayOfMonth(+currFirstDate[0], +currFirstDate[1] - 1) + firstDayWeek : firstDayWeek;
    
    const year = currFirstDate[0];
    return { firstDayWeek, month, year}
  }

  const lastDayOfMonth =  (y:number, m: number)=> {
    return new Date(y, m , 0).getDate();
  }
  
  
  const getCurrentDate = () => {
    var date: number = new Date().getDate();
    var month: number = new Date().getMonth() + 1;
    var year: number = new Date().getFullYear();
    const day: Date = new Date();
    let weekDay: number = day.getDay();
    //return year + '-' + month + '-' + date;
    return { year, month, date, weekDay }
  }


  const renderItems = (item: dataType) => {
    return (
      <>
        <Text style={styles.listTitle}>{item?.item?.title}</Text>
        <FlatList
          data={item?.item?.item}
          renderItem={_renderItem}
          keyExtractor={item => item.title}
        />
      </>
    )
  };

  const _renderItem = (item: itemType) => {
    return (
      <>
        <View style={styles.listItem}>
          <Image
            source={require('./assets/staticIcon.png')}
            style={styles.imageStyle}
          />
          <View style={styles.cardInerView}>
            <View style={styles.row}>
              <Text style={styles.cardTextStyle}>{item?.item?.title}</Text>
              <Text>
                <Text style={styles.cardTextStyle}>{item?.item?.weight}</Text>
                <Text style={[styles.cardTextStyle, styles.kgColor]}> {item?.item?.unit}</Text>
              </Text>
            </View>
            <TextInput
              style={styles.cardText}
              value={item?.item?.type}
              placeholder="text"
              editable={false}
            />
          </View>
        </View>
        <View style={styles.sepraterLiner} />
      </>
    )
  }

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

        {/*Calender Test*/}
        <Text style={[styles.textStyle, styles.searchText]}>{constants.calenderTest.title}</Text>
        <View style={styles.listView}>
          <Calendar
            markingType={'period'}
            markedDates={selectedDate}
            style={styles.calender}
            theme={{
              arrowColor: 'black', backgroundColor: '#E5E5E5',
              calendarBackground: '#E5E5E5', monthTextColor: '#4A4A4A', dayTextColor: '#4A4A4A'
            }}
          />
        </View>

        <View style={styles.calenderBtnView}>
          <View style={styles.calenderBtn}>
            <Button title={constants.calenderTest.previous}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.btnTitle}
              onPress={() => weekSelect('pre')}
            />
          </View>
          <View style={styles.calenderBtn}>
            <Button title={constants.calenderTest.next}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.btnTitle}
              onPress={() => weekSelect('next')}
            />
          </View>
        </View>

        {/*List Test*/}
        <Text style={[styles.textStyle, styles.searchText]}>{constants.listTest.titile}</Text>
        <View style={styles.listView}>
          <FlatList
            data={listItem}
            renderItem={renderItems}
            keyExtractor={item => item.title}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

