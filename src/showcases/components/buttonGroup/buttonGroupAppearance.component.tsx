import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonGroup, Layout } from '@followthru/ui-kitten-components';

export const ButtonGroupAppearanceShowcase = () => (
  <Layout style={styles.container} level='1'>

    <ButtonGroup style={styles.buttonGroup} appearance='filled'>
      <Button>L</Button>
      <Button>M</Button>
      <Button>R</Button>
    </ButtonGroup>

    <ButtonGroup style={styles.buttonGroup} appearance='outline'>
      <Button>L</Button>
      <Button>M</Button>
      <Button>R</Button>
    </ButtonGroup>

  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonGroup: {
    margin: 2,
  },
});
