'use client';

import {useTranslations} from 'next-intl';
import React from "react";
import SectionCentered from "@/components/sectionCentered/sectionCentered";

import styles from "./not-found.module.scss";

export default function NotFoundPage() {
    const t = useTranslations();
    return (
        <SectionCentered>
            <h1 className={styles.notFoundTitle}>{t('page-not-found')}</h1>
            <p className={styles.notFoundText}>{t('missing-page')}</p>
        </SectionCentered>
    );
}