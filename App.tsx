/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import Swipeable from 'react-native-gesture-handler/Swipeable';

import React, { FC } from 'react';
import {
  Alert,
  FlatList,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';




import { Data, data } from "./data"
import { Card } from './components/Card';
import { RightSwipeActions, LeftSwipeActions } from './components/SwipeActions';



LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);



const App = () => {
  type SwipeableItemProps = {
    userInfo: Data,
    onSwipeLeft: () => void,
    onSwipeRight: () => void
  }



  const SwipeableItem: FC<SwipeableItemProps> = ({ userInfo, onSwipeLeft, onSwipeRight }) => {

    return (
      <Swipeable
        renderLeftActions={LeftSwipeActions}
        renderRightActions={RightSwipeActions}
        onSwipeableLeftOpen={onSwipeLeft}
        onSwipeableRightOpen={onSwipeRight} >
        <Card >
          <View style={styles.cardInfo}>
            <Card.CardImage url={userInfo.userImage} />
            <View style={styles.userInfo}>
              <Card.Title>{userInfo.name}</Card.Title>
              <Card.Subtitle>{userInfo.email}</Card.Subtitle>
              <Card.Subtitle>{userInfo.phone}</Card.Subtitle>
            </View>
          </View>
        </Card>
        {/* <Text>Swipe me</Text> */}
      </Swipeable>
    )
  }

  return (

    <SafeAreaView>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.heading}>Attendence</Text>
        <Text style={styles.subHeading}>for 22/Jan/2021</Text>
      </View>

      <FlatList
        data={data}
        contentContainerStyle={{ paddingBottom: 75 }}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <SwipeableItem userInfo={item} onSwipeLeft={() => Alert.alert("Marked Present")} onSwipeRight={() => Alert.alert("Marked Absent")} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  cardInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  },

  userInfo: {
    padding: 10
  },

  heading: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold"
  },
  subHeading: {
    fontSize: 14,
    textAlign: "center",

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
  },
});

export default App;
