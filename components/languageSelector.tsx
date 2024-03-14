'use client';

import {ChangeEvent} from 'react';
import {useRouter, usePathname, LOCALES, LOCALE_NAMES} from '@/navigation';
import {useLocale} from "use-intl";

export default function LanguageSelector() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const onLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value;
        router.replace(pathname, {locale: nextLocale});
    }

    return (
        <select
            onChange={onLanguageChange}
            value={locale}
        >
            {LOCALES.map((locale) => (
                <option key={locale} value={locale}>
                    {LOCALE_NAMES[locale]}
                </option>
            ))}
        </select>
    );
}