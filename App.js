
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar';
import axios from 'axios';
// import Swipes from './components/SwipeImage';
import BottomBar from './components/BottomBar';
import Swipes from './components/Swipes';

export default function App() {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  // api call 
  async function fetchUser() {
    try{ 
      const {data} = await axios.get('https://randomuser.me/api/?gender=female&results=50')
      setUsers(data.results)
      console.log(data.results)
    } catch(error) {
      console.log(error)
      Alert.alert('error getting users', '', [{text: 'Retry', onPress: () => fetchUser()}])
    }
  }

  useEffect(() => {
    fetchUser()
  },[])

  function handleLike() {
    console.log('like')
    nextUser();
  }

function nextUser() {
  const nextIndex = users.length - 2 == currentIndex ? 0 : currentIndex + 1;
  setCurrentIndex(nextIndex);
}

function handlePass(){
  console.log('pass')
  nextUser();
}

  return (
    <View style={styles.container}>
      <TopBar/>
     <View style={styles.swipes}>
       {users.length > 1 && users.map((u, i) => currentIndex == i && 
         <Swipes key={i} currentIndex={currentIndex} users={users} handleLike={handleLike} handlePass={handlePass}/>
       )}
     </View>
     <BottomBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop: Constants.statusBarHeight
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  }
});
