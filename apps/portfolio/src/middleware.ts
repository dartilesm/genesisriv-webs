import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware((context, next) => {
  const data = {
    url: context.url.toString(),
    ip: context.clientAddress,
    user_agent: context.request.headers.get('User-Agent') || '',
    accept_language: context.request.headers.get('Accept-Language'),
    sec_ch_ua: context.request.headers.get('Sec-CH-UA'),
    sec_ch_ua_mobile: context.request.headers.get('Sec-CH-UA-Mobile'),
    sec_ch_ua_platform: context.request.headers.get('Sec-CH-UA-Platform'),
    sec_ch_ua_platform_version: context.request.headers.get('Sec-CH-UA-Platform-Version'),
    sec_ch_width: context.request.headers.get('Sec-CH-Width'),
    sec_ch_viewport_width: context.request.headers.get('Sec-CH-Viewport-Width'),
    referrer: context.request.headers.get('Referer'),
    tags: {}
  };
  console.log(data);
  return next();
});
