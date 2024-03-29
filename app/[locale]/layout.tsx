import type {Metadata} from "next";
import {LOCALES} from "@/navigation";
import React from "react";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {NextIntlClientProvider, useMessages} from "next-intl";
import LanguageSelector from "@/components/languageSelector/languageSelector";

import "../../scss/global.scss"
import styles from "./layout.module.scss";
import { Itim } from 'next/font/google'

const itim = Itim({weight: '400', subsets: ['latin']});

export default function LocaleLayout(
    {
        children,
        params: {locale}
    }: Readonly<{
        children: React.ReactNode;
        params: { locale: string };
    }>
) {
    unstable_setRequestLocale(locale);
    const messages = useMessages();

    return (
        <html lang={locale}>
            <body>
                <main className={itim.className}>
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        {children}
                        <div className={styles.languageSelector}>
                            <LanguageSelector/>
                        </div>
                    </NextIntlClientProvider>
                </main>
            </body>
        </html>
    );
}

export function generateStaticParams() {
    return LOCALES.map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({locale, namespace: 'Metadata'});

    return {
        title: t('title'),
        description: t('description'),
    };
}