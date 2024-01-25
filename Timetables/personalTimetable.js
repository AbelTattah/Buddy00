import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button
  , ActivityIndicator
} from 'react-native'
import { useState, useEffect } from 'react'
import styles from '../Styling/styles'

import { useFonts } from 'expo-font'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { UseSelector, useSelector, Provider } from 'react-redux'
import { store } from '../redux/store'

import axios from 'axios'

export default function PersonalTimetable ({ navigation }) {
  const { sidd } = useSelector((state) => state.userReducer)

  const [suds, setSuds] = useState({})
  const [disp1, setDisp1] = useState('Yet to generate')
  const [disp2, setDisp2] = useState('Yet to generate')
  const [disp3, setDisp3] = useState('Yet to generate')
  const [disp4, setDisp4] = useState('Yet to generate')
  const [disp5, setDisp5] = useState('Yet to generate')
  const [disp6, setDisp6] = useState('Yet to generate')

  // Line 42 contains all the subjects

  const [subjects, setSubjects] = useState([
    'MATH126',
    'MATH122',
    'DCIT102',
    'UGRC150'
  ])
  const timearr = []

  useEffect(() => {
    async function fetchData () {
      const response = await axios.get(
        'https://buddy00.onrender.com/timetables'
      ) // the link in the function connects to my api
      setSuds(response.data)
    }
    fetchData()
  }, [])

  // Line 54 to 86 searches for the subjects in the data fetched and sorts them into the respective views
  function lectureTimeSearchAndSort () {
    for (let d = 0; d < suds.length; d++) {
      if (suds[d].SID == sidd) {
        setSubjects(suds[d].Courses)
      }
    }

    let a
    for (let c = 0; c < subjects.length; c++) {
      a = subjects[c]
      for (let b = 0; b < 4; b++) {
        if (
          (sidd - suds[4].Subject[a][b].high < 0 &&
            sidd - suds[4].Subject[a][b].low == 0) ||
          (sidd - suds[4].Subject[a][b].high == 0 &&
            sidd - suds[4].Subject[a][b].low > 0) ||
          (sidd - suds[4].Subject[a][b].high < 0 &&
            sidd - suds[4].Subject[a][b].low > 0)
        ) {
          console.log('It worked')
          timearr.push(suds[4].Subject[a][b])
        } else {
          console.log('Nope')
          continue
        }
      }
    }
    // Line 58 to 77 sorts and arranges the objects obtained from the Loop above into the respective Views by updating
    // disp1 to 4.
    console.log(timearr)

    const byDate = timearr.slice(0)

    byDate.sort(function (a, b) {
      return a.did - b.did
    })
    console.log(byDate)

    function UpdateState () {
      setDisp1(byDate[0].time)
      setDisp2(byDate[1].time)
      setDisp3(byDate[2].time)
      setDisp4(byDate[3].time)
      setDisp5('Yet to Generate')
      setDisp6('Yet to Generate')
      console.log('Hmmm')
    }
    UpdateState()
  }

  async function fetchData () {
    fetch('https://buddy00.onrender.com/timetables') // the link in the function connects to my api
      .then((response) => response.json())
      .then((json) => setSuds(json))
      .then(() => console.log(suds))
      .catch((error) => {
        console.log('error')
      })
  }
  // line 89 to 96 load the font and makes sure the font is loaded before rendering the main view.
  const [fontsLoaded] = useFonts({
    FredokaBold: require('../fonts/FredokaBold.ttf')
  })

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <>
      <Provider store={store}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View style={styles.personalTimetableTopButtonView}>
            <TouchableOpacity
              styles={styles.personalTimetableTopButton}
              onPress={() => {
                fetchData()
                lectureTimeSearchAndSort()
              }}
            >
              <FontAwesomeIcon icon={faArrowDown} size={40} />
            </TouchableOpacity>
          </View>

          <View style={styles.perTMainview}>
            <Text style={styles.perT}> DAY         COURSE          TIME        VENUE</Text>
            <View style={styles.perTviews}>
              <Text style={styles.perT}>{disp1}</Text>
            </View>
            <View style={styles.perTviews}>
              <Text style={styles.perT}>{disp2}</Text>
            </View>
            <View style={styles.perTviews}>
              <Text style={styles.perT}>{disp3}</Text>
            </View>
            <View style={styles.perTviews}>
              <Text style={styles.perT}>{disp4}</Text>
            </View>
            <View style={styles.perTviews}>
              <Text style={styles.perT}>{disp5}</Text>
            </View>
            <View style={styles.perTviews}>
              <Text style={styles.perT}>{disp6}</Text>
            </View>
          </View>
        </View>
      </Provider>
    </>
  )
}
