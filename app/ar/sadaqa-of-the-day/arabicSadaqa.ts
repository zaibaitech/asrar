/**
 * Arabic rendering of the existing SADAQAH_BY_DAY guidance
 * (src/features/calculator/lib/sadaqahByDay.ts). Same days, same items, same
 * order: a translation of the English text, nothing added. The Wolof-specific
 * notes are not translated. arabicSadaqa.test.ts keeps it in step with the source.
 */
export interface ArabicDaySadaqa {
  day: number;
  intro: string;
  items: string[];
}

export const AR_SADAQAH_BY_DAY: readonly ArabicDaySadaqa[] = [
  {
    day: 0,
    intro: 'الصدقة المستحبة يوم الأحد:',
    items: ['جمع الأطفال وإطعامهم صدقةً', 'مساعدة كل فقير أو محتاج'],
  },
  {
    day: 1,
    intro: 'الصدقة المستحبة يوم الاثنين:',
    items: ['التصدق بالماء', 'مساعدة شخص مسنّ أو امرأة أو أطفال', 'إطعام الأطفال أو التصدق عليهم في المساء'],
  },
  {
    day: 2,
    intro: 'يُستحب يوم الثلاثاء للصدقة بنيّة الشفاء والحفظ، ومن صورها:',
    items: [
      'إطعام الأطفال',
      'مساعدة من يمرّ بضائقة',
      'مساعدة شخص على شراء دوائه',
      'المساهمة في نفقات علاج أحدٍ أو دوائه',
    ],
  },
  {
    day: 3,
    intro: 'الصدقة المستحبة يوم الأربعاء:',
    items: ['التصدق بورق أبيض وأقلام', 'إطعام الأطفال'],
  },
  {
    day: 4,
    intro: 'يُعدّ يوم الخميس مناسبًا للصدقة بنيّة فتح الطريق إلى الرزق والتوفيق أو رفع العوائق، ومن الأعمال المستحبة فيه:',
    items: ['إطعام المحتاجين', 'التصدق بالمال', 'دعم مسجد', 'المساعدة في تنظيف مسجد', 'التطوع بخدمةٍ في المسجد'],
  },
  {
    day: 5,
    intro: 'يرتبط يوم الجمعة بكوكب الزهرة، ويُعدّ يومًا مناسبًا للصدقة، ومن المستحب فيه التصدق بـ:',
    items: ['الملابس', 'الصابون', 'العطر'],
  },
  {
    day: 6,
    intro: 'يُستحب يوم السبت لمساعدة الفقراء والمحتاجين، ومن الصدقات المستحبة فيه:',
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
