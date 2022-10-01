// component
import Iconify from '../../Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'users',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'requests',
    path: '/dashboard/requests',
    icon: getIcon('mdi:message-badge'),
  },
  {
    title: 'trucks',
    path: '/dashboard/trucks',
    icon: getIcon('mdi:dump-truck'),
  },
  {
    title: 'garbage inventory',
    path: '/garbageInventory',
    icon: getIcon('mdi:trash-can'),
  },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
