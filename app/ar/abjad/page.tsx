import type { Metadata } from 'next';
import type { FaqItem } from '@/src/components/seo/SeoSections';
import { AbjadCalculator } from '@/app/abjad/AbjadCalculator';
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

const EN_PATH = '/abjad';

export const metadata: Metadata = arabicMetadata(EN_PATH, 'abjad', {
  title: 'حساب الجمل: حاسبة الأبجد المغربي والمشرقي',
  description:
    'احسب قيمة أي اسم أو عبارة عربية بحساب الجمل (الأبجد الكبير) بالترتيب المغربي أو المشرقي، مع قيمة كل حرف وتوازن العناصر الأربعة. للتأمّل والتعلّم.',
});

const FAQS: FaqItem[] = [
  {
    q: 'ما هو حساب الجمل؟',
    a: 'هو جمع القيم العددية لحروف الكلمة وفق نظام الأبجد، إذ يُجعل لكل حرف من حروف العربية قيمة ثابتة: الألف 1، والباء 2، والجيم 3، وهكذا حتى الغين 1000. وقد استُعمل هذا الحساب قرونًا في العلوم الإسلامية.',
  },
  {
    q: 'ما الفرق بين حساب الجمل المغربي والمشرقي؟',
    a: 'هما ترتيبان تقليديان لحروف الأبجد: المشرقي المستعمل في المشرق، والمغربي المستعمل في شمال أفريقيا وغربها. ويختلفان في قيم بعض الحروف، فقد يعطي الاسم الواحد مجموعين مختلفين. وتدعم الحاسبة الترتيبين، ويمكنك التبديل بينهما من الزر الموجود أعلاها.',
  },
  {
    q: 'كيف أحسب قيمة اسمي بحساب الجمل؟',
    a: 'اكتب اسمك بالحروف العربية في الحاسبة، فتجمع قيم حروفه بعد إهمال علامات التشكيل. مثال: محمد = م (40) + ح (8) + م (40) + د (4) = 92. ويمكنك أيضًا كتابة الاسم بالحروف اللاتينية لتحوّله الأداة إلى الحروف العربية.',
  },
  {
    q: 'كيف تُحسب التاء المربوطة؟',
    a: 'تُحسب التاء المربوطة (ة) في هذه الحاسبة بقيمة الهاء (5)، لا بقيمة التاء (400).',
  },
  {
    q: 'هل حساب الجمل وسيلة لمعرفة الغيب؟',
    a: 'لا. القيم العددية للحروف موضوع تأمّل وتعلّم في تراث علم الحروف، وليست تنبّؤًا ولا حكمًا على المستقبل؛ ولا يعلم الغيب إلا الله.',
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <ArabicHeader
        h1="حساب الجمل: حاسبة الأبجد المغربي والمشرقي"
        lead="احسب قيمة اسمك أو أي عبارة عربية بحساب الجمل، واختر الترتيب المغربي أو المشرقي، ثم اطّلع على قيمة كل حرف وتوازن العناصر."
      />

      {/* The same calculator as /abjad, unchanged (its UI is English/French). */}
      <div dir="ltr" className="max-w-3xl mx-auto px-4">
        <AbjadCalculator />
      </div>

      <ArabicBody>
        <ArabicSection id="abjad-what" title="ما هو حساب الجمل؟">
          <p>
            يجعل نظام الأبجد لكل حرف من حروف العربية قيمة عددية: الألف 1، والباء 2، والجيم 3، وهكذا حتى الغين 1000.
            ومجموع قيم حروف الكلمة هو «حساب الجمل»، وهو الحساب الذي استُعمل قرونًا في العلوم الإسلامية.
          </p>
        </ArabicSection>

        <ArabicSection id="abjad-traditions" title="الترتيب المغربي والترتيب المشرقي">
          <p>
            في علم الحروف وعلم الأعداد درس العلماء القيم العددية لأسماء الله الحسنى والعبارات القرآنية وأسماء الأشخاص،
            وربطوا الحروف بالعناصر الأربعة: النار والهواء والماء والتراب. وهناك ترتيبان شائعان: الترتيب المشرقي المستعمل
            في المشرق، والترتيب المغربي المستعمل في شمال أفريقيا وغربها. وتدعم هذه الحاسبة الترتيبين لتقارن بين النتيجتين.
          </p>
        </ArabicSection>

        <ArabicSection id="abjad-how" title="طريقة استعمال الحاسبة">
          <p>
            اختر نوع الحساب، ثم اكتب الاسم أو العبارة بالحروف العربية (أو بالحروف اللاتينية لتحوّلها الأداة إلى العربية)،
            واقرأ المجموع، وتفصيل قيمة كل حرف، وتحليل العناصر.
          </p>
          <p>مثال: محمد = م (40) + ح (8) + م (40) + د (4) = 92.</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{AR_DISCLAIMER}</p>
        </ArabicSection>

        <ArabicFaq id="abjad-faq" faqs={FAQS} />
        <ArabicLinks links={[...otherArabicPages('abjad'), ...toolPageLinks(EN_PATH, 'Abjad Calculator', 'Calculateur Abjad')]} />
      </ArabicBody>
    </div>
  );
}
