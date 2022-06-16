import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';

export default function Chooselogintype() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#9c8cbc' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>Choose Login Type</Text>
          <Button style={{ marginBottom: '30px' }} mode="contained">Client Login</Button>
          <Button style={{ marginBottom: '30px' }} mode="contained">Business Login</Button>
        </Card>
    </View>
  );
}
