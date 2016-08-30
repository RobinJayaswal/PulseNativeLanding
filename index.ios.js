/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
var Carousel = require('react-native-looped-carousel');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
//import colors from './includes/colors.jsx'
import Colors from './includes/colors'


const wordBank=['Sexual Assault', 'Drinking', 'Senior Administrators', 'Study Abroad', 'Student Assembly', 'Mental Health',
 'Tuition', 'Balance of Life', 'Classroom Climate', 'Inclusivity', 'Academic Success', 'Careers', 'Transferring', 'Faculty Salaries', 'Race and Ethnicity', 'Dartmouth']

let SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

class PulseNativeLanding extends Component {
  constructor() {
    super()
    mixins: [SetIntervalMixin]
    this.state = {
      rotatingTextIdx: 0,
      size: {width: width, height: height},
    }
  }

  componentWillMount() {
    setInterval(this.incrementTextIdx.bind(this), 3000)

    randomStartPoint = Math.floor(Math.random() * (wordBank.length))
    this.setState({
      rotatingTextIdx: randomStartPoint,
    })
  }

  incrementTextIdx() {
    this.setState({
      rotatingTextIdx: (this.state.rotatingTextIdx + 1) % wordBank.length,
    })
  }
  render() {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit index.ios.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       Press Cmd+R to reload,{'\n'}
    //       Cmd+D or shake for dev menu
    //     </Text>
    //   </View>
    // );

    StatusBar.setBarStyle('light-content', true);
    return (
      <View style={styles.mobilePageContainer}>
        <StatusBar
            backgroundColor="black"
            barStyle="light-content"/>
        <Carousel delay={30000} style={this.state.size}>

          {/* Screen 1*/}
          <Image source={require('./img/new-bg-1.jpg')} style={styles.container} >
            <View style={styles.mScreen, styles.m1}>
              <View style={styles.logoContainer}>
                <Image source={require('./img/landing-logo.png')} style={styles.logoImage} />
              </View>
              <View style={styles.header} >
                <View style={styles.headerTextWordRotating} >
                  <Text style={styles.baseText}>
                    GET PAID TO LEARN WHAT YOUR CAMPUS THINKS ABOUT:
                  </Text>
                  <Text style={styles.rotatingText}>
                    {wordBank[this.state.rotatingTextIdx]}
                  </Text>
                  <View style={styles.line}>
                  </View>
                </View>
              </View>
            </View>
          </Image>



          {/* Screen 2 */}
          <Image source={require('./img/collis-mobile.jpg')} style={styles.container} >
            <View style={styles.mScreen, styles.m1}>
              <View style={styles.logoContainer}>
                <Image source={require('./img/landing-logo.png')} style={styles.logoImage} />
              </View>
              <View style={screen2Styles.textContainer}>
                <Text style={screen2Styles.header} >
                  HAVE CONTROL OF THE DATA
                </Text>
                <Text style={screen2Styles.subHeader} >
                  Statistically significant data, accessible by all. We mean full transparency
                </Text>
              </View>
            </View>
          </Image>



        {/* Screen 3 */}
          <Image source={require('./img/new-bg-3.png')} style={styles.container} >
            <View style={styles.mScreen, styles.m1}>
              <View style={screen3Styles.textContainer}>
                <Text style={screen3Styles.header} >
                  Have a stake in the change.
                </Text>

                <View style={screen3Styles.button}>
                  <Text style={screen3Styles.buttonText} >
                  LOG IN
                  </Text>
                </View>


                <View style={screen3Styles.button}>
                  <Text style={screen3Styles.buttonText} >
                  CONTACT US
                  </Text>
                </View>

              </View>
            </View>
          </Image>





        </Carousel>
        <View style={ [{bottom: this.state.size.height/10.0 + 30}, bottomDotsStyles.dots ] }>
          <View style={bottomDotsStyles.dotContainer}>
            <View style={bottomDotsStyles.dot} ></View>
            <View style={bottomDotsStyles.dot} ></View>
            <View style={bottomDotsStyles.dot} ></View>
            <View style={bottomDotsStyles.dot} ></View>
          </View>
        </View>
        <View style={ [{width: this.state.size.width, height: this.state.size.height/8.0}, barStyles.container] } >
          <Text style={barStyles.logInText} >LOG IN</Text>
        </View>



      {// .m-screen.m-1(style='background-image:url("/img/new-bg-1.jpg")')
      //   .logo-container
      //     img.logo(src='/img/landing-logo.png', onclick='window.location.href="/"' draggable='false')
      //   .header(style='margin-bottom:50px')
      //     .header-text.word-rotating
      //       span.base-text GET PAID TO LEARN WHAT YOUR CAMPUS THINKS ABOUT:
      //       .rotating-append-point
      // .m-screen.m-2.hidden.next(style='background-image:url("/img/collis-mobile.jpg")')
      //   .logo-container
      //     img.logo(src='/img/landing-logo.png', onclick='window.location.href="/"' draggable='false')
      //   .screen-2-text
      //     span.header HAVE CONTROL OF THE DATA
      //     span.sub-text Statistically significant data, accessible by all. We mean full transparency
      // .m-screen.m-3.hidden.screen(style='background-image:url("/img/new-bg-3.jpg")')
      //   .screen-3-text
      //     span Have a stake in the change.
      //   .stake-buttons-container
      //     .stake-button(onclick='window.location.href = "/app"')
      //       span LOG IN
      //     .stake-button(onclick='window.location.href="mailto:admin@dartmouthpulse.com"')
      //       span CONTACT US
      //
      // .m-screen.m-4.hidden(style='background-image:url("/img/new-bg-4.jpg")')
      //   .advantages-container
      //     .advantage-header
      //       .advantage-header-text Why poll with Pulse?
      //     .adv
      //       .adv-header.built-in
      //         span Built-In Incentives
      //         img(class='expand-adv' src='/img/whiteCirclePlus.svg', draggable='false')
      //         img(class='retract-adv retract-inc' src='/img/white-circle-minus.svg', draggable='false')
      //
      //       .adv-description-incentives Don't worry about buying gift cards to raffle off to your respondents. Pulse allows the students to choose their own rewards, from free pizza to lunch with the president.
      //     .adv
      //       .adv-header.central-data
      //         span Centralized Data
      //         img(class='expand-adv' src='/img/whiteCirclePlus.svg', draggable='false')
      //         img(class='retract-adv retr-data' src='/img/white-circle-minus.svg', draggable='false')
      //       .adv-description-data Every poll response is recorded on the student's profile, leading to increasingly comprehensive data analysis and cross-referencing between polls.
      //     .adv
      //       .adv-header.target-sampling
      //         span Targeted Sampling
      //         img(class='expand-adv' src='/img/whiteCirclePlus.svg', draggable='false')
      //         img(class='retract-adv retr-sample' src='/img/white-circle-minus.svg', draggable='false')
      //       .adv-description-sampling Poll creators can target their sample based off of demographic information (e.g. Race, Class year, Major) or answers to a past poll.
      // .m-dots
      //   .dot-container
      //     .m-dot.md1.active
      //     .m-dot.md2
      //     .m-dot.md3
      //     .m-dot.md4
      // .m-buttons-container
      //   .mobile-button.become-poll-creator
      //     span Create A Poll
      //   .partial-border
      //   .mobile-button.m-login(onclick='window.location.href = "/app"')
      //     span Log In
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,

    overflow: 'hidden'

  }
  ,mobilePageContainer: {
    flex: 1,
    flexDirection: 'column',
    // marginTop: 20,
  }
  ,mScreen: {
    flex: 1,
    overflow: 'hidden',
  }
  ,logoContainer: {
    flex: 1,
    marginTop: 30,
    //marginBottom: 30
  }
  ,logoImage: {
    height: 150,
    width: 300,
    alignSelf: 'center'
  }

  ,header: {
    alignSelf: 'center',
    margin: 20,
    marginTop: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',

  }
  ,baseText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
  }

  ,rotatingText: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'Didot'
  }

