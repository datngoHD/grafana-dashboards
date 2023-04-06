import { Container, VerticalGroup } from '@grafana/ui';
import React from 'react';

interface MapProps {}

export const Map: React.FC<MapProps> = (props): React.ReactElement => {
  return (
    <Container>
      <VerticalGroup>
        <h1>Maps</h1>
      </VerticalGroup>
    </Container>
  );
};
