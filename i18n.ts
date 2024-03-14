import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {LOCALES} from "@/navigation";


export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!LOCALES.includes(locale as any)) notFound();

    return {
        messages: (await import(`./lang/${locale}.json`)).default
    };
});