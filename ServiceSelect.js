import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';

export default function ServiceSelect() {
  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={'https://static.wixstatic.com/media/nsplsh_c7567a7e7bf34da784e174828d5c9298~mv2.jpg/v1/fill/w_1349,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_c7567a7e7bf34da784e174828d5c9298~mv2.jpg'}>
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Services</Text>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
          <Button style={{ marginBottom: '30px', width: '150px', marginRight: '10px' }} mode="contained">Salon</Button>
          <Button style={{ marginBottom: '30px', width: '150px' }} mode="contained">Aesthetics</Button>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
          <Button style={{ marginBottom: '30px', width: '150px', marginRight: '10px'}} mode="contained">Fitness</Button>
          <Button style={{ marginBottom: '30px', width: '150px' }} mode="contained">Photography</Button>
          </View>

        </Card>
    </View>
    </ImageBackground>
  );
}
