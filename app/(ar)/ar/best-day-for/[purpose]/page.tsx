/**
 * /ar app mirror: the English route served with the Arabic UI. Lives in the (ar)
 * route group so the server renders <html lang="ar" dir="rtl">; middleware
 * sets ROUTE_LANG_HEADER=ar so the page and its metadata resolve to Arabic.
 */
export { default, generateMetadata } from '@/app/(site)/best-day-for/[purpose]/page';

export const dynamic = 'force-dynamic';
