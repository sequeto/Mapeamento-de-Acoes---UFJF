import { FlatList, View } from 'react-native';
import List from '../components/EventList';

const events = require('../data/events.json')

export default function EventListScreen({navigation}) {
  function renderEvent ({item}){
    function onPressHandler() {
      navigation.navigate("ExtensionDetails", {
        name: item.name,
        departament: item.departament,
        initialDate: item.initialDate,
        finalDate: item.finalDate,
        imageUrl: item.imageUrl,
        description: item.description,
      })
    };
  
    return <List name={item.name} imageUrl={item.imageUrl} departament={item.departament} initialDate={item.initialDate} onPress={onPressHandler}/>;
  }

  return (
    <View>
      <FlatList 
        data={events} 
        keyExtractor={(item) => item.id} 
        renderItem={renderEvent}
      />
    </View>
  )
}
