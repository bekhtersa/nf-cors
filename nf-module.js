import { web } from "@nfjs/back";
import { common, config } from "@nfjs/core";

export async function init() {
    //Only for working hook
    web.on('OPTIONS','*',(context)=>{
        context.end();
    });
    web.registerHook(async (context)=>{
        const tmp = context.req.headers.origin || context.req.headers.referer || context.req.headers.host;
        let origin = tmp.match(/^[a-z]+:\/\/[^\/]+/i)?.[0] ?? '';

        const allow = common.getPath(config, '@nfaddon/cors');
        const headers = allow[origin] || allow[origin='*'];
        if( headers?.[context.req.method] ) {
            context.headers({'Access-Control-Allow-Origin': origin });
            context.headers(headers[context.req.method]);
        }
    }, 'before');
}

export const meta = {
    require: {
        before: ['@nfjs/back']
    }
}