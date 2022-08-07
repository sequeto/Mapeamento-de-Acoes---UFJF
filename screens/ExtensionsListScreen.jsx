import { FlatList, View } from 'react-native';
import List from '../components/ExtensionList';

const events = require('../data/extensions.json')

export default function ExtensionsListScreen({navigation}) {
  function renderEvent ({item}){
    function onPressHandler() {
      navigation.navigate("ExtensionDetails", {
        name: item.name,
        departament: item.departament,
        imageUrl: item.imageUrl,
        description: item.description,
      })
    };
  
    return <List name={item.name} imageUrl={item.imageUrl} departament={item.departament} onPress={onPressHandler}/>;
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