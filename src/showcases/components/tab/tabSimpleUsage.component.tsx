import React from 'react';
import { Icon, Tab } from '@followthru/ui-kitten-components';

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

export const TabSimpleUsageShowcase = () => (
  <Tab title='USERS' icon={PersonIcon}/>
);
