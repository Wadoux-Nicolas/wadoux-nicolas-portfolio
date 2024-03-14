import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const LOCALS = ['fr', 'en', 'es'];
export const DEFAULT_LOCAL = 'fr';

export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!LOCALS.includes(locale as any)) notFound();

    return {
        messages: (await import(`./lang/${locale}.json`)).default
    };
});