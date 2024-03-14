import {useTranslations} from 'next-intl';

export default function NotFoundPage() {
    const t = useTranslations();
    return (
        <>
            <h1>{t('page-not-found')}</h1>
            <p>{t('missing-page')}</p>
        </>
    );
}