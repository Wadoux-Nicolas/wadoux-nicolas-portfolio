'use client';

import {useTranslations} from 'next-intl';

import styles from './Hello.module.scss';
import SectionCentered from "@/components/sectionCentered/SectionCentered";
import Button from "@/components/button/Button";

export default function Hello() {
    const t = useTranslations();

    return (
        <article>
            <SectionCentered>
                <div className={styles.helloContent}>
                    <div>
                        <div className={styles.line}/>
                        <p className={styles.hello}>{t('hello')}</p>
                        <p className={styles.onRight}>
                            <span className={styles.iAm}>{t('i-am')} </span>
                            <span className={styles.name}>Nicolas Wadoux</span>
                        </p>
                        <div className={`${styles.line} ${styles.line__bottom}`}/>
                    </div>
                    <h1 className={styles.job} dangerouslySetInnerHTML={{
                        __html:
                            t.rich('web-mobile-dev', {
                                important: (chunks) => `<span>${chunks}</span>`
                            })
                    }}/>
                    <div className={styles.actions}>
                        <Button
                            aria-label={t('get-in-touch')}
                            shape='pill'
                            component='a'
                        >{t('get-in-touch')}</Button>
                        <Button
                            aria-label={t('download-cv')}
                            type='secondary'
                            shape='circle'
                            component='a'
                        >{t('cv')}</Button>
                        <Button
                            shape='circle'
                            component='a'
                            aria-label='LinkedIn'
                            componentProps={{
                                href: 'https://www.linkedin.com/in/nicolas-wadoux-5b8271193/',
                                target: '_blank'
                            }}
                            style={{
                                backgroundImage: 'url(/icons/linkedin.svg)',
                                backgroundSize: 'cover'
                            }}
                        />
                        <Button
                            shape='circle'
                            component='a'
                            aria-label='GitHub'
                            componentProps={{
                                href: 'https://github.com/Wadoux-Nicolas?tab=repositories',
                                target: '_blank'
                            }}
                            style={{
                                backgroundImage: 'url(/icons/github.svg)',
                                backgroundSize: 'cover',
                                backgroundColor: 'white'
                            }}
                        />
                    </div>
                </div>
            </SectionCentered>
        </article>
    )
}