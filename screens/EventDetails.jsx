import { Text, View, Image, StyleSheet,ScrollView } from 'react-native';

export default function Details({route}) {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>{route.params.name}</Text>
        <View style={styles.imageContainer}>
          <Image source={{uri: route.params.imageUrl}} style={styles.image}/>
        </View>
        <ScrollView style={styles.descriptionContainer}>
          <Text style={styles.description}>{route.params.description}</Text>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 50
  },
  imageContainer:{
    width: 300,
    height: 500
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },
  description: {
    fontWeight: 'bold',
  },
  descriptionContainer:{
    margin: 10,
    padding: 20,
  },
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  }
});
