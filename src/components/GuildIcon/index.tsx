import React from 'react';
import {
  Image,
  Text
} from 'react-native';

import { styles } from './styles';

export function GuildIcon(){
  return(
    <Image
      source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lh5XYWv2a7he0qeDdiIX4u9GZ8dwhl67ONv0EyjtYY9eCGqbOIGNqd4iEzIdW788fmc&usqp=CAU'}}
      style={styles.image}
      resizeMode="cover"
    />
  )
}