  ,line: {
    alignSelf: 'center',
    height: 1,
    width: width/1.1,
    backgroundColor: 'white'
  }

});

const bottomDotsStyles = StyleSheet.create({
  dots: {
    position: 'absolute',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  }

  ,dotContainer: {
    width: width/3.0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  ,dot: {
    backgroundColor: 'white',
    borderRadius: 100/2,
    height: 15,
    width: 15
  }

})

/*const screen2Styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'transparent'
    ,flexDirection: 'column'

    ,marginRight: 40
    ,marginLeft: 135
    ,marginTop: 40
  }
  ,header: {
    fontSize: 26
    ,textAlign: 'center'
   // ,fontFamily: 'Didot'
    ,fontWeight: 'bold'
    ,color: Colors.questionColor
    ,marginBottom: 20
  }
  ,subHeader: {
    fontSize: 16
    ,color: 'white'
    ,textAlign: 'center'
  }
})*/

const screen2Styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'transparent'
    ,flexDirection: 'column'

    ,margin: 15
    ,marginLeft: 30
    ,marginRight: 50
  }
  ,header: {
    fontSize: 35
    ,color: 'white'
    ,fontWeight: 'bold'
    ,width: width/1.5
    ,textShadowRadius: 1
    ,textShadowColor: '#393939'
    ,textShadowOffset: {width: 1, height: 1}

  }
  ,subHeader: {
    fontSize: 16
    ,color: 'white'
    ,width: width/1.5
    ,textShadowRadius: 1
    ,textShadowColor: '#393939'
    ,textShadowOffset: {width: 1, height: 1}
  }
})

const screen3Styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'transparent'
    ,flexDirection: 'column'
    ,alignItems: 'center'
    ,margin: 25
    ,marginTop: 140

  }
  ,header: {
    fontSize: 28
    ,textAlign: 'center'
    ,color: 'white'
//    ,width: width
    ,fontFamily: 'Didot'
    //,fontWeight: 'bold'
  }
  ,button: {
    width: 130
    ,height: 40
    ,backgroundColor: 'transparent'
    ,borderColor: 'white'
    ,borderWidth: 2
    ,margin: 10
    ,justifyContent: 'center'
    ,alignItems: 'center'
  }
  ,buttonText: {
    fontSize: 14
    ,color: 'white'
    ,textAlign: 'center'
    ,fontWeight: 'bold'
  }
})

barStyles= StyleSheet.create({
  container: {
    position: 'absolute'
    ,bottom: 0
    ,backgroundColor: Colors.questionColor
    ,alignItems: 'center'
    ,justifyContent: 'center'
  }
  ,logInText: {
    color: 'white'
    ,fontSize: 30
  }
})

AppRegistry.registerComponent('PulseNativeLanding', () => PulseNativeLanding);
