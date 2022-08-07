import { Pressable, View, Text, StyleSheet, Image } from 'react-native';
import { Header } from "@rneui/themed";

const docsNavigate = () => {
    Linking.openURL(`https://reactnativeelements.com/docs/`);
  };
  
  const playgroundNavigate = () => {
    Linking.openURL(`https://@rneui/themed.js.org/#/`);
  };

export default function HeaderComponent(){
    return (
        <Header
            leftComponent={{
                icon: 'menu',
                color: '#fff',
            }}

            rightComponent={
                <View >
                    <Text>
                        ok
                    </Text>
                </View>
            }
        />
    )
}


const styles = StyleSheet.create({
});