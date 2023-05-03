import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', '690'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '27b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '1a4'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', '441'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', '2f6'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', 'abc'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '58b'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '0a9'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'a24'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '79f'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/admin-panel',
        component: ComponentCreator('/docs/admin-panel', '718'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/analytics',
        component: ComponentCreator('/docs/analytics', '2fd'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/android',
        component: ComponentCreator('/docs/android', 'b4a'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/backend',
        component: ComponentCreator('/docs/backend', '69c'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/crash-reporting',
        component: ComponentCreator('/docs/crash-reporting', 'e81'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/deployment',
        component: ComponentCreator('/docs/deployment', 'c48'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/Legacy/E-Samwad/assessmentmodule',
        component: ComponentCreator('/docs/Legacy/E-Samwad/assessmentmodule', '42d'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/Legacy/E-Samwad/deploysamwad',
        component: ComponentCreator('/docs/Legacy/E-Samwad/deploysamwad', 'cd4'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/Legacy/E-Samwad/ESamwadOverview',
        component: ComponentCreator('/docs/Legacy/E-Samwad/ESamwadOverview', '4cd'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/Legacy/E-Samwad/SamwadFuncSpecs',
        component: ComponentCreator('/docs/Legacy/E-Samwad/SamwadFuncSpecs', '918'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/Legacy/intro',
        component: ComponentCreator('/docs/Legacy/intro', '7d1'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/Legacy/mermaid',
        component: ComponentCreator('/docs/Legacy/mermaid', 'adc'),
        exact: true,
        sidebar: "overview"
      },
      {
        path: '/docs/monitoring',
        component: ComponentCreator('/docs/monitoring', 'bc5'),
        exact: true,
        sidebar: "overview"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
