import {useTranslations} from 'next-intl';

export default function Hello() {
    const t = useTranslations();
    return <h1>{t('hello')}</h1>;
}