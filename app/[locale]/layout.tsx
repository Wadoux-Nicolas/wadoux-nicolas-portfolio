import type {Metadata} from "next";
import {LOCALS} from "@/i18n";
import React from "react";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import "../global.css"

export default function LocaleLayout(
    {
        children,
        params: {locale}
    }: Readonly<{
        children: React.ReactNode;
        params: { locale: string };
    }>
) {
    return (
        <html lang={locale}>
            <body>
                {children}
            </body>
        </html>
    );
}

export function generateStaticParams() {
    return LOCALS.map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({locale, namespace: 'Metadata'});

    return {
        title: t('title'),
        description: t('description'),
    };
}