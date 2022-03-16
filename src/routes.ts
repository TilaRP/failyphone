import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';
import Home from './pages/home';
import Message from './pages/message';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/message',
    component: Message,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
