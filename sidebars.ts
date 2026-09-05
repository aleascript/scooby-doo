import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'link',
      label: 'Publications',
      href: '/publications/',
    },
    'rules',
    'scenario',
  ],
};

export default sidebars;
