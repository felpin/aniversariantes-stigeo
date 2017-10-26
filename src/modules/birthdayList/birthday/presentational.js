import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';

const renderCelebrator = celebrator => <Text style={styles.celebrator}>{celebrator}</Text>;

const Birthday = props => (
  <View style={styles.birthday}>
    <Text style={styles.day}>{props.day}</Text>
    <FlatList
      data={props.celebrators}
      keyExtractor={item => item}
      renderItem={({ item }) => renderCelebrator(item)}
      style={styles.celebrators}
    />
  </View>
);

Birthday.propTypes = {
  celebrators: PropTypes.arrayOf(PropTypes.string).isRequired,
  day: PropTypes.number.isRequired,
};

export default Birthday;
