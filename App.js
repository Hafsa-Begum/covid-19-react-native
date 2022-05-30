import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Image, Pressable, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './src/theme/colors';
import { spacings } from './src/theme/spacings';
import Text from './src/components/text/text';
import { Entypo, Ionicons, MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { PREV_LIST } from "./src/data/data"
import { OwnTestSVG } from './src/svg';
import { LinearGradient } from 'react-native-linear-gradient';

const Button = ({ children, bgColor }) => {
  return (
    <View style={[styles.button, { backgroundColor: bgColor }]}>
      <Pressable>
        <Text style={{ color: colors.white }}>
          {children}
        </Text>
      </Pressable>
    </View>
  )

}

export default function App() {
  const [loaded] = useFonts({
    Graphik: require('./assets/fonts/GraphikRegular.otf'),
    GraphikBold: require('./assets/fonts/GraphikBold.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.upperPart}>
          <View style={styles.menuNotification}>
            <Entypo name="menu" size={24} color="white" />
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
          <View style={styles.covidUSA}>
            <Text preset='h2' style={{ color: colors.white }}>Covid-19</Text>
            <View style={styles.usa}>
              <Image source={require('./assets/usa.png')} style={{ borderRadius: 10 }} />
              <Text preset='h5' style={{ marginHorizontal: spacings[3], }}>USA</Text>
              <MaterialCommunityIcons name="menu-down" size={24} color="black" />
            </View>
          </View>
          <Text preset='h4' style={{ color: colors.white, paddingVertical: spacings[4] }}>Are you feeling seek?</Text>
          <Text style={{ color: colors.white, fontSize: 16 }}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
          <View style={styles.buttons}>
            <Button bgColor={colors.red}><FontAwesome name="phone" size={20} color="white" />  Call Now</Button>
            <Button bgColor={colors.lightBlue}><Entypo name="message" size={20} color="white" /> Send Sms</Button>
          </View>
        </View>
        <View style={styles.lowerPart}>
          <Text preset='h2'>Prevention</Text>
          <View style={{ marginTop: spacings[4] }}>
            <FlatList
              data={PREV_LIST}
              numColumns={3}
              renderItem={({ item }) => {
                return (
                  <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', }}>
                    <View style={{ width: 150 }}>{item.image}</View>
                    <Text style={{ fontSize: 16, textAlign: 'left' }}>{item.name}</Text>
                  </View>
                )
              }}
            >

            </FlatList>
          </View>
          {/* <LinearGradient
            colors={['#56549E', '#AEA1E5']}
            style={{
              flex: 1,
            }}
          > */}
          <View style={styles.ownTest}>
            <View style={{ flex: 1, marginTop: -spacings[3], }}>
              <OwnTestSVG />
            </View>
            <View style={{ flex: 2, marginLeft: spacings[4] }}>
              <Text preset='h4'>Do your own test!</Text>
              <Text style={{ marginTop: spacings[4] }}>Follow the instructions to do your own test.</Text>
            </View>
          </View>
          {/* </LinearGradient> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
  container: {

  },
  upperPart: {
    height: 350,
    backgroundColor: colors.blue,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingHorizontal: spacings[6],
    paddingTop: spacings[7]
  },
  lowerPart: {
    paddingHorizontal: spacings[6],
    paddingTop: spacings[2],

  },
  menuNotification: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  covidUSA: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: spacings[6]
  },
  usa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: spacings[2],
    paddingVertical: spacings[2],
    borderRadius: spacings[5],

  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colors.white,
  },
  button: {
    textAlign: 'center',
    paddingHorizontal: spacings[5],
    paddingVertical: spacings[4],
    width: 160,
    borderRadius: 35,
    marginVertical: spacings[5]
  },
  ownTest: {
    marginTop: spacings[7],
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#56549E',
    paddingHorizontal: spacings[3],
    paddingBottom: spacings[5],
    borderRadius: spacings[6]
  }

});
