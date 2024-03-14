import createMiddleware from 'next-intl/middleware';
import {DEFAULT_LOCAL, LOCALS} from "@/i18n";
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
        locales: LOCALS,
        defaultLocale: DEFAULT_LOCAL,
    })(req)
}