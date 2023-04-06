import { VerticalGroup } from '@grafana/ui';
import React from 'react';

interface DevicesProps {}

export const Devices: React.FC<DevicesProps> = (props): React.ReactElement => {
  return (
    <VerticalGroup>
      <h1>Devices</h1>
    </VerticalGroup>
  );
};
