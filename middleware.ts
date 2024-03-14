import createMiddleware from 'next-intl/middleware';
import {DEFAULT_LOCAL, LOCALES} from "./navigation";
import {NextRequest} from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
    if (
        req.nextUrl.pathname.startsWith('/_next') ||
        req.nextUrl.pathname.includes('/api/') ||
        PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
        return
    }

    return createMiddleware({
        locales: LOCALES,
        defaultLocale: DEFAULT_LOCAL,
        localePrefix: 'always'
    })(req)
}