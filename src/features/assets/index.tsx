import { VerticalGroup } from '@grafana/ui';
import React from 'react';

interface AssetsProps {}

export const Assets: React.FC<AssetsProps> = (props): React.ReactElement => {
  return (
    <VerticalGroup>
      <h1>Assets</h1>
    </VerticalGroup>
  );
};
