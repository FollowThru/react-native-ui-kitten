import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from '@followthru/ui-kitten-components';

export const IconSimpleUsageShowcase = () => (
  <Icon
    style={styles.icon}
    fill='#8F9BB3'
    name='star'
  />
);

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
