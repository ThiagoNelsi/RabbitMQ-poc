import { IncomingMessage, ServerResponse } from "http";

export interface RequestHandler {
    (req: Request, res: ServerResponse): void;
}

export interface Request extends IncomingMessage {
    body: any;
}

export interface Response extends ServerResponse {}

type IMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'; 

class Controller {

    private handlers: any = {
        '404': (req: Request, res: Response) => {
            res.statusCode = 404;
            res.end();
        }
    };

    handle(req: Request, res: Response): void {
        const handlerKey = req.method + ' ' + req.url;
        this.handlers[handlerKey]?.(req, res) || this.handlers['404'](req, res);
    }

    register(method: IMethods, endpoint: string, handler: RequestHandler): void {
        this.handlers[method + ' ' + endpoint] = handler;
    }
}

export default new Controller();