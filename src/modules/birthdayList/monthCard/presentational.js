import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-native-elements';
import styles from './styles';

const MonthCard = props => (
  <Card
    containerStyle={styles.container}
    title={props.name}
    titleStyle={styles.title}
  />
);

MonthCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MonthCard;
