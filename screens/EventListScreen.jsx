import { FlatList, View } from 'react-native';
import List from '../components/List';

const events = require('../data/events.json')

export default function BestiaryListScreen({navigation}) {
  function renderEvent ({item}){
    function onPressHandler() {
      navigation.navigate("EventDetails", {
        name: item.name,
        imageUrl: item.imageUrl,
        description: item.description,
      })
    };
  
    return <List name={item.name} imageUrl={item.imageUrl} onPress={onPressHandler}/>;
  }

  return (
    <View>
      <FlatList 
        data={events} 
        keyExtractor={(item) => item.id} 
        renderItem={renderEvent}
        numColumns={3}
      />
    </View>
  )
}
