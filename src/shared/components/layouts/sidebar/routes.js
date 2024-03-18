import { ROUTES } from "../../../constants/routes";

export const SIDEBAR_NAV = [
    {
    //   icon: ProfileMenuIcon,
      label: 'Dashboard',
      route: ROUTES.HOMEPAGE,
    },
    {
    //   icon: SpotifyIcon,
      label: 'Content Management',
      route: ROUTES.CONTENT_MANAGEMENT,
      children: [
        {
          label: 'Top Header',
          route: `${ROUTES.CONTENT_MANAGEMENT}/top-navbar`,
        },
        {
          label: 'Video description',
          route: `${ROUTES.CONTENT_MANAGEMENT}/section-1`,
        },
      ],
    },
  ];