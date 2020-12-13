import React from 'react';
import { ImageBackground } from 'react-native';
import { Avatar } from '@followthru/ui-kitten-components';

export const AvatarImageComponentShowcase = () => (
  <Avatar
    source={require('../../assets/icon.png')}
    ImageComponent={ImageBackground}
  />
);
