import {RouteConfig} from './routeConfig';

export interface Route {
    method: string;
    path: string;
    config: RouteConfig;
}