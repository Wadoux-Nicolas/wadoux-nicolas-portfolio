'use client';

import {useTranslations} from 'next-intl';
import React from "react";
import SectionCentered from "@/components/sectionCentered/SectionCentered";

import styles from "./not-found.module.scss";
import Button from "@/components/button/Button";
import {useRouter} from "@/navigation";

export default function NotFoundPage() {
    const t = useTranslations();
    const router = useRouter();

    const handleBackToHome = () => {
        router.push('/');
    }

    return (
        <SectionCentered>
            <div className={styles.hCentered}>
                <h1 className={styles.notFoundTitle}>{t('page-not-found')}</h1>
                <p className={styles.notFoundText}>{t('missing-page')}</p>
                <Button
                    onClick={handleBackToHome}
                >
                    {t('back-to-home')}
                </Button>
            </div>
        </SectionCentered>
    );
}