import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const LOCALE_NAMES: Record<string, string> = {
    fr: 'Français',
    en: 'English',
    es: 'Español'
}
export const LOCALES = ['fr', 'en', 'es'];
export const DEFAULT_LOCAL = 'fr';
export const LOCALE_PREFIX = 'always'; // Default

export const {Link, redirect, usePathname, useRouter} =
    createSharedPathnamesNavigation({locales: LOCALES, localePrefix: LOCALE_PREFIX});