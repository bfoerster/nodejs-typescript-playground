export interface RouteConfig {
    description: string;
    notes: string;
    tags: Array<string>;
    handler: (request: any, reply: any) => void;
    validate: any;
}