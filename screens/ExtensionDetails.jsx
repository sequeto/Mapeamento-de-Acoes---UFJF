import { Text, View, Image, StyleSheet,ScrollView } from 'react-native';

export default function Details({route}) {
  return (
    <View style={{flex: 1, backgroundColor:"#FFF"}}>
      <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{uri: route.params.imageUrl}} style={styles.image}/>
          </View>
          <Text style={styles.name}>Título: {route.params.name}</Text>
          <Text style={styles.name}>Categ./Departament.: {route.params.departament}</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 8}}>Detalhes:</Text>
          <ScrollView style={styles.descriptionContainer}>
            <Text style={styles.description}>{route.params.description}</Text>
          </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  imageContainer:{
    width: "100%",
    height: "30%"
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5
  },
  description: {
    fontWeight: 'bold',
  },
  descriptionContainer:{
    textAlign: "center",
    padding: 20
  },
  container:{
    flex: 1,
    margin: 50,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    width: "80%",
    height: "50%",
    backgroundColor: "#F3F3F3"
  },
  dates:{
    margin: 5,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: "column",
    justifyContent: "space-between",
  }
});
