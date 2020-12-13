import React from 'react';
import { Icon, TopNavigationAction } from '@followthru/ui-kitten-components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

export const TopNavigationActionSimpleUsageShowcase = () => (
  <TopNavigationAction icon={BackIcon}/>
);
