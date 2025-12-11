# 🛡️ Security Scanning Guide

Complete guide to understanding, interpreting, and acting on security scan results for **Asrār Everyday**.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Understanding Each Tool](#understanding-each-tool)
3. [Interpreting Results](#interpreting-results)
4. [Priority Matrix](#priority-matrix)
5. [Common Vulnerabilities & Fixes](#common-vulnerabilities--fixes)
6. [Weekly Maintenance](#weekly-maintenance)
7. [Best Practices](#best-practices)

---

## Overview

Our DevSecOps pipeline includes four complementary security tools:

| Tool | Purpose | What It Scans |
|------|---------|---------------|
| 🔍 **Snyk** | Dependency vulnerabilities | npm packages, dependencies |
| 📊 **SonarCloud** | Code quality & security | Source code, bugs, code smells |
| 🛡️ **OWASP ZAP** | Dynamic security testing | Running web application |
| 🐳 **Trivy** | Comprehensive scanning | Dependencies, configs, containers |

---

## Understanding Each Tool

### 🔍 Snyk - Dependency Security

**What it does:**
- Scans `package.json` and `package-lock.json`
- Identifies known vulnerabilities in dependencies
- Provides fix recommendations and automated PRs

**Where to view results:**
- GitHub: **Security** → **Code scanning** → Filter by "Snyk"
- Snyk Dashboard: https://app.snyk.io
- Workflow Artifacts: Download `snyk-report.json`

**Key metrics:**
- **Critical**: Immediate action required
- **High**: Fix within 1 week
- **Medium**: Fix within 1 month
- **Low**: Fix when convenient

**Example output:**
```json
{
  "vulnerabilities": [
    {
      "id": "SNYK-JS-AXIOS-1234567",
      "title": "Prototype Pollution",
      "severity": "high",
      "packageName": "axios",
      "version": "0.21.0",
      "fixedIn": ["0.21.2"]
    }
  ]
}
```

**How to fix:**
```bash
# View Snyk recommendations
npx snyk test

# Fix automatically (when available)
npx snyk fix

# Update specific package
npm update axios@0.21.2

# Or update all packages
npm audit fix
```

---

### 📊 SonarCloud - Code Quality & Security

**What it does:**
- Analyzes source code for bugs, vulnerabilities, and code smells
- Measures code coverage and technical debt
- Enforces coding standards

**Where to view results:**
- SonarCloud Dashboard: https://sonarcloud.io
- Pull Request comments (automatic)
- GitHub: **Checks** tab in PRs

**Key metrics:**
- **Bugs**: Logic errors that could cause failures
- **Vulnerabilities**: Security issues in code
- **Code Smells**: Maintainability issues
- **Coverage**: Percentage of code tested
- **Duplication**: Repeated code blocks

**Quality Gate:**
```
✅ PASSED - Code meets quality standards
❌ FAILED - Code needs improvement

Criteria:
- New bugs: 0
- New vulnerabilities: 0
- New code coverage: ≥ 80%
- Duplicated code: ≤ 3%
```

**Common findings and fixes:**

#### 1. **Hardcoded Credentials**
```typescript
// ❌ Bad
const apiKey = "sk-1234567890abcdef";

// ✅ Good
const apiKey = process.env.API_KEY;
```

#### 2. **SQL Injection Risk**
```typescript
// ❌ Bad
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ✅ Good
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

#### 3. **Unused Variables**
```typescript
// ❌ Bad
const unusedVar = "something";
const name = "John";

// ✅ Good
const name = "John";
```

#### 4. **Cognitive Complexity**
```typescript
// ❌ Bad - High complexity
function processData(data) {
  if (data) {
    if (data.type === 'A') {
      if (data.value > 10) {
        // deeply nested logic
      }
    }
  }
}

// ✅ Good - Reduced complexity
function processData(data) {
  if (!data || data.type !== 'A' || data.value <= 10) {
    return;
  }
  // logic here
}
```

---

### 🛡️ OWASP ZAP - Dynamic Security Testing

**What it does:**
- Scans running web application
- Simulates attacks (XSS, SQL injection, etc.)
- Tests for configuration issues

**Where to view results:**
- Workflow Artifacts: Download `report_html.html`
- GitHub Actions: View in job logs
- Download `report_json.json` for programmatic access

**Alert levels:**
```
🔴 High: Critical security issue
🟡 Medium: Significant security concern
🔵 Low: Minor security issue
⚪ Informational: Best practice recommendation
```

**Common findings and fixes:**

#### 1. **Missing Security Headers**
```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};
```

#### 2. **Content Security Policy**
```typescript
// next.config.js
{
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://api.example.com",
  ].join('; '),
}
```

#### 3. **Secure Cookies**
```typescript
// In your API routes
import { serialize } from 'cookie';

export default function handler(req, res) {
  const cookie = serialize('token', 'value', {
    httpOnly: true,      // Prevents JavaScript access
    secure: true,        // HTTPS only
    sameSite: 'strict',  // CSRF protection
    maxAge: 3600,
    path: '/',
  });
  
  res.setHeader('Set-Cookie', cookie);
}
```

---

### 🐳 Trivy - Comprehensive Scanning

**What it does:**
- Scans dependencies for vulnerabilities
- Checks configuration files
- Analyzes Docker containers (if used)
- Detects misconfigurations

**Where to view results:**
- GitHub: **Security** → **Code scanning** → Filter by "Trivy"
- Workflow Artifacts: Download `trivy-report.json` or `trivy-report.txt`

**Severity levels:**
```
🔴 CRITICAL: Exploit known, fix immediately
🟠 HIGH: Serious vulnerability, fix soon
🟡 MEDIUM: Potential risk, plan fix
🟢 LOW: Minor issue, fix when convenient
```

**Example output:**
```
Total: 45 (CRITICAL: 2, HIGH: 8, MEDIUM: 15, LOW: 20)

┌─────────────────┬───────────────┬──────────┬────────────────┐
│    Library      │ Vulnerability │ Severity │   Fix Version  │
├─────────────────┼───────────────┼──────────┼────────────────┤
│ lodash          │ CVE-2021-23337│ HIGH     │ 4.17.21        │
│ axios           │ CVE-2021-3749 │ CRITICAL │ 0.21.2         │
└─────────────────┴───────────────┴──────────┴────────────────┘
```

**How to fix:**
```bash
# Update specific package
npm update lodash@4.17.21

# Update all packages
npm audit fix

# Force update (may break things)
npm audit fix --force

# Check for updates
npm outdated
```

---

## Interpreting Results

### Reading the Security Summary

After each workflow run, check the **Summary** tab:

```markdown
# 🔒 DevSecOps Security Scan Summary

**Scan Date:** 2025-12-11
**Repository:** zaibaitech/asrar
**Branch:** main

## Scan Results

| Tool        | Status  |
|-------------|---------|
| 🔍 Snyk     | success |
| 📊 SonarCloud | success |
| 🛡️ OWASP ZAP | success |
| 🐳 Trivy    | success |
```

**Status meanings:**
- ✅ **success**: No critical issues found
- ⚠️ **failure**: Critical issues found, build failed
- 🔄 **cancelled**: Scan was stopped
- ⏭️ **skipped**: Scan didn't run

### Understanding Workflow Artifacts

Download and examine these reports:

1. **snyk-report.json**
   - Lists all vulnerable dependencies
   - Provides CVE IDs for research
   - Shows fix versions

2. **report_html.html** (OWASP ZAP)
   - Visual report of web vulnerabilities
   - Color-coded by severity
   - Includes attack examples

3. **trivy-report.json**
   - Detailed vulnerability database
   - Package-level information
   - Links to CVE databases

4. **trivy-report.txt**
   - Human-readable summary
   - Quick overview of issues
   - Easy to share with team

---

## Priority Matrix

Use this matrix to prioritize fixes:

| Severity | Exploitability | Priority | Action Timeline |
|----------|----------------|----------|-----------------|
| CRITICAL | Known exploit | 🔴 P0 | Fix immediately (same day) |
| HIGH | Easy to exploit | 🟠 P1 | Fix within 1 week |
| HIGH | Hard to exploit | 🟡 P2 | Fix within 2 weeks |
| MEDIUM | Known exploit | 🟡 P2 | Fix within 2 weeks |
| MEDIUM | No known exploit | 🟢 P3 | Fix within 1 month |
| LOW | Any | ⚪ P4 | Fix when convenient |

### Decision Flow

```
Is it CRITICAL? 
  ├─ Yes → Fix NOW
  └─ No → Is it HIGH?
         ├─ Yes → Fix this week
         └─ No → Is it in production?
                ├─ Yes → Fix this month
                └─ No → Backlog
```

---

## Common Vulnerabilities & Fixes

### 1. Outdated Dependencies

**Finding:**
```
axios@0.21.0 has known vulnerabilities
```

**Fix:**
```bash
npm update axios
# or
npm install axios@latest
```

**Prevention:**
```bash
# Enable Dependabot in GitHub
# Settings → Security → Dependabot → Enable
```

---

### 2. Prototype Pollution

**Finding:**
```
lodash vulnerable to prototype pollution
```

**Fix:**
```bash
npm update lodash@4.17.21
```

**Prevention:**
```typescript
// Avoid using lodash merge on user input
// Use Object.assign or spread operator instead
const merged = { ...obj1, ...obj2 };
```

---

### 3. Cross-Site Scripting (XSS)

**Finding:**
```
Reflected XSS in search parameter
```

**Fix:**
```typescript
// ❌ Bad
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ Good
<div>{userInput}</div>  // React escapes by default

// Or use DOMPurify for HTML
import DOMPurify from 'isomorphic-dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />
```

---

### 4. Sensitive Data Exposure

**Finding:**
```
API keys found in source code
```

**Fix:**
```typescript
// ❌ Bad
const API_KEY = "sk-1234567890";

// ✅ Good
// .env.local (not committed)
NEXT_PUBLIC_API_KEY=sk-1234567890

// In code
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
```

**Prevention:**
```bash
# Add to .gitignore
echo ".env.local" >> .gitignore
echo ".env*.local" >> .gitignore

# Use .env.example for documentation
cp .env.local .env.example
# Remove sensitive values from .env.example
```

---

### 5. Insecure Direct Object References

**Finding:**
```
User can access other users' data by changing URL
```

**Fix:**
```typescript
// ❌ Bad
export async function getServerSideProps({ params }) {
  const user = await db.users.findById(params.id);
  return { props: { user } };
}

// ✅ Good
export async function getServerSideProps({ params, req }) {
  const session = await getSession(req);
  
  // Verify user owns this resource
  if (params.id !== session.userId) {
    return { notFound: true };
  }
  
  const user = await db.users.findById(params.id);
  return { props: { user } };
}
```

---

## Weekly Maintenance

### Monday: Review Last Week's Scans

```bash
# Check security alerts
# GitHub → Security → Code scanning alerts

# Review Dependabot PRs
# GitHub → Pull requests → Created by dependabot
```

### Wednesday: Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update non-breaking changes
npm update

# Test thoroughly
npm run build
npm run dev
```

### Friday: Security Audit

```bash
# Run npm audit
npm audit

# Fix automatically if safe
npm audit fix

# Review manual fixes needed
npm audit fix --force  # Use with caution
```

### Monthly: Deep Dive

- Review SonarCloud code coverage trends
- Analyze technical debt metrics
- Update security documentation
- Schedule fixes for P3/P4 issues

---

## Best Practices

### 1. Never Ignore Security Warnings

```bash
# ❌ Bad
npm audit --audit-level=none

# ✅ Good
npm audit
# Review each finding
# Fix or document why it's acceptable
```

### 2. Keep Dependencies Up to Date

```json
// package.json
{
  "dependencies": {
    "react": "^18.3.1",  // ^ allows minor updates
    "next": "^14.2.0"
  }
}
```

### 3. Use Security Headers

```typescript
// next.config.js - Add all security headers
// See OWASP ZAP section for examples
```

### 4. Implement Rate Limiting

```typescript
// API routes
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

export default limiter;
```

### 5. Validate All Input

```typescript
// Use Zod or Yup for validation
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  age: z.number().min(18).max(120),
});

// Validate
const result = userSchema.safeParse(userInput);
if (!result.success) {
  // Handle validation errors
}
```

### 6. Enable Security Features

```typescript
// next.config.js
module.exports = {
  // Prevent external image optimization
  images: {
    domains: ['yourdomain.com'],
  },
  
  // Enable strict mode
  reactStrictMode: true,
  
  // Security headers
  async headers() {
    // See OWASP ZAP section
  },
};
```

### 7. Regular Security Training

- Stay updated on OWASP Top 10
- Follow security blogs and newsletters
- Review CVE databases for your stack
- Participate in security communities

---

## 📊 Metrics to Track

### Weekly Dashboard

| Metric | Target | Current |
|--------|--------|---------|
| Critical Vulnerabilities | 0 | ? |
| High Vulnerabilities | < 5 | ? |
| Code Coverage | > 80% | ? |
| Technical Debt | < 5 days | ? |
| Security Score (SonarCloud) | A | ? |

### Monthly Trends

- Number of vulnerabilities over time (should decrease)
- Mean time to fix (MTTF) - should decrease
- Code coverage percentage - should increase
- Security alerts response time - should decrease

---

## 🔗 Useful Resources

### CVE Databases
- https://cve.mitre.org
- https://nvd.nist.gov
- https://snyk.io/vuln

### Security Guides
- OWASP Top 10: https://owasp.org/www-project-top-ten
- OWASP Cheat Sheets: https://cheatsheetseries.owasp.org
- Next.js Security: https://nextjs.org/docs/advanced-features/security-headers

### Tools Documentation
- Snyk: https://docs.snyk.io
- SonarCloud: https://docs.sonarcloud.io
- OWASP ZAP: https://www.zaproxy.org/docs
- Trivy: https://aquasecurity.github.io/trivy

---

## 🆘 When to Escalate

Contact security experts if you encounter:

- 🔴 **Critical vulnerability with active exploits**
- 🔴 **Data breach or suspicious activity**
- 🔴 **Zero-day vulnerability in your stack**
- 🟠 **Unable to patch critical vulnerability**
- 🟠 **Conflicting dependency requirements**

### Emergency Response

1. **Assess**: Understand the impact
2. **Contain**: Isolate affected systems
3. **Remediate**: Apply patches/fixes
4. **Verify**: Confirm fix is effective
5. **Document**: Record incident and response

---

**Last Updated:** December 11, 2025
**Version:** 1.0.0
**Next Review:** January 11, 2026
