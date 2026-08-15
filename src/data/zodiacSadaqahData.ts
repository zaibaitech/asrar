/**
 * Zodiac (Burūj) Sadaqah — per-sign charity (sadaqah) recommendations
 * drawn from a West African (Wolof/Senegalese) spiritual tradition
 * linking each zodiac sign to specific forms of charity, timing, and
 * a companion teaching video (spoken in Wolof), per the teachings of
 * Seringe Mahdiou Niane.
 *
 * Every text field carries en/fr/ar. `ar` is stored for future use but
 * not yet rendered in the UI — the app's language toggle is currently
 * EN/FR only, same as each sign's own name field below.
 */

export type ZodiacSignId =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export const ZODIAC_SIGN_ORDER: ZodiacSignId[] = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces',
];

export const ZODIAC_SIGN_SYMBOL: Record<ZodiacSignId, string> = {
  aries: '♈',
  taurus: '♉',
  gemini: '♊',
  cancer: '♋',
  leo: '♌',
  virgo: '♍',
  libra: '♎',
  scorpio: '♏',
  sagittarius: '♐',
  capricorn: '♑',
  aquarius: '♒',
  pisces: '♓',
};

export interface LocalizedText {
  en: string;
  fr: string;
  ar: string;
}

export interface LocalizedList {
  en: string[];
  fr: string[];
  ar: string[];
}

export interface SadaqahForm {
  title: LocalizedText;
  body: LocalizedText;
  bullets?: LocalizedList;
}

export interface ZodiacTiming {
  day: LocalizedText;
  note: LocalizedText;
}

export interface ZodiacGuidance {
  title: LocalizedText;
  body: LocalizedText;
}

export interface ZodiacSadaqahEntry {
  id: ZodiacSignId;
  en: string;
  fr: string;
  ar: string;
  translit: string;
  rulingPlanet?: LocalizedText;
  generalNote?: LocalizedText;
  generalForms?: SadaqahForm[];
  specificForms: SadaqahForm[];
  timing?: ZodiacTiming;
  guidance?: ZodiacGuidance;
  summary?: LocalizedList;
  summaryNote?: LocalizedText;
  intention?: LocalizedText;
  videoId: string;
  altVideoId?: string;
}

