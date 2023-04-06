import * as React from 'react';
import { AppRootProps } from '@grafana/data';
import { testIds } from '../testIds';

export class App extends React.PureComponent<AppRootProps> {
  render() {
    return (
      <>
        <div className="page-container" data-testid={testIds.homePage.container}>
          <h1>Hello and welcome to our demo app!</h1>
          <h2>Check out our dashboards:</h2>
          <br />
          <ul>
            <li>
              <a href="/d/Av57mRHVz" data-testid={testIds.homePage.illumassDashboard}>
                Illumass Dashboard
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
