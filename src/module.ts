import { AppPlugin, AppRootProps } from '@grafana/data';
import { AppConfig } from './components/AppConfig';
import { IllumassRootPage } from 'illumass-root-page';
import { ComponentClass } from 'react';
import { IllumassAppSettings } from 'type';

// export const plugin = new AppPlugin<IllumassAppSettings>()
//   .setRootPage(IllumassRootPage as unknown as ComponentClass<AppRootProps<IllumassAppSettings>>)
//   .addConfigPage({
//     title: 'Configuration Đây nè',
//     icon: 'cog',
//     body: AppConfig,
//     id: 'configuration',
//   });

export const plugin = new AppPlugin<IllumassAppSettings>()
  .setRootPage(IllumassRootPage as unknown as ComponentClass<AppRootProps<IllumassAppSettings>>)
  .addConfigPage({
    title: 'Configuration',
    icon: 'cog',
    body: AppConfig,
    id: 'configuration',
  });