export const ZODIAC_SADAQAH: Record<ZodiacSignId, ZodiacSadaqahEntry> = {
  aries: {
    id: 'aries',
    en: 'Aries', fr: 'Bélier', ar: 'الحمل', translit: 'Ḥamal',
    generalForms: [
      {
        title: { en: 'Hot Food Sadaqah', fr: 'Sadaqah de nourriture chaude', ar: 'صدقة الطعام الساخن' },
        body: {
          en: 'Giving hot, prepared food as sadaqah is a beneficial form of charity. The food can be given to children or to anyone who can benefit from it. This form of sadaqah is associated with feeding and providing nourishment.',
          fr: "Donner de la nourriture chaude et préparée en sadaqah est une forme de charité bénéfique. La nourriture peut être donnée à des enfants ou à toute personne pouvant en bénéficier. Cette forme de sadaqah est associée au fait de nourrir et d'apporter une subsistance.",
          ar: 'تقديم الطعام الساخن المُعَدّ كصدقة شكل مفيد من أشكال الصدقة. يمكن تقديم الطعام للأطفال أو لأي شخص يمكن أن يستفيد منه. يرتبط هذا النوع من الصدقة بالإطعام وتوفير الغذاء.',
        },
        bullets: {
          en: ['Rice', 'Porridge', 'Other hot, nourishing meals'],
          fr: ['Riz', 'Bouillie', 'Autres repas chauds et nourrissants'],
          ar: ['الأرز', 'العصيدة', 'وجبات ساخنة ومغذية أخرى'],
        },
      },
      {
        title: { en: 'Cold Water Sadaqah', fr: "Sadaqah d'eau fraîche", ar: 'صدقة الماء البارد' },
        body: {
          en: 'Giving cold water as sadaqah is another beneficial form of charity. The sadaqah specifically consists of providing cold drinking water to someone who can benefit from it.',
          fr: "Donner de l'eau fraîche en sadaqah est une autre forme de charité bénéfique. Cette sadaqah consiste spécifiquement à fournir de l'eau potable fraîche à une personne qui peut en bénéficier.",
          ar: 'تقديم الماء البارد كصدقة شكل آخر مفيد من أشكال الصدقة. تتمثل هذه الصدقة تحديدًا في توفير ماء الشرب البارد لشخص يمكن أن يستفيد منه.',
        },
      },
      {
        title: { en: 'Supporting an Athlete or Sportsman', fr: 'Soutenir un sportif', ar: 'دعم رياضي' },
        body: {
          en: 'Helping a sportsman or athlete can also be given as a form of sadaqah. The assistance should be given sincerely for the benefit of the person.',
          fr: "Aider un sportif ou un athlète peut également constituer une forme de sadaqah. Cette aide doit être apportée avec sincérité, pour le bénéfice de la personne.",
          ar: 'يمكن أيضًا اعتبار مساعدة رياضي أو لاعب شكلاً من أشكال الصدقة. ينبغي تقديم هذه المساعدة بإخلاص لمنفعة الشخص.',
        },
        bullets: {
          en: ['Buying them sports equipment or supplies', 'Helping with something needed for their training', 'Providing practical or financial assistance', 'Encouraging and supporting them in their sporting activities'],
          fr: ['Leur acheter du matériel ou des fournitures sportives', "Les aider avec quelque chose dont ils ont besoin pour leur entraînement", 'Fournir une aide pratique ou financière', 'Les encourager et les soutenir dans leurs activités sportives'],
          ar: ['شراء معدات أو لوازم رياضية له', 'المساعدة في شيء يحتاجه لتدريبه', 'تقديم مساعدة عملية أو مالية', 'تشجيعه ودعمه في أنشطته الرياضية'],
        },
      },
    ],
    specificForms: [
      {
        title: { en: 'Livestock Sadaqah', fr: 'Sadaqah de bétail', ar: 'صدقة الماشية' },
        body: {
          en: 'A form of sadaqah associated with Ḥamal is giving livestock. The animal may be raised and cared for in the household and then given as sadaqah.',
          fr: "Une forme de sadaqah associée à Ḥamal consiste à donner du bétail. L'animal peut être élevé et soigné au sein du foyer, puis donné en sadaqah.",
          ar: 'من أشكال الصدقة المرتبطة بالحمل تقديم الماشية كصدقة. يمكن تربية الحيوان والعناية به في المنزل ثم تقديمه كصدقة.',
        },
        bullets: {
          en: ['A sheep', 'A ram', 'A white sheep or ram', 'A sheep or ram of another colour'],
          fr: ['Une brebis', 'Un bélier', 'Une brebis ou un bélier blanc', 'Une brebis ou un bélier d\'une autre couleur'],
          ar: ['نعجة', 'كبش', 'نعجة أو كبش أبيض', 'نعجة أو كبش بلون آخر'],
        },
      },
      {
        title: { en: 'Worn Clothing Sadaqah', fr: 'Sadaqah de vêtements portés', ar: 'صدقة الثياب الملبوسة' },
        body: {
          en: 'Giving away clothing that you have personally worn — once, twice, or a small number of times. The important condition is that the clothing is still clean, usable, and in good condition. It is then given to another person who can benefit from wearing it. The emphasis is on giving clothing that has already been worn by the giver, rather than brand-new or completely unused clothing. This sadaqah is associated with protection and seeking benefit through charity.',
          fr: "Donner des vêtements que l'on a soi-même portés — une fois, deux fois, ou un petit nombre de fois. La condition importante est que le vêtement soit toujours propre, utilisable et en bon état. Il est ensuite donné à une autre personne qui peut en bénéficier en le portant. L'accent est mis sur le fait de donner des vêtements déjà portés par le donateur, plutôt que des vêtements neufs ou totalement inutilisés. Cette sadaqah est associée à la protection et à la recherche de bienfait par la charité.",
          ar: 'التصدق بملابس ارتداها المتصدق شخصيًا — مرة أو مرتين أو عددًا قليلاً من المرات. الشرط المهم هو أن يكون الثوب لا يزال نظيفًا وصالحًا للاستعمال وفي حالة جيدة. ثم يُعطى لشخص آخر يمكن أن يستفيد من ارتدائه. والتركيز هنا على تقديم ملابس سبق للمتصدق ارتداؤها، وليس ملابس جديدة أو لم تُستعمل إطلاقًا. ترتبط هذه الصدقة بالحماية وطلب النفع من خلال الصدقة.',
        },
      },
    ],
    videoId: '9QX0tEpB43Y',
  },

  taurus: {
    id: 'taurus',
    en: 'Taurus', fr: 'Taureau', ar: 'الثور', translit: 'al-Thawr',
    rulingPlanet: { en: 'Venus (al-Zuhrah / الزهرة)', fr: 'Vénus (al-Zuhrah / الزهرة)', ar: 'الزهرة' },
    specificForms: [
      {
        title: { en: 'One-Coloured Ram Sadaqah', fr: 'Sadaqah du bélier uni', ar: 'صدقة الكبش الأحادي اللون' },
        body: {
          en: 'A primary form of sadaqah associated with al-Thawr is giving a single-coloured ram. A white ram is particularly suitable. The ram is given as sadaqah to someone who can benefit from it.',
          fr: "Une forme principale de sadaqah associée à al-Thawr consiste à donner un bélier d'une seule couleur. Un bélier blanc est particulièrement adapté. Le bélier est donné en sadaqah à une personne qui peut en bénéficier.",
          ar: 'من أهم أشكال الصدقة المرتبطة بالثور تقديم كبش من لون واحد. الكبش الأبيض مناسب بشكل خاص. يُقدَّم الكبش كصدقة لشخص يمكن أن يستفيد منه.',
        },
      },
      {
        title: { en: 'Used Clothing Sadaqah — Protection', fr: 'Sadaqah de vêtements usagés — Protection', ar: 'صدقة الثياب المستعملة — الحماية' },
        body: {
          en: 'Giving away clothing that has already been worn, still in good and usable condition. This sadaqah is associated with protection and may be given with the intention of seeking protection through charity.',
          fr: "Donner des vêtements déjà portés, mais toujours en bon état et utilisables. Cette sadaqah est associée à la protection et peut être donnée avec l'intention de rechercher la protection à travers la charité.",
          ar: 'التصدق بملابس سبق ارتداؤها ولا تزال في حالة جيدة وصالحة للاستعمال. ترتبط هذه الصدقة بالحماية، ويمكن تقديمها بنية طلب الحماية من خلال الصدقة.',
        },
      },
      {
        title: { en: 'Grains and Agricultural Produce', fr: 'Céréales et produits agricoles', ar: 'الحبوب والمحاصيل الزراعية' },
        body: {
          en: 'Giving things grown from the ground, particularly staple agricultural foods, directly to people in need.',
          fr: "Donner directement aux personnes dans le besoin des produits de la terre, en particulier des denrées agricoles de base.",
          ar: 'تقديم ما ينبت من الأرض، وخاصة المواد الغذائية الزراعية الأساسية، مباشرة للمحتاجين.',
        },
        bullets: {
          en: ['Rice', 'Millet (dugub in Wolof)', 'Other grains and agricultural produce'],
          fr: ['Riz', 'Mil (dugub en wolof)', 'Autres céréales et produits agricoles'],
          ar: ['الأرز', 'الدخن (دُوگُب بالولوفية)', 'حبوب ومحاصيل زراعية أخرى'],
        },
      },
      {
        title: { en: 'Rice, Millet and Cooking Oil', fr: "Riz, mil et huile de cuisine", ar: 'الأرز والدخن وزيت الطهي' },
        body: {
          en: 'Rice and millet may also be combined with cooking oil and given together as a food-based sadaqah package to someone or a family in need.',
          fr: "Le riz et le mil peuvent également être combinés avec de l'huile de cuisine et donnés ensemble comme un ensemble alimentaire de sadaqah à une personne ou une famille dans le besoin.",
          ar: 'يمكن أيضًا الجمع بين الأرز والدخن وزيت الطهي وتقديمها معًا كحزمة غذائية من الصدقة لشخص أو أسرة محتاجة.',
        },
        bullets: {
          en: ['Rice', 'Millet', 'Cooking oil'],
          fr: ['Riz', 'Mil', 'Huile de cuisine'],
          ar: ['الأرز', 'الدخن', 'زيت الطهي'],
        },
      },
      {
        title: { en: 'Water Sadaqah', fr: "Sadaqah d'eau", ar: 'صدقة الماء' },
        body: {
          en: 'Giving water is another beneficial sadaqah for Taurus. The water is given to someone who needs or can benefit from it.',
          fr: "Donner de l'eau est une autre sadaqah bénéfique pour le Taureau. L'eau est donnée à une personne qui en a besoin ou peut en bénéficier.",
          ar: 'تقديم الماء صدقة مفيدة أخرى للثور. يُقدَّم الماء لشخص يحتاج إليه أو يمكن أن يستفيد منه.',
        },
      },
      {
        title: { en: 'Supporting an Elderly Person — Provision', fr: 'Soutenir une personne âgée — Provision', ar: 'دعم شخص مسن — الرزق' },
        body: {
          en: "A particularly important form of sadaqah for Taurus is helping an elderly man or woman, regularly or whenever they are in need. This is regarded in the tradition as a secret sadaqah for increasing and sustaining one's provision (rizq). The emphasis is on quietly and consistently helping an elderly person without seeking recognition.",
          fr: "Une forme de sadaqah particulièrement importante pour le Taureau est d'aider un homme ou une femme âgée, régulièrement ou chaque fois qu'ils en ont besoin. Ceci est considéré dans la tradition comme une sadaqah secrète pour augmenter et maintenir sa provision (rizq). L'accent est mis sur le fait d'aider discrètement et régulièrement une personne âgée sans chercher de reconnaissance.",
          ar: 'من أهم أشكال الصدقة للثور مساعدة رجل مسن أو امرأة مسنة، بانتظام أو كلما احتاجا إلى ذلك. تُعتبر هذه الصدقة في التقليد صدقة سرية لزيادة الرزق واستمراره. والتركيز هنا على مساعدة المسن بهدوء واستمرار دون طلب التقدير.',
        },
        bullets: {
          en: ['Financial assistance', 'Food', 'Household necessities', 'Medical or other essential expenses', 'Other practical needs'],
          fr: ['Aide financière', 'Nourriture', 'Nécessités domestiques', 'Dépenses médicales ou autres dépenses essentielles', 'Autres besoins pratiques'],
          ar: ['مساعدة مالية', 'طعام', 'مستلزمات منزلية', 'نفقات طبية أو نفقات أساسية أخرى', 'احتياجات عملية أخرى'],
        },
      },
    ],
    timing: {
      day: { en: 'Friday', fr: 'Vendredi', ar: 'الجمعة' },
      note: {
        en: 'Friday is considered a particularly suitable day for giving Taurus-related sadaqah, connected in the tradition with Venus (al-Zuhrah), the planetary ruler of the sign. Where possible, give on Friday while maintaining the intention of sincere charity and seeking blessing, protection, and increase in provision.',
        fr: "Le vendredi est considéré comme un jour particulièrement adapté pour donner la sadaqah liée au Taureau, en lien dans la tradition avec Vénus (al-Zuhrah), la planète maîtresse du signe. Dans la mesure du possible, donnez le vendredi en gardant l'intention d'une charité sincère et en recherchant la bénédiction, la protection et l'augmentation de la provision.",
        ar: 'يُعتبر يوم الجمعة يومًا مناسبًا بشكل خاص لتقديم الصدقة المرتبطة بالثور، لارتباطه في التقليد بكوكب الزهرة، الكوكب الحاكم للبرج. قدّم الصدقة يوم الجمعة قدر الإمكان مع الحفاظ على نية الصدقة الخالصة وطلب البركة والحماية وزيادة الرزق.',
      },
    },
    videoId: '_7XJhemrBzg',
  },

  gemini: {
    id: 'gemini',
    en: 'Gemini', fr: 'Gémeaux', ar: 'الجوزاء', translit: 'Jawzāʾ',
    specificForms: [
      {
        title: { en: 'Kola Nut Sadaqah', fr: 'Sadaqah de noix de kola', ar: 'صدقة الجوز الكولا' },
        body: {
          en: 'A form of sadaqah associated with Jawzāʾ is giving 100 kola nuts, which are then distributed as sadaqah.',
          fr: 'Une forme de sadaqah associée aux Gémeaux consiste à donner 100 noix de kola, qui sont ensuite distribuées en sadaqah.',
          ar: 'من أشكال الصدقة المرتبطة بالجوزاء تقديم 100 جوزة من الكولا، توزَّع بعد ذلك كصدقة.',
        },
        bullets: {
          en: ['White kola nuts', 'Red kola nuts', 'A combination of white and red kola nuts'],
          fr: ['Noix de kola blanches', 'Noix de kola rouges', 'Un mélange de noix de kola blanches et rouges'],
          ar: ['جوز الكولا الأبيض', 'جوز الكولا الأحمر', 'مزيج من جوز الكولا الأبيض والأحمر'],
        },
      },
      {
        title: { en: 'Money Sadaqah — Preservation of Wealth', fr: 'Sadaqah d\'argent — Préservation de la richesse', ar: 'صدقة المال — حفظ الثروة' },
        body: {
          en: "Giving money as sadaqah is intended to help with the preservation and stability of wealth: giving a portion of one's wealth away so that wealth is not simply accumulated and lost or continuously spent. The amount can be according to the person's ability and circumstances. Intention: give sincerely, with the intention of helping others and seeking stability, preservation, and blessing in one's wealth.",
          fr: "Donner de l'argent en sadaqah vise à aider à préserver et stabiliser sa richesse : donner une partie de ses biens afin que la richesse ne soit pas simplement accumulée puis perdue, ou continuellement dépensée. Le montant peut être fixé selon les capacités et la situation de la personne. Intention : donner sincèrement, avec l'intention d'aider autrui et de rechercher la stabilité, la préservation et la bénédiction de sa richesse.",
          ar: 'يهدف تقديم المال كصدقة إلى المساعدة في حفظ الثروة واستقرارها: التصدق بجزء من المال حتى لا يبقى مجرد مال مُتراكم يُفقد أو يُنفق باستمرار. يمكن تحديد المبلغ حسب قدرة الشخص وظروفه. النية: التصدق بإخلاص، بنية مساعدة الآخرين وطلب الاستقرار والحفظ والبركة في المال.',
        },
      },
      {
        title: { en: 'Three-Coloured Chicken Sadaqah', fr: 'Sadaqah de poulet tricolore', ar: 'صدقة الدجاجة الثلاثية الألوان' },
        body: {
          en: 'Giving a chicken of different colours, particularly a combination of black, white and red, to someone who can benefit from it.',
          fr: "Donner un poulet de plusieurs couleurs, en particulier une combinaison de noir, blanc et rouge, à une personne qui peut en bénéficier.",
          ar: 'التصدق بدجاجة متعددة الألوان، خاصة مزيج من الأسود والأبيض والأحمر، لشخص يمكن أن يستفيد منها.',
        },
      },
      {
        title: { en: 'Guinea Fowl (Pintade) Sadaqah', fr: 'Sadaqah de pintade', ar: 'صدقة الدجاج الغيني (بينتاد)' },
        body: {
          en: 'Giving a guinea fowl (French: pintade) as sadaqah, distributed to someone who can benefit from it.',
          fr: "Donner une pintade en sadaqah, distribuée à une personne qui peut en bénéficier.",
          ar: 'التصدق بدجاجة غينية (بينتاد بالفرنسية) توزَّع على شخص يمكن أن يستفيد منها.',
        },
      },
      {
        title: { en: 'Educational Materials Sadaqah', fr: 'Sadaqah de matériel scolaire', ar: 'صدقة الأدوات التعليمية' },
        body: {
          en: 'Providing educational materials is another beneficial form of sadaqah for Gemini. These materials can be given to children or students who need them for their education.',
          fr: "Fournir du matériel scolaire est une autre forme bénéfique de sadaqah pour les Gémeaux. Ce matériel peut être donné à des enfants ou des élèves qui en ont besoin pour leur éducation.",
          ar: 'يُعتبر توفير الأدوات التعليمية شكلاً مفيدًا آخر من أشكال الصدقة للجوزاء. يمكن تقديم هذه الأدوات للأطفال أو الطلاب الذين يحتاجونها لتعليمهم.',
        },
        bullets: {
          en: ['White writing paper', 'Exercise books', 'Notebooks', 'Pens', 'Pencils', 'Other basic school supplies'],
          fr: ['Papier blanc', 'Cahiers d\'exercices', 'Carnets', 'Stylos', 'Crayons', 'Autres fournitures scolaires de base'],
          ar: ['ورق كتابة أبيض', 'دفاتر تمارين', 'دفاتر ملاحظات', 'أقلام حبر', 'أقلام رصاص', 'لوازم مدرسية أساسية أخرى'],
        },
      },
      {
        title: { en: "Supporting Teachers and Qur'anic Teachers", fr: "Soutenir les enseignants et les maîtres coraniques", ar: 'دعم المعلمين ومعلمي القرآن' },
        body: {
          en: "Educational sadaqah can also be directed toward teachers, including Qur'anic teachers — helping a teacher or their students. The sadaqah can therefore benefit either the teacher or the students.",
          fr: "La sadaqah éducative peut également être destinée aux enseignants, y compris les maîtres coraniques — en aidant un enseignant ou ses élèves. La sadaqah peut donc bénéficier soit à l'enseignant, soit aux élèves.",
          ar: 'يمكن أيضًا توجيه الصدقة التعليمية نحو المعلمين، بمن فيهم معلمو القرآن — بمساعدة المعلم أو تلاميذه. وبذلك يمكن أن تنفع الصدقة المعلم أو التلاميذ.',
        },
        bullets: {
          en: ['Books', 'Pens', 'Writing materials', 'Educational resources', 'Other materials needed for teaching and learning'],
          fr: ['Livres', 'Stylos', 'Matériel d\'écriture', 'Ressources pédagogiques', 'Autres matériels nécessaires à l\'enseignement et à l\'apprentissage'],
          ar: ['كتب', 'أقلام', 'أدوات كتابة', 'موارد تعليمية', 'مواد أخرى لازمة للتعليم والتعلم'],
        },
      },
      {
        title: { en: 'Feeding Children', fr: 'Nourrir des enfants', ar: 'إطعام الأطفال' },
        body: {
          en: 'Food can be prepared or purchased and given directly to children who can benefit from it. The intention is to provide nourishment and assistance through sadaqah.',
          fr: "Un repas peut être préparé ou acheté puis donné directement à des enfants qui peuvent en bénéficier. L'intention est d'apporter nourriture et assistance à travers la sadaqah.",
          ar: 'يمكن تحضير الطعام أو شراؤه وتقديمه مباشرة للأطفال الذين يمكن أن يستفيدوا منه. والنية هي تقديم الغذاء والمساعدة من خلال الصدقة.',
        },
      },
    ],
    videoId: 'AiM1UMKZmr4',
  },

  cancer: {
    id: 'cancer',
    en: 'Cancer', fr: 'Cancer', ar: 'السرطان', translit: 'Saraṭān',
    specificForms: [
      {
        title: { en: 'Salt Sadaqah', fr: 'Sadaqah de sel', ar: 'صدقة الملح' },
        body: {
          en: "A form of sadaqah associated with Saraṭān is giving salt according to one's current age — the amount in kilograms matching the person's age (age 25 → 25 kg, age 30 → 30 kg, age 40 → 40 kg). The amount is weighed according to the person's age and then given out as sadaqah. This may be performed yearly, using the person's age at that time.",
          fr: "Une forme de sadaqah associée au Cancer consiste à donner du sel selon l'âge actuel de la personne — la quantité en kilogrammes correspondant à son âge (25 ans → 25 kg, 30 ans → 30 kg, 40 ans → 40 kg). La quantité est pesée selon l'âge de la personne puis distribuée en sadaqah. Cela peut être fait chaque année, en utilisant l'âge de la personne à ce moment-là.",
          ar: 'من أشكال الصدقة المرتبطة بالسرطان تقديم الملح حسب عمر الشخص الحالي — الكمية بالكيلوغرام تُطابق عمره (25 عامًا → 25 كغ، 30 عامًا → 30 كغ، 40 عامًا → 40 كغ). تُوزَن الكمية حسب عمر الشخص ثم تُقدَّم كصدقة. يمكن أداء هذه الصدقة سنويًا حسب عمر الشخص في ذلك الوقت.',
        },
      },
      {
        title: { en: 'Four Kilograms of Meat', fr: 'Quatre kilogrammes de viande', ar: 'أربعة كيلوغرامات من اللحم' },
        body: {
          en: 'Giving 4 kg of meat — beef or another type — out as sadaqah to people who can benefit from it.',
          fr: "Donner 4 kg de viande — bœuf ou un autre type — en sadaqah à des personnes qui peuvent en bénéficier.",
          ar: 'التصدق بـ 4 كيلوغرامات من اللحم — لحم بقر أو نوع آخر — لأشخاص يمكن أن يستفيدوا منه.',
        },
      },
      {
        title: { en: 'Helping a Family in Need', fr: 'Aider une famille dans le besoin', ar: 'مساعدة أسرة محتاجة' },
        body: {
          en: "Regularly helping a family in need. The support can be given from time to time, according to the family's needs and one's ability to help.",
          fr: "Aider régulièrement une famille dans le besoin. Le soutien peut être apporté de temps en temps, selon les besoins de la famille et la capacité d'aide de la personne.",
          ar: 'مساعدة أسرة محتاجة بانتظام. يمكن تقديم الدعم من وقت لآخر، حسب احتياجات الأسرة وقدرة الشخص على المساعدة.',
        },
        bullets: {
          en: ['Helping with food expenses', 'Paying for fish or other food', 'Helping with household expenses', 'Providing financial assistance when needed'],
          fr: ['Aider avec les dépenses alimentaires', 'Payer le poisson ou d\'autres denrées', 'Aider avec les dépenses du foyer', 'Fournir une aide financière en cas de besoin'],
          ar: ['المساعدة في نفقات الطعام', 'دفع ثمن السمك أو طعام آخر', 'المساعدة في نفقات المنزل', 'تقديم مساعدة مالية عند الحاجة'],
        },
      },
      {
        title: { en: 'Supporting an Elderly Woman', fr: 'Soutenir une femme âgée', ar: 'دعم امرأة مسنة' },
        body: {
          en: 'Providing financial assistance to an elderly woman in need. The intention is to assist and ease her difficulties through sadaqah.',
          fr: "Apporter une aide financière à une femme âgée dans le besoin. L'intention est de l'aider et d'alléger ses difficultés à travers la sadaqah.",
          ar: 'تقديم مساعدة مالية لامرأة مسنة محتاجة. والنية هي مساعدتها وتخفيف صعوباتها من خلال الصدقة.',
        },
        bullets: {
          en: ['Giving her money', 'Helping with essential expenses', 'Providing regular or occasional financial support'],
          fr: ['Lui donner de l\'argent', 'Aider avec les dépenses essentielles', 'Fournir un soutien financier régulier ou occasionnel'],
          ar: ['إعطاؤها مالاً', 'المساعدة في النفقات الأساسية', 'تقديم دعم مالي منتظم أو عرضي'],
        },
      },
      {
        title: { en: 'Giving Milk to Children', fr: 'Donner du lait aux enfants', ar: 'إعطاء الحليب للأطفال' },
        body: {
          en: 'Giving milk to children as sadaqah to provide nourishment and benefit.',
          fr: "Donner du lait aux enfants en sadaqah afin d'apporter nourriture et bienfait.",
          ar: 'تقديم الحليب للأطفال كصدقة لتوفير الغذاء والنفع.',
        },
        bullets: {
          en: ['A small bottle of milk', 'A larger quantity of milk', 'Any suitable milk that can be given to children'],
          fr: ['Une petite bouteille de lait', 'Une plus grande quantité de lait', 'Tout lait approprié pouvant être donné aux enfants'],
          ar: ['زجاجة صغيرة من الحليب', 'كمية أكبر من الحليب', 'أي حليب مناسب يمكن تقديمه للأطفال'],
        },
      },
    ],
    videoId: 'CIeJH6HUXQU',
  },

  leo: {
    id: 'leo',
    en: 'Leo', fr: 'Lion', ar: 'الأسد', translit: 'al-Asad',
    specificForms: [
      {
        title: { en: 'Raising and Giving a Ram', fr: 'Élever et offrir un bélier', ar: 'تربية كبش وتقديمه' },
        body: {
          en: 'A primary form of sadaqah associated with al-Asad is to raise a ram, particularly a white ram: obtain it, keep it in an appropriate place at home or elsewhere, feed and care for it, and allow it to grow until it reaches a suitable mature stage. It is then slaughtered as sadaqah, the meat divided into portions and distributed to people who can benefit from it. Within this tradition, there is an observation that some Leo individuals may find the ram does not survive long enough to reach maturity, traditionally attributed to the heaviness of the zodiac. If the ram survives and reaches the appropriate mature stage, it can then be given as sadaqah.',
          fr: "Une forme principale de sadaqah associée au Lion consiste à élever un bélier, en particulier un bélier blanc : l'acquérir, le garder dans un endroit approprié à la maison ou ailleurs, le nourrir et en prendre soin, et le laisser grandir jusqu'à ce qu'il atteigne un stade de maturité convenable. Il est ensuite sacrifié en sadaqah, la viande étant divisée en portions et distribuée aux personnes qui peuvent en bénéficier. Selon cette tradition, il arrive que certaines personnes nées sous le signe du Lion constatent que le bélier ne survit pas assez longtemps pour atteindre sa maturité, ce qui est traditionnellement attribué à la lourdeur du signe. Si le bélier survit et atteint le stade de maturité convenable, il peut alors être donné en sadaqah.",
          ar: 'من أهم أشكال الصدقة المرتبطة بالأسد تربية كبش، خاصة كبش أبيض: اقتناؤه، والاحتفاظ به في مكان مناسب في المنزل أو غيره، وإطعامه ورعايته، وتركه ينمو حتى يبلغ مرحلة نضج مناسبة. ثم يُذبح كصدقة، ويُقسَّم لحمه إلى حصص توزَّع على من يمكن أن يستفيد منه. وفق هذا التقليد، لوحظ أن بعض مواليد الأسد قد يجدون أن الكبش لا يعيش طويلاً بما يكفي ليبلغ النضج، وهو ما يُعزى تقليديًا إلى ثقل هذا البرج. فإن نجا الكبش وبلغ مرحلة النضج المناسبة، يمكن حينها تقديمه كصدقة.',
        },
      },
      {
        title: { en: 'Three Bowls of Cheb Yap', fr: 'Trois bols de Cheb Yap', ar: 'ثلاث أطباق من شب ياب' },
        body: {
          en: 'Preparing three bowls of Cheb Yap — a Senegalese rice dish made with meat, similar to meat-based jollof rice — and giving the prepared food as sadaqah to people who can benefit from it.',
          fr: "Préparer trois bols de Cheb Yap — un plat sénégalais de riz à la viande, semblable à un riz jollof à la viande — et donner ce plat préparé en sadaqah à des personnes qui peuvent en bénéficier.",
          ar: 'تحضير ثلاثة أطباق من "شب ياب" — طبق سنغالي من الأرز باللحم، يشبه أرز الجولوف باللحم — وتقديم هذا الطعام المُعَدّ كصدقة لأشخاص يمكن أن يستفيدوا منه.',
        },
      },
      {
        title: { en: 'Three Bowls of Porridge with Yogurt', fr: 'Trois bols de bouillie au yaourt', ar: 'ثلاث أطباق من العصيدة باللبن' },
        body: {
          en: 'Preparing three bowls of porridge with a sour or fermented dairy component such as yogurt, and distributing them to people as sadaqah.',
          fr: "Préparer trois bols de bouillie accompagnée d'un produit laitier acide ou fermenté tel que le yaourt, et les distribuer aux gens en sadaqah.",
          ar: 'تحضير ثلاثة أطباق من العصيدة مع مكوّن لبني حامض أو مخمّر مثل اللبن الرائب، وتوزيعها على الناس كصدقة.',
        },
      },
    ],
    summary: {
      en: ['White ram — raised to maturity, then slaughtered, divided and distributed', '3 bowls of Cheb Yap', '3 bowls of porridge with yogurt'],
      fr: ['Bélier blanc — élevé jusqu\'à maturité, puis sacrifié, divisé et distribué', '3 bols de Cheb Yap', '3 bols de bouillie au yaourt'],
      ar: ['كبش أبيض — يُربّى حتى النضج ثم يُذبح ويُقسَّم ويُوزَّع', '3 أطباق من شب ياب', '3 أطباق من العصيدة باللبن'],
    },
    videoId: '5cd4OeDXLPo',
  },

  virgo: {
    id: 'virgo',
    en: 'Virgo', fr: 'Vierge', ar: 'السنبلة', translit: 'al-Sunbula',
    specificForms: [
      {
        title: { en: 'One Hundred Kola Nuts', fr: 'Cent noix de kola', ar: 'مئة جوزة من الكولا' },
        body: {
          en: 'A primary form of sadaqah associated with al-Sunbula is giving 100 kola nuts, a mixture of red and white, mixed together and distributed as sadaqah.',
          fr: "Une forme principale de sadaqah associée à la Vierge consiste à donner 100 noix de kola, un mélange de rouges et de blanches, mélangées puis distribuées en sadaqah.",
          ar: 'من أهم أشكال الصدقة المرتبطة بالسنبلة تقديم 100 جوزة من الكولا، مزيج من الأحمر والأبيض، تُمزَج معًا وتُوزَّع كصدقة.',
        },
      },
      {
        title: { en: 'Money Sadaqah', fr: 'Sadaqah d\'argent', ar: 'صدقة المال' },
        body: {
          en: "Giving money as sadaqah, according to the person's ability and circumstances, sincerely to someone who can benefit from it.",
          fr: "Donner de l'argent en sadaqah, selon les capacités et la situation de la personne, avec sincérité, à quelqu'un qui peut en bénéficier.",
          ar: 'التصدق بالمال، حسب قدرة الشخص وظروفه، بإخلاص، لمن يمكن أن يستفيد منه.',
        },
      },
      {
        title: { en: 'Three Cereals Sadaqah', fr: 'Sadaqah des trois céréales', ar: 'صدقة الحبوب الثلاثة' },
        body: {
          en: 'Giving three different types of cereal together as sadaqah to people or families who can benefit from them.',
          fr: "Donner trois types de céréales différents ensemble en sadaqah à des personnes ou des familles qui peuvent en bénéficier.",
          ar: 'التصدق بثلاثة أنواع مختلفة من الحبوب معًا لأشخاص أو أسر يمكن أن تستفيد منها.',
        },
        bullets: {
          en: ['Millet', 'Rice', 'Bessi — a Wolof cereal/grain similar to millet'],
          fr: ['Mil', 'Riz', 'Bessi — une céréale wolof semblable au mil'],
          ar: ['الدخن', 'الأرز', 'بيسي — حبة ولوفية تشبه الدخن'],
        },
      },
      {
        title: { en: 'Secret Sadaqah of Virgo — Age 40', fr: 'Sadaqah secrète de la Vierge — 40 ans', ar: 'الصدقة السرية للسنبلة — سن الأربعين' },
        body: {
          en: 'A particularly important secret sadaqah associated with Virgo is performed on reaching the age of 40: give 40 metres of kafan cloth (the white cloth used to shroud a deceased Muslim before burial) as sadaqah. Obtain the 40 metres, keep the cloth in the house overnight, then the following day divide it into portions of 7 metres each and distribute the portions as sadaqah.',
          fr: "Une sadaqah secrète particulièrement importante associée à la Vierge est accomplie en atteignant l'âge de 40 ans : donner 40 mètres de tissu de kafan (le tissu blanc utilisé pour envelopper un défunt musulman avant l'enterrement) en sadaqah. Se procurer les 40 mètres, garder le tissu à la maison pendant une nuit, puis le lendemain le diviser en portions de 7 mètres chacune et distribuer ces portions en sadaqah.",
          ar: 'من أهم الصدقات السرية المرتبطة بالسنبلة ما يُؤدّى عند بلوغ سن الأربعين: التصدق بـ 40 مترًا من قماش الكفن (القماش الأبيض الذي يُكفَّن به المسلم المتوفى قبل الدفن). يُحصَّل القماش بطول 40 مترًا، ويُحفَظ في المنزل ليلة واحدة، ثم يُقسَّم في اليوم التالي إلى حصص، كل حصة 7 أمتار، وتُوزَّع هذه الحصص كصدقة.',
        },
      },
    ],
    summary: {
      en: ['100 kola nuts — red and white mixed together', 'Money', 'Three cereals — millet, rice, and Bessi', 'At age 40: 40 metres of kafan cloth, kept overnight then divided into 7-metre portions'],
      fr: ['100 noix de kola — rouges et blanches mélangées', 'Argent', 'Trois céréales — mil, riz et Bessi', 'À 40 ans : 40 mètres de tissu de kafan, gardé une nuit puis divisé en portions de 7 mètres'],
      ar: ['100 جوزة كولا — أحمر وأبيض ممزوجان', 'المال', 'ثلاثة حبوب — الدخن والأرز والبيسي', 'عند سن الأربعين: 40 مترًا من قماش الكفن، يُحفَظ ليلة ثم يُقسَّم إلى حصص من 7 أمتار'],
    },
    videoId: 'eqo8hkl1_Gw',
  },

  libra: {
    id: 'libra',
    en: 'Libra', fr: 'Balance', ar: 'الميزان', translit: 'al-Mīzān',
    rulingPlanet: { en: 'Venus (al-Zuhrah / الزهرة)', fr: 'Vénus (al-Zuhrah / الزهرة)', ar: 'الزهرة' },
    specificForms: [
      {
        title: { en: 'Seven Yogurts Sadaqah', fr: 'Sadaqah des sept yaourts', ar: 'صدقة اللبن السبعة' },
        body: {
          en: 'Giving seven portions of yogurt — small bags, sachets, or small containers. The portions do not need to be large; seven separate portions are the important part. The yogurt is distributed as sadaqah to people who can benefit from it.',
          fr: "Donner sept portions de yaourt — petits sachets ou petits récipients. Les portions n'ont pas besoin d'être grandes ; ce qui importe, c'est d'avoir sept portions séparées. Le yaourt est distribué en sadaqah à des personnes qui peuvent en bénéficier.",
          ar: 'التصدق بسبع حصص من اللبن — أكياس صغيرة أو عبوات صغيرة. لا يشترط أن تكون الحصص كبيرة؛ المهم أن تكون سبع حصص منفصلة. يُوزَّع اللبن كصدقة على من يمكن أن يستفيد منه.',
        },
      },
      {
        title: { en: 'Guinea Fowl Sadaqah', fr: 'Sadaqah de pintade', ar: 'صدقة الدجاج الغيني' },
        body: {
          en: 'Giving guinea fowl (pintade) as sadaqah to someone who can benefit from it.',
          fr: "Donner une pintade en sadaqah à une personne qui peut en bénéficier.",
          ar: 'التصدق بدجاجة غينية (بينتاد) لشخص يمكن أن يستفيد منها.',
        },
      },
      {
        title: { en: 'Three-Coloured Chicken Sadaqah', fr: 'Sadaqah de poulets tricolores', ar: 'صدقة الدجاج الثلاثي الألوان' },
        body: {
          en: 'Giving three chickens of different colours — black, white and red — out as sadaqah.',
          fr: "Donner trois poulets de couleurs différentes — noir, blanc et rouge — en sadaqah.",
          ar: 'التصدق بثلاث دجاجات من ألوان مختلفة — أسود وأبيض وأحمر.',
        },
      },
    ],
    timing: {
      day: { en: 'Friday', fr: 'Vendredi', ar: 'الجمعة' },
      note: {
        en: 'Because Libra is traditionally associated with Venus (al-Zuhrah), days may be selected when the planetary condition is favourable. Friday is preferred when Venus is favourable; Thursday may also be used when conditions are favourable.',
        fr: "La Balance étant traditionnellement associée à Vénus (al-Zuhrah), les jours peuvent être choisis lorsque la condition planétaire est favorable. Le vendredi est préféré lorsque Vénus est favorable ; le jeudi peut également être utilisé lorsque les conditions sont favorables.",
        ar: 'لأن الميزان مرتبط تقليديًا بكوكب الزهرة، يمكن اختيار الأيام التي تكون فيها حالة الكوكب مواتية. يُفضَّل يوم الجمعة عندما تكون الزهرة في حالة مواتية؛ ويمكن أيضًا استخدام يوم الخميس عندما تكون الظروف مواتية.',
      },
    },
    summary: {
      en: ['7 portions of yogurt — even small sachets', 'Guinea fowl (pintade)', '3 chickens — black, white and red', 'Preferred day: Friday when favourable; alternative: Thursday'],
      fr: ['7 portions de yaourt — même de petits sachets', 'Pintade', '3 poulets — noir, blanc et rouge', 'Jour préféré : vendredi si favorable ; alternative : jeudi'],
      ar: ['7 حصص من اللبن — حتى لو كانت أكياسًا صغيرة', 'دجاجة غينية (بينتاد)', '3 دجاجات — أسود وأبيض وأحمر', 'اليوم المفضل: الجمعة عند مواتاة الظروف؛ البديل: الخميس'],
    },
    videoId: 'VsMCgoQbsAg',
  },

  scorpio: {
    id: 'scorpio',
    en: 'Scorpio', fr: 'Scorpion', ar: 'العقرب', translit: 'al-ʿAqrab',
    rulingPlanet: { en: 'Mars (al-Mirrīkh / المريخ)', fr: 'Mars (al-Mirrīkh / المريخ)', ar: 'المريخ' },
    specificForms: [
      {
        title: { en: 'Protective Ring Sadaqah', fr: 'Sadaqah de la bague protectrice', ar: 'صدقة الخاتم الواقي' },
        body: {
          en: 'A special form of sadaqah associated with Scorpio is having or giving a good protective ring, with stones such as rose agate or amethyst. The ring is regarded within this tradition as having protective and beneficial qualities and is also considered part of the sadaqah practice for Scorpio.',
          fr: "Une forme particulière de sadaqah associée au Scorpion consiste à posséder ou à offrir une bonne bague protectrice, sertie de pierres telles que l'agate rose ou l'améthyste. Cette bague est considérée dans cette tradition comme ayant des qualités protectrices et bénéfiques, et fait également partie de la pratique de sadaqah du Scorpion.",
          ar: 'من الأشكال الخاصة للصدقة المرتبطة بالعقرب امتلاك أو تقديم خاتم واقٍ جيد، بأحجار مثل العقيق الوردي أو الجمشت. يُعتبر هذا الخاتم في هذا التقليد ذا خصائص واقية ونافعة، ويُعدّ أيضًا جزءًا من ممارسة الصدقة الخاصة بالعقرب.',
        },
      },
      {
        title: { en: 'White Ram or Sheep Sadaqah', fr: 'Sadaqah du bélier ou de la brebis blanche', ar: 'صدقة الكبش أو النعجة البيضاء' },
        body: {
          en: 'Giving a white ram or white sheep, particularly associated with favourable conditions involving Mars.',
          fr: "Donner un bélier ou une brebis blanche, particulièrement associé à des conditions favorables impliquant Mars.",
          ar: 'التصدق بكبش أو نعجة بيضاء، وترتبط بشكل خاص بالظروف المواتية المتعلقة بكوكب المريخ.',
        },
      },
      {
        title: { en: 'Red Goat Sadaqah During a Favourable Mars Transit', fr: 'Sadaqah de la chèvre rouge lors d\'un transit favorable de Mars', ar: 'صدقة الماعز الأحمر خلال عبور مواتٍ للمريخ' },
        body: {
          en: 'When Mars is transiting a favourable or friendly zodiac sign, such as Aries, a red goat may be given as sadaqah. The goat is prepared and its meat divided into portions, distributed among people who can benefit from it until the meat has been given out. The emphasis is on distributing the meat, rather than keeping it for personal consumption.',
          fr: "Lorsque Mars transite dans un signe du zodiaque favorable ou ami, comme le Bélier, une chèvre rouge peut être donnée en sadaqah. La chèvre est préparée et sa viande divisée en portions, distribuées entre les personnes qui peuvent en bénéficier jusqu'à épuisement de la viande. L'accent est mis sur la distribution de la viande plutôt que sur sa consommation personnelle.",
          ar: 'عندما يعبر المريخ برجًا مواتيًا أو صديقًا، مثل الحمل، يمكن التصدق بماعز أحمر. يُحضَّر الماعز ويُقسَّم لحمه إلى حصص تُوزَّع على من يمكن أن يستفيد منها حتى نفاد اللحم. والتركيز هنا على توزيع اللحم وليس على استهلاكه شخصيًا.',
        },
      },
      {
        title: { en: 'Water Sadaqah — For Patients', fr: 'Sadaqah d\'eau — Pour les malades', ar: 'صدقة الماء — للمرضى' },
        body: {
          en: 'Giving water is an important sadaqah for Scorpio, particularly to sick or hospitalised people — for example taking drinking water to a hospital and giving it freely to patients who need it. This form is especially associated with Scorpio when beginning a new project or undertaking a journey.',
          fr: "Donner de l'eau est une sadaqah importante pour le Scorpion, en particulier aux personnes malades ou hospitalisées — par exemple, apporter de l'eau potable à un hôpital et la distribuer gratuitement aux patients qui en ont besoin. Cette forme est particulièrement associée au Scorpion lorsqu'il entreprend un nouveau projet ou un voyage.",
          ar: 'يُعتبر تقديم الماء صدقة مهمة للعقرب، خاصة للمرضى أو المُقيمين في المستشفى — مثل إحضار ماء الشرب إلى مستشفى وتوزيعه مجانًا على المرضى المحتاجين إليه. يرتبط هذا الشكل بالعقرب بشكل خاص عند بدء مشروع جديد أو القيام برحلة.',
        },
      },
      {
        title: { en: 'Rice and Fish Sadaqah', fr: 'Sadaqah de riz et de poisson', ar: 'صدقة الأرز والسمك' },
        body: {
          en: 'Giving rice and fish together as a single sadaqah, both uncooked (raw), distributed to people or families who can benefit from them.',
          fr: "Donner du riz et du poisson ensemble comme une seule sadaqah, tous deux crus (non cuisinés), distribués à des personnes ou des familles qui peuvent en bénéficier.",
          ar: 'التصدق بالأرز والسمك معًا كصدقة واحدة، كلاهما نيء (غير مطبوخ)، تُوزَّع على أشخاص أو أسر يمكن أن تستفيد منهما.',
        },
      },
    ],
    timing: {
      day: { en: 'Tuesday', fr: 'Mardi', ar: 'الثلاثاء' },
      note: {
        en: 'Tuesday is particularly associated with Scorpio because of its connection with Mars, the planetary ruler of the sign, and can be chosen when Mars is in a favourable or neutral transit. Sunday may also be considered, particularly when the Sun is in a favourable condition. The planetary condition should be considered when selecting the timing according to the tradition.',
        fr: "Le mardi est particulièrement associé au Scorpion en raison de son lien avec Mars, la planète maîtresse du signe, et peut être choisi lorsque Mars est en transit favorable ou neutre. Le dimanche peut également être envisagé, en particulier lorsque le Soleil est dans une condition favorable. La condition planétaire doit être prise en compte lors du choix du moment, selon la tradition.",
        ar: 'يرتبط يوم الثلاثاء بشكل خاص بالعقرب بسبب ارتباطه بكوكب المريخ، الكوكب الحاكم للبرج، ويمكن اختياره عندما يكون المريخ في عبور مواتٍ أو محايد. يمكن أيضًا اعتبار يوم الأحد، خاصة عندما تكون الشمس في حالة مواتية. ينبغي مراعاة حالة الكوكب عند اختيار التوقيت وفقًا للتقليد.',
      },
    },
    summary: {
      en: ['Protective ring — rose agate or amethyst', 'White ram or sheep', 'Red goat — during a favourable Mars transit; meat divided and distributed', 'Water — especially to sick or hospitalised people', 'Rice and fish — given together, uncooked', 'Preferred day: Tuesday when Mars is favourable or neutral; alternative: Sunday when the Sun is favourable', 'Special occasions: beginning a project or travelling'],
      fr: ['Bague protectrice — agate rose ou améthyste', 'Bélier ou brebis blanche', 'Chèvre rouge — lors d\'un transit favorable de Mars ; viande divisée et distribuée', 'Eau — surtout aux malades ou hospitalisés', 'Riz et poisson — donnés ensemble, crus', 'Jour préféré : mardi lorsque Mars est favorable ou neutre ; alternative : dimanche lorsque le Soleil est favorable', 'Occasions particulières : début d\'un projet ou d\'un voyage'],
      ar: ['خاتم واقٍ — عقيق وردي أو جمشت', 'كبش أو نعجة بيضاء', 'ماعز أحمر — خلال عبور مواتٍ للمريخ؛ يُقسَّم اللحم ويُوزَّع', 'ماء — خاصة للمرضى أو المقيمين في المستشفى', 'أرز وسمك — يُقدَّمان معًا، نيئان', 'اليوم المفضل: الثلاثاء عندما يكون المريخ مواتيًا أو محايدًا؛ البديل: الأحد عندما تكون الشمس مواتية', 'مناسبات خاصة: بدء مشروع أو السفر'],
    },
    videoId: 'wJBDdTZBth4',
  },

  sagittarius: {
    id: 'sagittarius',
    en: 'Sagittarius', fr: 'Sagittaire', ar: 'القوس', translit: 'al-Qaws',
    generalNote: {
      en: 'Sagittarius is considered a sign for which sadaqah is particularly important and should be given regularly. Unlike some signs that have specific items associated with their sadaqah, Sagittarius has a more open form: a person may give whatever they sincerely wish to give, provided it benefits another person.',
      fr: "Le Sagittaire est considéré comme un signe pour lequel la sadaqah est particulièrement importante et doit être donnée régulièrement. Contrairement à certains signes qui ont des éléments spécifiques associés à leur sadaqah, le Sagittaire a une forme plus ouverte : une personne peut donner ce qu'elle souhaite sincèrement donner, à condition que cela bénéficie à une autre personne.",
      ar: 'يُعتبر القوس برجًا تُعتبر فيه الصدقة مهمة بشكل خاص وينبغي تقديمها بانتظام. وخلافًا لبعض الأبراج التي ترتبط بأصناف محددة من الصدقة، يتميز القوس بشكل أكثر انفتاحًا: يمكن للشخص أن يتصدق بما يرغب فيه بإخلاص، بشرط أن ينتفع به شخص آخر.',
    },
    specificForms: [
      {
        title: { en: 'Nine Pieces of Bread', fr: 'Neuf morceaux de pain', ar: 'تسع قطع من الخبز' },
        body: {
          en: 'Giving nine pieces of bread, distributed to people who are in need or to anyone who can benefit from it.',
          fr: "Donner neuf morceaux de pain, distribués à des personnes dans le besoin ou à toute personne pouvant en bénéficier.",
          ar: 'التصدق بتسع قطع من الخبز، تُوزَّع على المحتاجين أو أي شخص يمكن أن يستفيد منها.',
        },
      },
      {
        title: { en: 'Three Bowls of Laakh', fr: 'Trois bols de laakh', ar: 'ثلاثة أطباق من اللاخ' },
        body: {
          en: 'Preparing three bowls of laakh — a Wolof-style porridge traditionally prepared with a fermented or sour dairy component such as yogurt — and giving them to people who can benefit from the food.',
          fr: "Préparer trois bols de laakh — une bouillie de style wolof traditionnellement préparée avec un produit laitier fermenté ou acide tel que le yaourt — et les donner à des personnes qui peuvent bénéficier de cette nourriture.",
          ar: 'تحضير ثلاثة أطباق من "اللاخ" — عصيدة على الطريقة الولوفية، تُحضَّر تقليديًا بمكوّن لبني مخمّر أو حامض مثل اللبن الرائب — وتقديمها لمن يمكن أن يستفيد من هذا الطعام.',
        },
      },
      {
        title: { en: 'One-Coloured White Ram', fr: 'Bélier blanc uni', ar: 'كبش أبيض أحادي اللون' },
        body: {
          en: 'Giving a single-coloured ram, particularly a white ram, as sadaqah to someone who can benefit from it.',
          fr: "Donner un bélier d'une seule couleur, en particulier un bélier blanc, en sadaqah à une personne qui peut en bénéficier.",
          ar: 'التصدق بكبش من لون واحد، خاصة كبش أبيض، لشخص يمكن أن يستفيد منه.',
        },
      },
      {
        title: { en: 'Open Sadaqah', fr: 'Sadaqah libre', ar: 'الصدقة المفتوحة' },
        body: {
          en: 'Sagittarius has a broad range of possible sadaqah. A person may give whatever they are able and willing to give. The important principle is to give sincerely and for the benefit of another person.',
          fr: "Le Sagittaire dispose d'un large éventail de sadaqah possibles. Une personne peut donner ce qu'elle est capable et désireuse de donner. Le principe important est de donner avec sincérité et pour le bénéfice d'une autre personne.",
          ar: 'يتمتع القوس بمجال واسع من أشكال الصدقة الممكنة. يمكن للشخص أن يتصدق بما يستطيعه ويرغب في تقديمه. المبدأ المهم هو التصدق بإخلاص ولمنفعة شخص آخر.',
        },
        bullets: {
          en: ['Food', 'Money', 'Clothing', 'Animals', 'Water', 'Assistance to people in need', 'Other beneficial forms of charity'],
          fr: ['Nourriture', 'Argent', 'Vêtements', 'Animaux', 'Eau', 'Assistance aux personnes dans le besoin', 'Autres formes bénéfiques de charité'],
          ar: ['طعام', 'مال', 'ملابس', 'حيوانات', 'ماء', 'مساعدة المحتاجين', 'أشكال أخرى مفيدة من الصدقة'],
        },
      },
    ],
    timing: {
      day: { en: 'Thursday', fr: 'Jeudi', ar: 'الخميس' },
      note: {
        en: 'Thursday is considered a particularly suitable day for giving Sagittarius-related sadaqah. Where possible, give on Thursday while maintaining the intention of sincere charity and seeking blessing and ease.',
        fr: "Le jeudi est considéré comme un jour particulièrement adapté pour donner la sadaqah liée au Sagittaire. Dans la mesure du possible, donnez le jeudi en gardant l'intention d'une charité sincère et en recherchant la bénédiction et la facilité.",
        ar: 'يُعتبر يوم الخميس يومًا مناسبًا بشكل خاص لتقديم الصدقة المرتبطة بالقوس. قدّم الصدقة يوم الخميس قدر الإمكان مع الحفاظ على نية الصدقة الخالصة وطلب البركة والتيسير.',
      },
    },
    summary: {
      en: ['9 pieces of bread', '3 bowls of laakh with yogurt', 'One-coloured white ram', 'Any sincere and beneficial sadaqah', 'Recommended day: Thursday', 'Sagittarius is traditionally regarded as a sign that benefits from frequent and generous sadaqah, so regular charity is emphasised'],
      fr: ['9 morceaux de pain', '3 bols de laakh au yaourt', 'Bélier blanc uni', 'Toute sadaqah sincère et bénéfique', 'Jour recommandé : jeudi', 'Le Sagittaire est traditionnellement considéré comme un signe qui bénéficie d\'une sadaqah fréquente et généreuse ; la charité régulière est donc mise en avant'],
      ar: ['9 قطع من الخبز', '3 أطباق من اللاخ باللبن', 'كبش أبيض أحادي اللون', 'أي صدقة خالصة ونافعة', 'اليوم الموصى به: الخميس', 'يُعتبر القوس تقليديًا برجًا ينتفع بالصدقة المتكررة والسخية، لذا يُشدَّد على الصدقة المنتظمة'],
    },
    videoId: 'V-7gVkVQEpI',
  },

  capricorn: {
    id: 'capricorn',
    en: 'Capricorn', fr: 'Capricorne', ar: 'الجدي', translit: 'al-Jady',
    specificForms: [
      {
        title: { en: 'Rice and Millet Sadaqah', fr: 'Sadaqah de riz et de mil', ar: 'صدقة الأرز والدخن' },
        body: {
          en: "Giving rice and millet according to measurements connected to the person's age and body weight: rice in kilograms corresponding to the person's age, millet in kilograms corresponding to the person's body weight. The rice and millet may be distributed little by little until the entire amount has been given out, to individuals, families, or people in need.",
          fr: "Donner du riz et du mil selon des mesures liées à l'âge et au poids corporel de la personne : le riz en kilogrammes correspondant à son âge, le mil en kilogrammes correspondant à son poids. Le riz et le mil peuvent être distribués peu à peu jusqu'à épuisement de la quantité totale, à des individus, des familles ou des personnes dans le besoin.",
          ar: 'التصدق بالأرز والدخن حسب مقاييس مرتبطة بعمر الشخص ووزن جسمه: الأرز بالكيلوغرام مطابقًا لعمره، والدخن بالكيلوغرام مطابقًا لوزنه. يمكن توزيع الأرز والدخن شيئًا فشيئًا حتى نفاد الكمية كاملة، على أفراد أو أسر أو محتاجين.',
        },
      },
      {
        title: { en: 'One-Coloured Ram Sadaqah', fr: 'Sadaqah du bélier uni', ar: 'صدقة الكبش الأحادي اللون' },
        body: {
          en: 'Giving a single-coloured ram, a white ram particularly associated with this sadaqah. This is described in the tradition as a particularly powerful sadaqah, and some people who follow this practice may experience it symbolically through dreams, such as dreaming that they are giving away a ram.',
          fr: "Donner un bélier d'une seule couleur, un bélier blanc étant particulièrement associé à cette sadaqah. Ceci est décrit dans la tradition comme une sadaqah particulièrement puissante, et certaines personnes qui suivent cette pratique peuvent en faire l'expérience symboliquement à travers des rêves, comme rêver qu'elles donnent un bélier.",
          ar: 'التصدق بكبش من لون واحد، ويرتبط الكبش الأبيض بشكل خاص بهذه الصدقة. تُوصَف هذه الصدقة في التقليد بأنها صدقة قوية بشكل خاص، وقد يعيشها بعض من يتبعون هذه الممارسة رمزيًا من خلال الأحلام، كأن يحلموا بأنهم يتصدقون بكبش.',
        },
      },
      {
        title: { en: 'Kafan — Burial Shroud Sadaqah', fr: 'Kafan — Sadaqah du linceul', ar: 'صدقة الكفن' },
        body: {
          en: "Giving kafan, the white cloth used to shroud a deceased Muslim before burial. The sadaqah may consist of providing the cloth needed for someone's burial.",
          fr: "Donner du kafan, le tissu blanc utilisé pour envelopper un défunt musulman avant l'enterrement. Cette sadaqah peut consister à fournir le tissu nécessaire pour l'enterrement d'une personne.",
          ar: 'التصدق بالكفن، القماش الأبيض الذي يُكفَّن به المسلم المتوفى قبل الدفن. يمكن أن تتمثل هذه الصدقة في توفير القماش اللازم لدفن شخص ما.',
        },
        bullets: {
          en: ['A family preparing for a burial', 'A mosque or community', 'Someone who cannot afford the burial shroud', 'People responsible for assisting with funeral arrangements'],
          fr: ['Une famille se préparant pour un enterrement', 'Une mosquée ou une communauté', 'Une personne ne pouvant pas se permettre le linceul', 'Les personnes chargées d\'aider aux arrangements funéraires'],
          ar: ['أسرة تستعد لجنازة', 'مسجد أو جماعة', 'شخص لا يستطيع تحمل تكلفة الكفن', 'المسؤولون عن المساعدة في ترتيبات الجنازة'],
        },
      },
      {
        title: { en: 'Cowries — Petaw Sadaqah', fr: 'Cauris — Sadaqah du petaw', ar: 'صدقة الودع — بيتاو' },
        body: {
          en: 'Giving cowries, known in Wolof as petaw — the small white cowrie shells traditionally used for decoration and in various cultural and spiritual practices. This form of sadaqah is considered special and sensitive within the tradition.',
          fr: "Donner des cauris, connus en wolof sous le nom de petaw — les petits coquillages blancs traditionnellement utilisés pour la décoration et dans diverses pratiques culturelles et spirituelles. Cette forme de sadaqah est considérée comme particulière et sensible au sein de la tradition.",
          ar: 'التصدق بالودع، المعروف بالولوفية باسم "بيتاو" — أصداف بيضاء صغيرة تُستخدم تقليديًا للزينة وفي ممارسات ثقافية وروحية متنوعة. يُعتبر هذا الشكل من الصدقة خاصًا وحساسًا ضمن هذا التقليد.',
        },
      },
      {
        title: { en: 'Helping Labourers and Low-Income Workers', fr: 'Aider les ouvriers et les travailleurs à faible revenu', ar: 'مساعدة العمال وذوي الدخل المحدود' },
        body: {
          en: 'Helping workers and labourers, particularly people earning a modest income through physically demanding or low-skilled work. The person does not necessarily have to be extremely poor; the sadaqah can simply be an act of assistance and support for someone whose income is limited.',
          fr: "Aider les ouvriers et les travailleurs, en particulier les personnes ayant un revenu modeste issu d'un travail physiquement exigeant ou peu qualifié. La personne n'a pas nécessairement besoin d'être extrêmement pauvre ; la sadaqah peut simplement être un acte d'assistance et de soutien envers quelqu'un dont le revenu est limité.",
          ar: 'مساعدة العمال، خاصة من يكسبون دخلاً متواضعًا من عمل شاق بدنيًا أو منخفض المهارة. لا يشترط أن يكون الشخص فقيرًا للغاية؛ يمكن أن تكون الصدقة ببساطة عملاً من أعمال المساعدة والدعم لمن دخله محدود.',
        },
        bullets: {
          en: ['Labourers', 'Casual workers', 'Construction workers', 'Cleaners', 'Other low-income workers'],
          fr: ['Ouvriers', 'Travailleurs occasionnels', 'Ouvriers du bâtiment', 'Agents d\'entretien', 'Autres travailleurs à faible revenu'],
          ar: ['العمال', 'العمال المؤقتون', 'عمال البناء', 'عمال النظافة', 'عمال آخرون ذوو دخل محدود'],
        },
      },
      {
        title: { en: 'Helping a Widow and Her Children', fr: 'Aider une veuve et ses enfants', ar: 'مساعدة أرملة وأطفالها' },
        body: {
          en: 'The assistance can be given regularly or whenever the family needs support. This is regarded as a particularly meaningful form of sadaqah because it supports both the widow and the children who depend on her.',
          fr: "L'aide peut être apportée régulièrement ou chaque fois que la famille a besoin de soutien. Ceci est considéré comme une forme de sadaqah particulièrement significative car elle soutient à la fois la veuve et les enfants qui dépendent d'elle.",
          ar: 'يمكن تقديم المساعدة بانتظام أو كلما احتاجت الأسرة إلى دعم. تُعتبر هذه الصدقة ذات معنى خاص لأنها تدعم الأرملة والأطفال الذين يعتمدون عليها معًا.',
        },
        bullets: {
          en: ['Financial assistance for the widow', 'Providing food or household necessities', "Helping with children's expenses", 'Supporting their education', 'Assisting with other essential needs'],
          fr: ['Aide financière pour la veuve', 'Fournir de la nourriture ou des nécessités domestiques', 'Aider avec les dépenses des enfants', 'Soutenir leur éducation', 'Aider avec d\'autres besoins essentiels'],
          ar: ['مساعدة مالية للأرملة', 'توفير الطعام أو المستلزمات المنزلية', 'المساعدة في نفقات الأطفال', 'دعم تعليمهم', 'المساعدة في احتياجات أساسية أخرى'],
        },
      },
    ],
    guidance: {
      title: { en: 'Important Guidance — Cowries / Petaw', fr: 'Conseil important — Cauris / Petaw', ar: 'إرشاد مهم — الودع / بيتاو' },
      body: {
        en: 'Anyone intending to give petaw/cowries as sadaqah should seek guidance from a knowledgeable and trusted spiritual authority who understands the practice. According to the tradition being documented, this sadaqah may be considered capable of helping to open pathways and make matters easier, but it should not be undertaken casually. The practice is therefore regarded as one requiring proper guidance and understanding before giving it as sadaqah.',
        fr: "Toute personne ayant l'intention de donner du petaw/des cauris en sadaqah devrait chercher les conseils d'une autorité spirituelle compétente et digne de confiance qui comprend cette pratique. Selon la tradition documentée, cette sadaqah peut être considérée comme capable d'aider à ouvrir des voies et à faciliter les choses, mais elle ne doit pas être entreprise à la légère. Cette pratique est donc considérée comme nécessitant des conseils et une compréhension appropriés avant d'être donnée en sadaqah.",
        ar: 'ينبغي لمن ينوي التصدق بالودع/البيتاو أن يطلب إرشاد سلطة روحية موثوقة وذات معرفة تفهم هذه الممارسة. وفقًا لهذا التقليد الموثَّق، يمكن اعتبار هذه الصدقة قادرة على المساعدة في فتح السبل وتيسير الأمور، لكن لا ينبغي أداؤها باستخفاف. لذا تُعتبر هذه الممارسة من الأمور التي تتطلب إرشادًا وفهمًا سليمين قبل التصدق بها.',
      },
    },
    summary: {
      en: ['Rice and millet', 'A white, single-coloured ram', 'Kafan (burial shroud)', 'Cowries / petaw, with proper guidance', 'Helping labourers and low-income workers', 'Supporting widows and their children'],
      fr: ['Riz et mil', 'Un bélier blanc uni', 'Kafan (linceul)', 'Cauris / petaw, avec les conseils appropriés', 'Aider les ouvriers et travailleurs à faible revenu', 'Soutenir les veuves et leurs enfants'],
      ar: ['الأرز والدخن', 'كبش أبيض أحادي اللون', 'الكفن', 'الودع / بيتاو، مع الإرشاد المناسب', 'مساعدة العمال وذوي الدخل المحدود', 'دعم الأرامل وأطفالهن'],
    },
    summaryNote: {
      en: 'The practices above are regarded within this tradition as forms of secret or special sadaqah for Capricorn. The sadaqah should be given discreetly and sincerely, with the intention of benefiting another person rather than seeking recognition.',
      fr: "Les pratiques ci-dessus sont considérées, dans cette tradition, comme des formes de sadaqah secrète ou spéciale pour le Capricorne. La sadaqah doit être donnée discrètement et sincèrement, avec l'intention de bénéficier à une autre personne plutôt que de rechercher la reconnaissance.",
      ar: 'تُعتبر الممارسات أعلاه ضمن هذا التقليد أشكالاً من الصدقة السرية أو الخاصة بالجدي. ينبغي تقديم الصدقة بتكتم وإخلاص، بنية منفعة شخص آخر لا طلب التقدير.',
    },
    videoId: 'v4_Z5ld1OAE',
    altVideoId: 'k3SWgUzVePQ',
  },

  aquarius: {
    id: 'aquarius',
    en: 'Aquarius', fr: 'Verseau', ar: 'الدلو', translit: 'al-Dalw',
    specificForms: [
      {
        title: { en: 'Kola Nut Sadaqah', fr: 'Sadaqah de noix de kola', ar: 'صدقة الجوز الكولا' },
        body: {
          en: 'A primary form of sadaqah associated with al-Dalw is giving 100 kola nuts — white, red, or a combination. This sadaqah can be performed monthly, or every three months. The 100 kola nuts are then distributed as sadaqah.',
          fr: "Une forme principale de sadaqah associée au Verseau consiste à donner 100 noix de kola — blanches, rouges, ou un mélange des deux. Cette sadaqah peut être accomplie chaque mois, ou tous les trois mois. Les 100 noix de kola sont ensuite distribuées en sadaqah.",
          ar: 'من أهم أشكال الصدقة المرتبطة بالدلو تقديم 100 جوزة من الكولا — بيضاء أو حمراء أو مزيج منهما. يمكن أداء هذه الصدقة شهريًا أو كل ثلاثة أشهر. تُوزَّع الجوزات المئة بعد ذلك كصدقة.',
        },
      },
      {
        title: { en: 'Money Sadaqah', fr: "Sadaqah d'argent", ar: 'صدقة المال' },
        body: {
          en: "The amount can be determined according to one's ability and circumstances. The money should be given sincerely to someone or a cause that can benefit from it.",
          fr: "Le montant peut être déterminé selon les capacités et la situation de la personne. L'argent doit être donné sincèrement à une personne ou une cause qui peut en bénéficier.",
          ar: 'يمكن تحديد المبلغ حسب قدرة الشخص وظروفه. ينبغي تقديم المال بإخلاص لشخص أو قضية يمكن أن تستفيد منه.',
        },
      },
      {
        title: { en: 'Supporting a Community or Group', fr: 'Soutenir une communauté ou un groupe', ar: 'دعم جماعة أو مجموعة' },
        body: {
          en: 'Helping a community, group, or voluntary organisation. Support may be financial, material, or practical.',
          fr: "Aider une communauté, un groupe ou une organisation bénévole. Le soutien peut être financier, matériel ou pratique.",
          ar: 'مساعدة جماعة أو مجموعة أو منظمة تطوعية. يمكن أن يكون الدعم ماليًا أو ماديًا أو عمليًا.',
        },
        bullets: {
          en: ['A local community', 'A voluntary group', 'A charitable group', 'A masjid', 'A community project', 'A group serving people in need'],
          fr: ['Une communauté locale', 'Un groupe bénévole', 'Une association caritative', 'Une mosquée', 'Un projet communautaire', 'Un groupe au service des personnes dans le besoin'],
          ar: ['جماعة محلية', 'مجموعة تطوعية', 'جمعية خيرية', 'مسجد', 'مشروع مجتمعي', 'مجموعة تخدم المحتاجين'],
        },
      },
      {
        title: { en: 'Guinea Fowl or Chicken Sadaqah', fr: 'Sadaqah de pintade ou de poulet', ar: 'صدقة الدجاج الغيني أو الدجاجة' },
        body: {
          en: 'Giving guinea fowl (pintade) or chicken as sadaqah to someone who can benefit from it.',
          fr: "Donner une pintade ou un poulet en sadaqah à une personne qui peut en bénéficier.",
          ar: 'التصدق بدجاجة غينية (بينتاد) أو دجاجة عادية لشخص يمكن أن يستفيد منها.',
        },
      },
      {
        title: { en: 'Three-Coloured Chicken Sadaqah', fr: 'Sadaqah de poulets tricolores', ar: 'صدقة الدجاج الثلاثي الألوان' },
        body: {
          en: 'Giving three chickens of different colours — black, red and white — out as sadaqah.',
          fr: "Donner trois poulets de couleurs différentes — noir, rouge et blanc — en sadaqah.",
          ar: 'التصدق بثلاث دجاجات من ألوان مختلفة — أسود وأحمر وأبيض.',
        },
      },
      {
        title: { en: 'Water Sadaqah', fr: "Sadaqah d'eau", ar: 'صدقة الماء' },
        body: {
          en: 'Giving water to someone who needs or can benefit from it.',
          fr: "Donner de l'eau à une personne qui en a besoin ou peut en bénéficier.",
          ar: 'تقديم الماء لشخص يحتاج إليه أو يمكن أن يستفيد منه.',
        },
      },
    ],
    summary: {
      en: ['100 kola nuts — white, red, or a combination; monthly or every three months', "Money — according to one's ability", 'Community or group support — a voluntary group, community, masjid, or similar organisation', 'Guinea fowl (pintade) or chicken', 'Three-coloured chickens — black, red and white', 'Water'],
      fr: ['100 noix de kola — blanches, rouges, ou un mélange ; chaque mois ou tous les trois mois', 'Argent — selon ses capacités', 'Soutien à une communauté ou un groupe — un groupe bénévole, une communauté, une mosquée ou une organisation similaire', 'Pintade ou poulet', 'Poulets tricolores — noir, rouge et blanc', 'Eau'],
      ar: ['100 جوزة كولا — بيضاء أو حمراء أو مزيج؛ شهريًا أو كل ثلاثة أشهر', 'المال — حسب القدرة', 'دعم جماعة أو مجموعة — مجموعة تطوعية أو جماعة أو مسجد أو منظمة مماثلة', 'دجاج غيني (بينتاد) أو دجاجة عادية', 'دجاج ثلاثي الألوان — أسود وأحمر وأبيض', 'ماء'],
    },
    videoId: 'GzDou_TW-cM',
  },

  pisces: {
    id: 'pisces',
    en: 'Pisces', fr: 'Poissons', ar: 'الحوت', translit: 'al-Ḥūt',
    specificForms: [
      {
        title: { en: 'Fish Sadaqah', fr: 'Sadaqah de poisson', ar: 'صدقة السمك' },
        body: {
          en: 'A primary form of sadaqah associated with al-Ḥūt is giving fish. A particularly recommended amount is 12 fish, given as sadaqah to people who can benefit from them.',
          fr: "Une forme principale de sadaqah associée aux Poissons consiste à donner du poisson. Une quantité particulièrement recommandée est de 12 poissons, donnés en sadaqah à des personnes qui peuvent en bénéficier.",
          ar: 'من أهم أشكال الصدقة المرتبطة بالحوت تقديم السمك. الكمية الموصى بها بشكل خاص هي 12 سمكة، تُقدَّم كصدقة لمن يمكن أن يستفيد منها.',
        },
      },
      {
        title: { en: 'Seven-Chicken Food Sadaqah', fr: 'Sadaqah alimentaire de sept poulets', ar: 'صدقة طعام سبع دجاجات' },
        body: {
          en: 'This may be performed when a person has an important project or undertaking: take seven chickens, prepare and cook them, and distribute the prepared food as sadaqah — giving it to people in need, such as a poor family, and continuing until the food has been completely given out. The purpose is to provide food and benefit to people who are in need.',
          fr: "Cela peut être accompli lorsqu'une personne a un projet ou une entreprise importante : prendre sept poulets, les préparer et les cuisiner, puis distribuer le repas préparé en sadaqah — en le donnant à des personnes dans le besoin, comme une famille pauvre, et en continuant jusqu'à ce que la nourriture soit entièrement distribuée. Le but est d'apporter nourriture et bienfait aux personnes dans le besoin.",
          ar: 'يمكن أداء هذه الصدقة عندما يكون للشخص مشروع أو أمر مهم: تُؤخَذ سبع دجاجات، تُحضَّر وتُطبَخ، ويُوزَّع الطعام المُعَدّ كصدقة — يُقدَّم للمحتاجين، مثل أسرة فقيرة، ويستمر التوزيع حتى نفاد الطعام كاملاً. والغرض هو توفير الطعام والنفع للمحتاجين.',
        },
      },
      {
        title: { en: 'Evening Food Sadaqah', fr: 'Sadaqah alimentaire du soir', ar: 'صدقة طعام المساء' },
        body: {
          en: 'The food sadaqah may particularly be given in the evening, around the time when people would normally have dinner, an evening meal, or tea or other evening refreshments. The food should be distributed to people who can benefit from it, especially those experiencing financial hardship or food insecurity.',
          fr: "La sadaqah alimentaire peut être donnée particulièrement le soir, à l'heure où les gens prennent normalement le dîner, un repas du soir, ou du thé ou d'autres rafraîchissements en soirée. La nourriture doit être distribuée à des personnes qui peuvent en bénéficier, en particulier celles connaissant des difficultés financières ou une insécurité alimentaire.",
          ar: 'يمكن تقديم صدقة الطعام بشكل خاص في المساء، في الوقت الذي يتناول فيه الناس عادة العشاء أو وجبة مسائية أو الشاي أو مرطبات مسائية أخرى. ينبغي توزيع الطعام على من يمكن أن يستفيد منه، خاصة من يعانون من ضائقة مالية أو انعدام أمن غذائي.',
        },
      },
      {
        title: { en: 'Helping Someone Experiencing Mental Health Difficulties', fr: 'Aider une personne en difficulté psychologique', ar: 'مساعدة شخص يعاني من صعوبات نفسية' },
        body: {
          en: 'Helping someone experiencing mental or emotional difficulties. The intention is to reduce their hardship and provide compassionate assistance.',
          fr: "Aider une personne traversant des difficultés mentales ou émotionnelles. L'intention est de réduire ses épreuves et d'apporter une assistance bienveillante.",
          ar: 'مساعدة شخص يعاني من صعوبات نفسية أو عاطفية. والنية هي تخفيف معاناته وتقديم مساعدة رحيمة.',
        },
        bullets: {
          en: ['Providing financial assistance', 'Helping with their basic needs', 'Supporting them during a difficult period', 'Offering practical assistance', 'Helping them access appropriate support'],
          fr: ['Fournir une aide financière', 'Aider avec leurs besoins essentiels', 'Les soutenir durant une période difficile', 'Offrir une aide pratique', 'Les aider à accéder à un soutien approprié'],
          ar: ['تقديم مساعدة مالية', 'المساعدة في احتياجاته الأساسية', 'دعمه خلال فترة صعبة', 'تقديم مساعدة عملية', 'مساعدته للحصول على الدعم المناسب'],
        },
      },
      {
        title: { en: 'Supporting Someone Involved in Spiritual Work', fr: 'Soutenir une personne engagée dans une œuvre spirituelle', ar: 'دعم شخص منخرط في عمل روحي' },
        body: {
          en: "Helping a person who is engaged in spiritual or religious activity. Assistance may be financial or practical, depending on the person's needs.",
          fr: "Aider une personne engagée dans une activité spirituelle ou religieuse. L'aide peut être financière ou pratique, selon les besoins de la personne.",
          ar: 'مساعدة شخص منخرط في نشاط روحي أو ديني. يمكن أن تكون المساعدة مالية أو عملية، حسب احتياجات الشخص.',
        },
        bullets: {
          en: ['A spiritual practitioner', 'A person engaged in religious study or service', 'Someone involved in spiritual activities', 'Someone who provides spiritual guidance or related services'],
          fr: ['Un praticien spirituel', 'Une personne engagée dans l\'étude ou le service religieux', 'Une personne impliquée dans des activités spirituelles', 'Une personne offrant une guidance spirituelle ou des services connexes'],
          ar: ['ممارس روحي', 'شخص منخرط في الدراسة أو الخدمة الدينية', 'شخص منخرط في أنشطة روحية', 'شخص يقدم إرشادًا روحيًا أو خدمات ذات صلة'],
        },
      },
    ],
    intention: {
      en: 'The sadaqah should be given sincerely for the benefit of others. The food, fish, or other assistance is distributed to people who can genuinely benefit from it, particularly those experiencing poverty or hardship.',
      fr: "La sadaqah doit être donnée avec sincérité, pour le bénéfice d'autrui. La nourriture, le poisson ou toute autre aide est distribuée à des personnes qui peuvent véritablement en bénéficier, en particulier celles connaissant la pauvreté ou des difficultés.",
      ar: 'ينبغي تقديم الصدقة بإخلاص لمنفعة الآخرين. يُوزَّع الطعام أو السمك أو أي مساعدة أخرى على من يمكن أن يستفيد منها حقًا، خاصة من يعانون الفقر أو الشدة.',
    },
    videoId: '7ifjKRr2sT4',
  },
};
