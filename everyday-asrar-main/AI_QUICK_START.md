# 🚀 AI Analysis - Quick Reference

## 🔑 Get Your Free API Key (1 minute)

1. Go to: **https://makersuite.google.com/app/apikey**
2. Sign in with Google
3. Click "Create API Key"
4. Copy it

## ⚙️ Add to Your App (30 seconds)

Open `.env` file and paste:
```env
GEMINI_API_KEY=paste_your_key_here
```

## 🔄 Restart Server

Press `Ctrl+C` then:
```bash
npm run dev
```

## ✅ Test It

1. Open **http://localhost:3000**
2. Do a name calculation
3. Scroll to bottom
4. Click purple AI button ✨
5. Get instant deep analysis!

## 📊 Free Limits

- 15 requests/minute
- 1,500 requests/day  
- 1 million/month
- No credit card needed

## 🎯 Where It Appears

- ✅ Name Destiny results
- ✅ Life Path results
- 🔜 Easy to add to others

## 🔧 Files

- **API**: `app/api/ai-analysis/route.ts`
- **UI**: `src/components/AIAnalysis.tsx`
- **Logic**: `src/lib/ai-analysis.ts`

## 💡 Customize

Edit prompts in `app/api/ai-analysis/route.ts` (line 53+)

## ⚠️ Troubleshooting

**No button?** - Check import in IlmHurufPanel_temp.tsx
**Error?** - Verify API key in .env
**Not working?** - Restart server after adding key

---

**That's it! 3 steps to AI-powered insights!** ✨
