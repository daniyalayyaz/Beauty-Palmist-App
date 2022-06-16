import {  Button, Card, } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';

export default function BusinessLogin() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#9c8cbc' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Business Login</Text>
          <TextInput placeholder='Username' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Password' style={styles.Textfields}></TextInput>
          <Button style={{ marginBottom: '20px' }} mode="contained">Login</Button>

        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  Textfields: {
    borderRadius: '20px',
    borderColor: 'grey',
    padding: '10px',
    marginBottom: '20px'
  },
});
