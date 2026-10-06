import type { Metadata } from 'next';
import { Suspense } from 'react';
import type { FaqItem } from '@/src/components/seo/SeoSections';
import { PlanetaryHoursPage } from '@/app/planetary-hours/PlanetaryHoursPage';
import {
  AR_DISCLAIMER,
  AR_ELEMENTS,
  ArabicBody,
  ArabicFaq,
  ArabicHeader,
  ArabicLinks,
  ArabicSection,
  arabicMetadata,
  otherArabicPages,
  toolPageLinks,
} from '../_shared/ArabicLanding';

const EN_PATH = '/planetary-hours';

export const metadata: Metadata = arabicMetadata(EN_PATH, 'planetary-hours', {
  title: 'ساعات الكواكب اليوم: الساعات الكلدانية في علم النجوم',
  description:
    'اعرف الكوكب الحاكم للساعة الحالية في موقعك، ومواقيت ساعات النهار والليل الاثنتي عشرة وفق الترتيب الكلداني، وما يناسب كل كوكب من الأعمال. للتأمّل وتنظيم الوقت.',
});

/**
 * Translation of the planetary-hour guide shown by the tool
 * (PLANET_GUIDE in app/planetary-hours/PlanetaryHoursPage.tsx): day, element
 * and the first three "best for" items. Arabic planet names as in
 * src/lib/planetary/constants.ts.
 */
const PLANETS: { name: string; day: string; element: keyof typeof AR_ELEMENTS; bestFor: string }[] = [
  { name: 'الشمس', day: 'الأحد', element: 'fire', bestFor: 'قرارات القيادة، والظهور والسمعة، والشؤون الرسمية' },
  { name: 'القمر', day: 'الاثنين', element: 'water', bestFor: 'السفر والتنقّل، والشفاء العاطفي، وشؤون الأسرة' },
  { name: 'المريخ', day: 'الثلاثاء', element: 'fire', bestFor: 'الشجاعة والإقدام، والعمل البدني، وتجاوز العقبات' },
  { name: 'عطارد', day: 'الأربعاء', element: 'air', bestFor: 'الدراسة والتعلّم، والكتابة والتواصل، والتجارة والعقود' },
  { name: 'المشتري', day: 'الخميس', element: 'air', bestFor: 'الرزق والوفرة، والتوسّع والنموّ، والارتقاء الروحي' },
  { name: 'الزهرة', day: 'الجمعة', element: 'earth', bestFor: 'المحبّة والعلاقات، والجمال والفنّ، والوئام والسلام' },
  { name: 'زحل', day: 'السبت', element: 'earth', bestFor: 'التخطيط البعيد المدى، والانضباط والتنظيم، والأراضي والعقارات' },
];

const FAQS: FaqItem[] = [
  {
    q: 'ما هي ساعات الكواكب؟',
    a: 'في علم النجوم الإسلامي يُقسم كلٌّ من النهار والليل إلى اثنتي عشرة ساعة غير متساوية، يحكم كلَّ ساعة منها أحدُ الكواكب السبعة القديمة وفق الترتيب الكلداني. وتتغيّر مدة الساعة كل يوم بحسب وقتي الشروق والغروب.',
  },
  {
    q: 'كيف تُحسب مدة الساعة الكوكبية؟',
    a: 'تُقسم المدة من الشروق إلى الغروب على 12 فتنتج ساعات النهار، والمدة من الغروب إلى الشروق التالي على 12 فتنتج ساعات الليل؛ لذلك تختلف مدة الساعة من يوم إلى يوم ومن مكان إلى آخر. والأداة أعلاه تحسبها لموقعك.',
  },
  {
    q: 'أي كوكب يحكم الساعة الأولى من اليوم؟',
    a: 'الساعة الأولى من اليوم يحكمها كوكب ذلك اليوم: الشمس للأحد، والقمر للاثنين، والمريخ للثلاثاء، وعطارد للأربعاء، والمشتري للخميس، والزهرة للجمعة، وزحل للسبت.',
  },
  {
    q: 'ما هو الترتيب الكلداني؟',
    a: 'هو الترتيب الثابت الذي تتعاقب به الكواكب السبعة على الساعات: زحل، ثم المشتري، ثم المريخ، ثم الشمس، ثم الزهرة، ثم عطارد، ثم القمر، ثم تعود الدورة إلى زحل.',
  },
  {
    q: 'هل ساعات الكواكب ضربٌ من الكهانة؟',
    a: 'لا. ساعات الكواكب أداة تقليدية للتأمّل وتنظيم الأوقات استعملها علماء مسلمون، وليست ضربًا من العرافة أو الكهانة. استعملها لتنظيم جهودك مع التوكّل على الله دائمًا، وارجع إلى أهل العلم في الأحكام الشرعية.',
  },
];

