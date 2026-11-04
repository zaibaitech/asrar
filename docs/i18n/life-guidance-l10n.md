# Life Guidance preview: localization status

Strings live in `src/lib/i18n/lifeGuidance/{en,fr,ar,ur}.ts`. Each locale file is typed against `en.ts` and
`locales.test.ts` checks that every key exists in every locale.

Status: **EN = reference. FR, AR and UR are machine-written drafts**, waiting for the Language Reviewer.
None of them is reviewed. Do not change `LIFE_GUIDANCE_REVIEW` to `reviewed` without the reviewer's sign-off.
To change wording later, edit only the locale file. No component changes are needed.

## Drafts needing review (PR #110)
| key | en | fr (draft) | ar (draft) | ur (draft) |
|---|---|---|---|---|
| preview.pageTitle | Life Guidance (preview) | Guidance de vie (aperçu) | إرشاد الحياة (نسخة تجريبية) | زندگی کی رہنمائی (پیش نظارہ) |
| preview.back | Back | Retour | رجوع | واپس |

The rest of the panel already uses the app's main translations (`t.*`). Those are not covered here. See the PR notes.
