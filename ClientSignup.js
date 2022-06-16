import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer  } from 'react-native';

export default function ClientSignup() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#9c8cbc' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%'}}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Client Signup</Text>
          <Text style={{ fontWeight: 'bold', textAlign: 'start', marginBottom: '20px', fontSize: '20px' }}>Create an Account</Text>
          <TextInput placeholder='Username' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Email' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Password' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Confirm Password' style={styles.Textfields}></TextInput>
          <Button style={{ marginBottom: '20px' }} mode="contained">Signup</Button>
          <Button style={{ marginBottom: '20px' }} mode="contained">Cancel</Button>


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
