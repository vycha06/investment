// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageSourcePropType, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');
const HomeScreen = () => {


  const [gold, setGold] = useState<boolean>(true);
  const [real, setReal] = useState<boolean>(false);
  const [fixed, setFixed] = useState<boolean>(false);


  const fixedText = "Banks and other financial institutions offer fixed deposits, which are financial instruments in which an investor deposits a lump sum of money for a predetermined period of time at a predetermined interest rate. The investor receives interest, which is usually higher than regular savings accounts, and the funds are locked in for the predetermined amount of time. Because they offer capital protection, guaranteed returns, and low risk, fixed deposits are a popular choice for conservative investors looking for steady income."
  const realText = "Property that includes land, buildings, and natural resources like crops, minerals, or water is referred to as real estate. It includes purchasing, selling, renting, and developing land and buildings, as well as residential, commercial, and industrial properties. Real estate is a substantial asset class that offers growth potential and financial stability to investors by producing rental income, generating investment opportunities, and potentially appreciating in value over time.";
  const goldText = "Gold is found in bullion bars, coins like the American Gold Eagle, and exchange-traded funds (ETFs) that track gold prices. It is prized for its extreme stability and purity, acting as a buffer against inflation and unstable economies. Gold is prized for its ability to diversify a portfolio and serve as a safe haven, despite price fluctuations. Gold, whether kept in physical form or through financial instruments, reduces risk and helps protect wealth compared to conventional assets and currencies."

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Investments</Text>

      {/* top nav button text row start */}

      <View style={styles.row}>
        <Text style={{
          minWidth: 80,
          margin: 10,
          borderWidth: 1,
          padding: 10,
          borderColor: gold ? 'black' : "gray",
          color: gold ? 'black' : "gray",
          borderRadius: 10,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16
        }} onPress={() => {
          //show gold 
          setGold(true);

          //hide others
          setReal(false);
          setFixed(false);
        }
        }>Gold</Text>
        <Text style={{
          minWidth: 80,
          margin: 10,
          borderWidth: 1,
          padding: 10,
          borderColor: real ? 'black' : "gray",
          color: real ? 'black' : "gray",
          borderRadius: 10,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16
        }} onPress={() => {
          //show real text
          setReal(true);

          //hide others
          setGold(false);
          setFixed(false);
        }
        }>Real Estate</Text>
        <Text style={{
          minWidth: 80,
          margin: 10,
          borderWidth: 1,
          padding: 10,
          borderColor: fixed ? 'black' : "gray",
          color: fixed ? 'black' : "gray",
          borderRadius: 10,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16
        }} onPress={() => {

          //hide other buttons
          setGold(false);
          setReal(false);

          //show fixed text
          setFixed(true);
        }
        }>Fixed Deposits</Text>
      </View>
      {/* top nav button text row end */}


      {/* center text container start  */}

      <View style={styles.contentBox}>
        <Text style={styles.content}>
          {
            gold ? goldText :
              real ? realText : fixed ? fixedText : ("")
          }
        </Text>
      </View>

      {/* center text container end  */}

      {/* image container start */}

      <View style={styles.row2}>
        {
          gold ? <View style={styles.imageContainer}>
            <Image
              source={require('../assets/gold.png') as ImageSourcePropType}
              style={{ width: '100%', height: '100%' }}
              resizeMode='contain'
            />
          </View> : real ?
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/real.png') as ImageSourcePropType}
                style={{ width: '100%', height: '100%' }}
                resizeMode='contain'
              />
            </View> : fixed ?
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/first.png') as ImageSourcePropType}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode='contain'
                />
              </View> : <></>
        }

        {/* image container end  */}

        {/* button section start */}

        <View style={styles.column}>
          <Text style={styles.Secondbutton1}>{gold ? "Watch 'Gold' video" : real ? "Watch 'Real Estate' video" : fixed ? "Watch 'Fixed Deposits' video" : ''}</Text>
          <Text style={styles.Secondbutton}>Click here to get recommendations</Text>
        </View>
        {/* button section end  */}
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    paddingTop: 50
  },
  row: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  row2: {
    marginTop: 10,
    // padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  column: {
    paddingRight: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  button: {
    minWidth: 80,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    color: 'black',
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  Secondbutton: {
    margin: 10,
    padding: 10,
    color: 'white',
    borderRadius: 15,
    fontWeight: 'bold',
    backgroundColor: '#3B5998',
    width: 150,
    justifyContent: 'center',
    textAlign: 'center'
  },
  Secondbutton1: {
    margin: 10,
    padding: 10,
    color: 'white',
    borderRadius: 15,
    fontWeight: 'bold',
    backgroundColor: '#3B5998',
    width: 100,
    height: 50,
    justifyContent: 'flex-end',
    textAlign: 'center'
  },
  content: {
    color: 'black',
    justifyContent: 'center',
    textAlign: 'justify',
    fontSize: 15,
  },
  contentBox: {
    // flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
    margin: 10,
    minHeight: 250
  },
  imageContainer: {
    width: width * 0.6,
    height: width * 0.6,
    // marginHorizontal: 10,
  },

});

export default HomeScreen;
