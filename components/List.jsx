import { Pressable, View, Text, StyleSheet, Image } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';

export default function List({name, imageUrl, onPress}) {
  return (
      <View style={styles.gridItem}>
          <Pressable android_ripple={{color: "#ccc"}} style={styles.button} onPress={onPress}>
              <View style={styles.innerContainer}>
                  <View style={styles.imageContainer}>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>Evento: {name}</Text>
                    <Text style={styles.name}>Categ./Depart.: {name}</Text>
                    <Text style={styles.name}>Data: {name}</Text>
                  </View>
              </View>
          </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 100,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor:"black",
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: "hidden"
  },
  imageContainer:{
    flex: 1,
    width: "30%",
    height: "100%",
    marginRight: 5
  },
  image:{
    width: "100%",
    height: "100%",
  },
  button:{
    flex: 1,
    padding: 0
  },
  innerContainer:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  textContainer:{
    flex: 1,
    flexDirection: "column",
    width: "70%",
    justifyContent:"space-between",
    marginLeft: 5
  },  
  name:{
    fontWeight: "bold",
    fontSize: 14
  }
})