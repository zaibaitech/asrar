/**
 * Arabic rendering of the existing SADAQAH_BY_DAY guidance
 * (src/features/calculator/lib/sadaqahByDay.ts). Same days, same items, same
 * order: a translation of the English text, nothing added. Locale-specific
 * notes in the source are not translated. arabicSadaqa.test.ts keeps it in step with the source.
 */
export interface ArabicDaySadaqa {
  day: number;
  intro: string;
  items: string[];
}

export const AR_SADAQAH_BY_DAY: readonly ArabicDaySadaqa[] = [
  {
    day: 0,
    intro: 'الصدقة المقترحة يوم الأحد:',
    items: ['جمع الأطفال وإطعامهم صدقةً', 'مساعدة كل فقير أو محتاج'],
  },
  {
    day: 1,
    intro: 'الصدقة المقترحة يوم الاثنين:',
    items: ['التصدق بالماء', 'مساعدة شخص مسنّ أو امرأة أو أطفال', 'إطعام الأطفال أو التصدق عليهم في المساء'],
  },
  {
    day: 2,
    intro: 'يُقترح يوم الثلاثاء في هذا التقليد للصدقة رجاءَ العافية والتيسير، ومن صورها:',
    items: [
      'إطعام الأطفال',
      'مساعدة من يمرّ بضائقة',
      'مساعدة شخص على شراء دوائه',
      'المساهمة في نفقات علاج أحدٍ أو دوائه',
    ],
  },
  {
    day: 3,
    intro: 'الصدقة المقترحة يوم الأربعاء:',
    items: ['التصدق بورق أبيض وأقلام', 'إطعام الأطفال'],
  },
  {
    day: 4,
    intro: 'يُعدّ يوم الخميس في هذا التقليد مناسبًا للصدقة رجاءَ فتح الطريق إلى الرزق والتوفيق أو رفع العوائق، ومن الأعمال المقترحة فيه:',
    items: ['إطعام المحتاجين', 'التصدق بالمال', 'دعم مسجد', 'المساعدة في تنظيف مسجد', 'التطوع بخدمةٍ في المسجد'],
  },
  {
    day: 5,
    intro: 'يُعدّ يوم الجمعة يومًا مناسبًا للصدقة، ومن المقترح فيه التصدق بـ:',
    items: ['الملابس', 'الصابون', 'العطر'],
  },
  {
    day: 6,
    intro: 'يُقترح يوم السبت في هذا التقليد لمساعدة الفقراء والمحتاجين، ومن الصدقات المقترحة فيه:',
    items: [
      'التصدق بالمواد الغذائية الأساسية كالأرز والزيت وغيرهما من الضروريات',
      'مساعدة شخص مسنّ في قضاء حاجاته',
      'تقديم عون مالي لمن يمرّ بضائقة',
    ],
  },
];

/** Items for a weekday joined as an Arabic list ("أ، وب، وج"). */
export function arabicItemsFor(day: number): string {
  const items = AR_SADAQAH_BY_DAY[day].items;
  return items.map((it, i) => (i === 0 ? it : `و${it}`)).join('، ');
}