function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-32 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900">
        <ArabicHeader
          h1="ساعات الكواكب اليوم"
          lead="اعرف الكوكب الحاكم للساعة الحالية في موقعك، ومدة كل ساعة من ساعات النهار والليل، وما يناسبها من الأعمال وفق علم النجوم الإسلامي."
        />
      </div>

      {/* The same planetary-hours tool as /planetary-hours, unchanged (its UI is English/French). */}
      <div dir="ltr">
        <Suspense fallback={<Loading />}>
          <PlanetaryHoursPage />
        </Suspense>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <ArabicBody>
          <ArabicSection id="hours-what" title="ما هي ساعات الكواكب؟">
            <p>
              في علم النجوم الإسلامي يُقسم كلٌّ من النهار والليل إلى اثنتي عشرة ساعة غير متساوية، يحكم كلَّ ساعة منها أحدُ
              الكواكب السبعة القديمة بالترتيب الكلداني: زحل ← المشتري ← المريخ ← الشمس ← الزهرة ← عطارد ← القمر. وتتغيّر
              مدة كل ساعة يوميًا بحسب وقتي الشروق والغروب، والساعة الأولى من اليوم يحكمها كوكب ذلك اليوم.
            </p>
          </ArabicSection>

          <ArabicSection id="hours-how" title="كيف تستعمل ساعات الكواكب؟">
            <ol className="list-decimal pr-5 space-y-1">
              <li>انظر إلى الساعة الكوكبية الحالية في الأداة، ولاحظ الكوكب الحاكم والعنصر والوقت المتبقي.</li>
              <li>وافِق بين العمل الذي تنويه وما يناسب الكوكب (انظر الجدول أدناه)، واجعل أعمالك المهمة في الساعات المناسبة لها.</li>
              <li>ابدأ بالبسملة وبالذكر المناسب لذلك الكوكب، فالنيّة هي الأهم.</li>
              <li>استعمل زر عرض جميع الساعات (<bdi>See All Hours</bdi>) لتخطّط مسبقًا لساعات اليوم كلها.</li>
            </ol>
            <p className="text-sm text-slate-500 dark:text-slate-400">{AR_DISCLAIMER}</p>
          </ArabicSection>

          <ArabicSection id="hours-guide" title="دليل الكواكب السبعة">
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-right text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <th scope="col" className="px-3 py-2 font-semibold">الكوكب</th>
                    <th scope="col" className="px-3 py-2 font-semibold">يومه</th>
                    <th scope="col" className="px-3 py-2 font-semibold">العنصر</th>
                    <th scope="col" className="px-3 py-2 font-semibold">يناسب</th>
                  </tr>
                </thead>
                <tbody>
                  {PLANETS.map((p) => (
                    <tr key={p.name} className="border-t border-slate-200 dark:border-slate-700 align-top bg-white dark:bg-slate-900">
                      <th scope="row" className="px-3 py-2 font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">{p.name}</th>
                      <td className="px-3 py-2 whitespace-nowrap">{p.day}</td>
                      <td className="px-3 py-2 whitespace-nowrap">{AR_ELEMENTS[p.element]}</td>
                      <td className="px-3 py-2">{p.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ArabicSection>

          <ArabicFaq id="hours-faq" faqs={FAQS} />
          <ArabicLinks
            links={[...otherArabicPages('hours'), ...toolPageLinks(EN_PATH, 'Planetary Hours Today', "Heures planétaires aujourd'hui")]}
          />
        </ArabicBody>
      </div>
    </>
  );
}
