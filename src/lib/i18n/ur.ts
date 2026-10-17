/* eslint-disable */
/**
 * Urdu UI strings (partial, hand-translated Oct 2026; under native review, see
 * docs/i18n/ur-review.md). The mobile app (zaibaitech/asrar-mobile) has no Urdu,
 * so nothing here is reused from it.
 *
 * Only the shared navigation and common keys live here; the tool UI on the
 * /ur pages is translated by the Urdu catalog (public/i18n/ur-ui.json, same
 * exact-match mechanism as Arabic). Anything missing falls back to English.
 * Divine Names, Qur'an and du'a stay in Arabic.
 */
import type { DeepPartial } from './types';
import type { en } from './en';

export const ur: DeepPartial<typeof en> = {
  nav: {
    home: "ہوم",
    calculator: "حساب",
    letterCalculator: "حروف کا حساب",
    compatibility: "مطابقت",
    planetaryHours: "ساعاتِ کواکب",
    planetary: "کواکب کی ہم آہنگی",
    about: "تعارف",
    guidance: "زندگی کی رہنمائی",
    advanced: "میں کون ہوں؟",
    menu: "مینو",
  },
  common: {
    calculate: "حساب کریں",
    clear: "صاف کریں",
    submit: "جمع کریں",
    cancel: "منسوخ کریں",
    close: "بند کریں",
    save: "محفوظ کریں",
    loading: "لوڈ ہو رہا ہے...",
    error: "خرابی",
    success: "کامیابی",
    name: "نام",
    date: "تاریخ",
    location: "مقام",
    enterName: "نام لکھیں",
    selectDate: "تاریخ منتخب کریں",
    results: "نتائج",
    history: "سابقہ حسابات",
    favorites: "پسندیدہ",
    compare: "موازنہ کریں",
    delete: "حذف کریں",
    copy: "کاپی کریں",
    copied: "کاپی ہو گیا!",
    viewAll: "سب دیکھیں",
    hideAll: "سب چھپائیں",
    expand: "کھولیں",
    collapse: "سمیٹیں",
    next: "اگلا",
    back: "واپس",
    skip: "چھوڑیں",
    edit: "ترمیم کریں",
    upload: "اپ لوڈ کریں",
    remove: "ہٹائیں",
    optional: "اختیاری",
  },
};
