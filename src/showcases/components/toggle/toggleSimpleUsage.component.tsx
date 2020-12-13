import React from 'react';
import { Toggle } from '@followthru/ui-kitten-components';

export const ToggleSimpleUsageShowcase = () => {

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return (
    <Toggle checked={checked} onChange={onCheckedChange}>
      {`Checked: ${checked}`}
    </Toggle>
  );
};
