'use client';

import {ChangeEvent} from 'react';
import {useRouter, usePathname, LOCALES, LOCALE_NAMES} from '@/navigation';
import {useLocale} from "use-intl";
import styles from "./LanguageSelector.module.scss";
import Icon from "@/components/Icon";

export default function LanguageSelector() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const onLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value;
        router.replace(pathname, {locale: nextLocale});
    }

    return (
        <div
            className={styles.languageSelector}
        >
            <Icon
                name="planet"
            />
            <p>{locale.toUpperCase()}</p>
            <select
                onChange={onLanguageChange}
                value={locale}
            >
                {LOCALES.map((locale) => (
                    <option key={locale} value={locale} aria-description={LOCALE_NAMES[locale]}>
                        {locale.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
}