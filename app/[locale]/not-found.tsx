'use client';

import {useTranslations} from 'next-intl';
import React from "react";

export default function NotFoundPage() {
    const t = useTranslations();
    return (
        <>
            <h1>{t('page-not-found')}</h1>
            <p>{t('missing-page')}</p>
        </>
    );
}