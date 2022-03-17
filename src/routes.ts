import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';
import Home from './pages/home';
import Messages from './pages/messages';
import Settings from './pages/settings';

export const routes: RouteDefinition[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/messages',
        component: Messages,
    },
    {
        path: '/settings',
        component: Settings,
    },
    {
        path: '**',
        component: lazy(() => import('./errors/404')),
    },
];
