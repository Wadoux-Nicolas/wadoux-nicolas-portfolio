import createMiddleware from 'next-intl/middleware';
import {DEFAULT_LOCAL, LOCALS} from "@/i18n";

export default createMiddleware({
    locales: LOCALS,
    defaultLocale: DEFAULT_LOCAL,
});

export const config = {
    // Match only path with language prefix
    matcher: ['/', '/(' + LOCALS.join('|') + ')/:path*']
};