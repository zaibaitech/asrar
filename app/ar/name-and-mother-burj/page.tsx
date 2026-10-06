import type { Metadata } from 'next';
import type { FaqItem } from '@/src/components/seo/SeoSections';
import { BurjCalculator } from '@/app/name-and-mother-burj/BurjCalculator';
import { BURJ_NAMES_AR, getBurujData } from '@/src/features/istikhara/calculations';
import {
  AR_ELEMENTS,
  AR_WEEKDAYS,
  ArabicBody,
  ArabicFaq,
  ArabicHeader,
  ArabicLinks,
  ArabicSection,
  arabicMetadata,
  otherArabicPages,
  toolPageLinks,
} from '../_shared/ArabicLanding';

const EN_PATH = '/name-and-mother-burj';

export const metadata: Metadata = arabicMetadata(EN_PATH, 'name-and-mother-burj', {
  title: 'برجك من اسمك واسم أمك: حاسبة البرج بحساب الجمل',
  description:
    'اعرف برجك (طبعك) من قيمة اسمك واسم أمك بحساب الجمل: العنصر والطبع واليوم المبارك والذكر والصدقة. حاسبة مجانية للتأمّل، لا للتنبّؤ.',
});

/** The 12 burūj from the same burujData.json the calculator uses (element, blessed day, dhikr). */
function burujRows() {
  return Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    const p = getBurujData(n);
    const names = p.spiritual_practice.divine_names;
    const dayNumber = p.blessed_day.day_number;
    return {
      n,
      name: BURJ_NAMES_AR[i],
      element: AR_ELEMENTS[p.element] ?? p.element,
      day: dayNumber != null ? AR_WEEKDAYS[dayNumber] : '',
      dhikr: 'arabic' in names ? names.arabic : '',
    };
  });
}

const FAQS: FaqItem[] = [
  {
    q: 'كيف أعرف برجي من اسمي واسم أمي؟',
    a: 'اجمع قيمة اسمك بحساب الجمل إلى قيمة اسم أمك، ثم اقسم المجموع على 12 واحتفظ بالباقي (والصفر يُعدّ 12). فالباقي 1 هو الحمل، و2 الثور، و3 الجوزاء، وهكذا حتى 12 وهو الحوت. والحاسبة أعلاه تجري الحساب عنك.',
  },
  {
    q: 'لماذا يُستعمل اسم الأم؟',
    a: 'في علم الحروف يُقرأ اسمك دالًّا على ذاتك، واسم أمك دالًّا على ما يحيط بك: الإرث العائلي وظروف طريقك، ومن الجمع بينهما يُستخرج البرج. وهذه الطريقة معروفة في الممارسة العربية وفي غرب أفريقيا (عند الهوسا والولوف) وفي جنوب آسيا.',
  },
  {
    q: 'هل هذا هو الاستخارة؟',
    a: 'لا. الاستخارة هي صلاة طلب الخِيَرة من الله (صلاة الاستخارة). أما اسم «استخارة الأسماء» فاسم تقليدي، وهذا الحساب تأمّل في الأسماء والطباع، وليس صلاةً ولا وسيلةً لمعرفة الغيب.',
  },
  {
    q: 'هل برج الاسم هو نفسه برجي بحسب تاريخ الميلاد؟',
    a: 'ليس بالضرورة. فبرج الاسم يُستخرج من قيم حروف الاسمين فقط، أما البرج بحسب تاريخ الميلاد فيُستخرج من موضع الشمس يوم ولادتك، وقد يختلفان. والأداة تتيح الطريقتين.',
  },
  {
    q: 'ماذا يخبرني برجي؟',
    a: 'عنصرك وطبعك، ويومًا مباركًا من أيام الأسبوع، واسمًا من أسماء الله الحسنى تذكره، وصدقةً تقليدية. فاقرأه تشجيعًا على العمل الصالح ومعرفة النفس، لا توقّعًا للمستقبل.',
  },
];

export default function Page() {
  const rows = burujRows();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <ArabicHeader
        h1="برجك من اسمك واسم أمك"
        lead="اكتب اسمك واسم أمك لتعرف برجك بحساب الجمل، مع العنصر والطبع واليوم المبارك والذكر والصدقة المناسبة لبرجك."
      />

      {/* The same "Who Am I?" calculator as /name-and-mother-burj, unchanged (its UI is English/French). */}
      <div dir="ltr">
        <BurjCalculator />
      </div>

      <ArabicBody>
        <ArabicSection id="burj-how" title="كيف يُحسب البرج؟">
          <ol className="list-decimal pr-5 space-y-1">
            <li>اكتب اسمك واسم أمك بالحروف العربية (أو بالحروف اللاتينية ثم اختر الكتابة العربية).</li>
            <li>يُحوَّل كل اسم إلى مجموعه بحساب الجمل وفق القيم المغربية للحروف.</li>
            <li>اجمع المجموعين واقسم الناتج على 12؛ فالباقي (من 1 إلى 12، والصفر يُعدّ 12) هو برجك، من 1 = الحمل إلى 12 = الحوت.</li>
            <li>يدلّ البرج على عنصرك (النار أو التراب أو الهواء أو الماء) الذي يصف طبعك، ويرتبط بيوم مبارك وذكر وصدقة.</li>
          </ol>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">مثال محلول</h3>
          <p>محمد = 92، وفاطمة = 135. والمجموع 92 + 135 = 227، و227 ÷ 12 = 18 والباقي 11، فالبرج هو 11: الدلو، وهو برج هوائي.</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            لا تعرف كتابة اسم أمك بالعربية؟ يمكن للأداة أيضًا أن تحسب برجك من تاريخ ميلادك (البروج المدارية).
          </p>
        </ArabicSection>

        <ArabicSection id="burj-istikhara" title="ليست صلاة الاستخارة">
          <p>
            الاسم التقليدي لهذا التأمّل هو «استخارة الأسماء»، لكنه ليس الاستخارة: فالاستخارة الحقيقية هي صلاة الاستخارة،
            أي الركعتان والدعاء اللذان علّمهما النبي ﷺ. استعمل هذه الأداة للتأمّل والتعلّم، لا للتنبّؤ؛ ولا يعلم الغيب إلا الله.
          </p>
        </ArabicSection>

        <ArabicSection id="buruj-table" title="البروج الاثنا عشر في لمحة">
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-right text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <th scope="col" className="px-3 py-2 font-semibold">البرج</th>
                  <th scope="col" className="px-3 py-2 font-semibold">العنصر</th>
                  <th scope="col" className="px-3 py-2 font-semibold">اليوم المبارك</th>
                  <th scope="col" className="px-3 py-2 font-semibold">الذكر</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.n} id={`burj-${r.n}`} className="border-t border-slate-200 dark:border-slate-700 align-top bg-white dark:bg-slate-900">
                    <th scope="row" className="px-3 py-2 font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                      {r.n}. {r.name}
                    </th>
                    <td className="px-3 py-2 whitespace-nowrap">{r.element}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.day}</td>
                    <td className="px-3 py-2">{r.dhikr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ArabicSection>

        <ArabicFaq id="burj-faq" faqs={FAQS} />
        <ArabicLinks
          links={[
            ...otherArabicPages('burj'),
            ...toolPageLinks(EN_PATH, "Find Your Burj from Your Name & Mother's Name", 'Votre burj avec votre nom et celui de votre mère'),
          ]}
        />
      </ArabicBody>
    </div>
  );
}
