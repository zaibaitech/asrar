import type { Metadata } from 'next';
import type { FaqItem } from '@/src/components/seo/SeoSections';
import { SadaqaDateChecker } from '@/src/components/sadaqa/SadaqaDateChecker';
import { ArabicTodaySadaqa } from './ArabicTodaySadaqa';
import { arabicItemsFor } from './arabicSadaqa';
import {
  AR_DISCLAIMER,
  ArabicBody,
  ArabicFaq,
  ArabicHeader,
  ArabicLinks,
  ArabicSection,
  arabicMetadata,
  otherArabicPages,
  toolPageLinks,
} from '../_shared/ArabicLanding';

// Same as /sadaqa-of-the-day: the server-rendered "today" must not be cached for days.
export const dynamic = 'force-dynamic';

const EN_PATH = '/sadaqa-of-the-day';

export const metadata: Metadata = arabicMetadata(EN_PATH, 'sadaqa-of-the-day', {
  title: 'صدقة اليوم: الصدقة المستحبة لكل يوم من أيام الأسبوع',
  description:
    'صدقة اليوم وجدول الأسبوع كاملًا: الماء يوم الاثنين، والشفاء يوم الثلاثاء، وفتح الطريق يوم الخميس، والملابس والعطر يوم الجمعة. من تراث غرب أفريقيا، للتأمّل.',
});

const FAQS: FaqItem[] = [
  {
    q: 'ما المقصود بـ«صدقة اليوم»؟',
    a: 'هي صورة الصدقة (الصدقة التطوعية) المرتبطة تقليديًا بكل يوم من أيام الأسبوع في تعليمٍ متوارث في غرب أفريقيا (السنغال، عند الولوف). وتعرض هذه الصفحة صدقة اليوم وجدول الأيام السبعة.',
  },
  {
    q: 'ما أفضل يوم للصدقة؟',
    a: 'الصدقة خيرٌ في كل يوم، ويعتاد كثير من المسلمين التصدق يوم الجمعة. وفي هذا التراث يرتبط يوم الثلاثاء بالشفاء والحفظ، ويوم الخميس بفتح الطريق ورفع العوائق. ولا تؤخّر صدقتك لأن اليوم ليس «اليوم المناسب».',
  },
  {
    q: 'ما الصدقة المستحبة يوم الاثنين؟',
    a: `يُستحب في هذا التراث يوم الاثنين: ${arabicItemsFor(1)}.`,
  },
  {
    q: 'ما الصدقة المستحبة يوم الجمعة؟',
    a: `يرتبط يوم الجمعة بكوكب الزهرة، ومن الصدقات المستحبة فيه: ${arabicItemsFor(5)}.`,
  },
  {
    q: 'هل يمكنني الاعتماد على يوم ميلادي؟',
    a: 'نعم. يمكن قراءة هذا الدليل بحسب اليوم الذي تنوي التصدق فيه، أو بحسب يوم الأسبوع الذي وُلدت فيه. أدخل تاريخًا في أداة التحقق أعلاه لتعرف اليوم الموافق له.',
  },
  {
    q: 'هل هذه الصدقة واجبة أو تضمن نتيجة معيّنة؟',
    a: 'لا. هذه اقتراحات متوارثة للتأمّل. والصدقة تُعطى خالصةً لله في أي يوم، ولا تضمن نتيجة بعينها؛ ولا يعلم الغيب إلا الله.',
  },
];

export default function Page() {
  // Server default for the highlight (UTC, i.e. Senegal time); the client re-checks local time.
  const serverDay = new Date().getUTCDay();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <ArabicHeader
        h1="صدقة اليوم"
        lead="اعرف الصدقة المستحبة لهذا اليوم بحسب تراث غرب أفريقيا، مع جدول كامل لأيام الأسبوع، من صدقة يوم الاثنين إلى صدقة يوم الجمعة."
        note=""
      />

      <div lang="ar" dir="rtl" className="font-arabic max-w-2xl mx-auto px-4">
        <ArabicTodaySadaqa serverDay={serverDay} />
      </div>

      <section aria-labelledby="sadaqa-checker-heading" className="max-w-2xl mx-auto px-4 pt-8 space-y-3">
        <div lang="ar" dir="rtl" className="font-arabic space-y-1">
          <h2 id="sadaqa-checker-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            تحقّق من تاريخ آخر
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            اختر اليوم الذي تنوي التصدق فيه أو تاريخ ميلادك. (واجهة الأداة بالإنجليزية.)
          </p>
        </div>
        {/* The same date checker as /sadaqa-of-the-day, unchanged (English UI). */}
        <div dir="ltr">
          <SadaqaDateChecker lang="en" mode="day" />
        </div>
      </section>

      <ArabicBody>
        <ArabicSection id="sadaqa-about" title="عن هذا الدليل">
          <p>
            يربط هذا التعليم المتوارث في غرب أفريقيا (السنغال، عند الولوف) كل يوم من أيام الأسبوع بصورة من صور الصدقة:
            الماء يوم الاثنين، ومساعدة المريض على دوائه يوم الثلاثاء، والورق الأبيض والأقلام يوم الأربعاء، ودعم المساجد
            يوم الخميس، والملابس والصابون والعطر يوم الجمعة. وهي اقتراحات للتأمّل والعمل الصالح، والصدقة مقبولة في كل يوم.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{AR_DISCLAIMER}</p>
        </ArabicSection>

        <ArabicFaq id="sadaqa-day-faq" faqs={FAQS} />
        <ArabicLinks
          links={[...otherArabicPages('sadaqa'), ...toolPageLinks(EN_PATH, 'Sadaqa of the Day', 'Sadaqa du jour')]}
        />
      </ArabicBody>
    </div>
  );
}
