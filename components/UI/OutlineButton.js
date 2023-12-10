import { Pressable, StyleSheet, Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Colors} from '../../constants/colors'

const OutlineButton = ({onPress,icon,children}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=>[styles.button,pressed && styles.pressed]}>
        <Ionicons style={styles.icon} name={icon} size={18} color={Colors.primary500}/>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default OutlineButton

const styles = StyleSheet.create({
  button:{
    paddingHorizontal:12,
    paddingVertical:6,
    margin:4,
    borderWidth:1,
    flexDirection: 'row',
    borderColor:Colors.primary500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed:{
    opacity:0.7
  },
  icon:{
    marginRight:6
  },
  text:{
    color:Colors.primary500
  }
})