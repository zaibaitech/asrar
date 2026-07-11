# 📛 Security Badges for README

Add these badges to your `README.md` to showcase your security posture and build trust with users.

---

## 🎯 Quick Copy-Paste

Add this section to your README.md:

```markdown
## 🔒 Security & Quality

[![DevSecOps Security Scan](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml/badge.svg)](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/zaibaitech/asrar/badge.svg)](https://snyk.io/test/github/zaibaitech/asrar)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
[![Code Coverage](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=coverage)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
```

---

## 📊 Individual Badges

### GitHub Actions - Workflow Status

Shows the current status of your security scan workflow.

```markdown
[![DevSecOps Security Scan](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml/badge.svg)](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml)
```

**Badge displays:**
- ✅ Passing - All security scans passed
- ❌ Failing - One or more scans found issues
- 🔄 Running - Scans in progress
- ⚫ No status - Workflow hasn't run yet

---

### Snyk - Vulnerability Count

Shows the number of known vulnerabilities in your dependencies.

```markdown
[![Known Vulnerabilities](https://snyk.io/test/github/zaibaitech/asrar/badge.svg)](https://snyk.io/test/github/zaibaitech/asrar)
```

**Alternative Snyk badges:**

```markdown
<!-- Snyk Security Score -->
[![Snyk Security](https://snyk.io/test/github/zaibaitech/asrar/badge.svg?targetFile=package.json)](https://snyk.io/test/github/zaibaitech/asrar?targetFile=package.json)

<!-- For specific branches -->
[![Snyk (main)](https://snyk.io/test/github/zaibaitech/asrar/main/badge.svg)](https://snyk.io/test/github/zaibaitech/asrar/main)

<!-- For development branch -->
[![Snyk (dev)](https://snyk.io/test/github/zaibaitech/asrar/dev/badge.svg)](https://snyk.io/test/github/zaibaitech/asrar/dev)
```

---

### SonarCloud - Quality Gate

Shows overall project quality status.

```markdown
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
```

**Badge displays:**
- ✅ Passed - Meets quality standards
- ❌ Failed - Below quality threshold

---

### SonarCloud - Security Rating

Shows security rating (A-E scale).

```markdown
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
```

**Rating scale:**
- **A**: 0 vulnerabilities
- **B**: At least 1 minor vulnerability
- **C**: At least 1 major vulnerability
- **D**: At least 1 critical vulnerability
- **E**: At least 1 blocker vulnerability

---

### SonarCloud - Maintainability Rating

Shows maintainability rating based on technical debt.

```markdown
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
```

**Rating based on technical debt ratio:**
- **A**: ≤ 5%
- **B**: 6-10%
- **C**: 11-20%
- **D**: 21-50%
- **E**: > 50%

---

### SonarCloud - Code Coverage

Shows percentage of code covered by tests.

```markdown
[![Code Coverage](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=coverage)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
```

**Color coding:**
- 🟢 Green: ≥ 80%
- 🟡 Yellow: 70-79%
- 🟠 Orange: 50-69%
- 🔴 Red: < 50%

---

### SonarCloud - Additional Metrics

```markdown
<!-- Bugs -->
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=bugs)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)

<!-- Vulnerabilities -->
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)

<!-- Code Smells -->
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)

<!-- Duplicated Lines -->
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)

<!-- Technical Debt -->
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)

<!-- Reliability Rating -->
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)

<!-- Lines of Code -->
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
```

---

### OWASP ZAP Badge

There's no official OWASP ZAP badge, but you can create a custom one:

```markdown
<!-- Custom OWASP ZAP Badge using shields.io -->
[![OWASP ZAP](https://img.shields.io/badge/OWASP%20ZAP-Scanned-brightgreen?logo=owasp)](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml)
```

---

### Trivy Badge

There's no official Trivy badge, but you can create a custom one:

```markdown
<!-- Custom Trivy Badge using shields.io -->
[![Trivy](https://img.shields.io/badge/Trivy-Scanned-blue?logo=docker)](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml)
```

---

## 🎨 Styled Badge Section for README

Here's a beautifully formatted section you can add to your README:

```markdown
## 🔒 Security & Quality Assurance

<div align="center">

### Continuous Security Scanning
[![DevSecOps Security Scan](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml/badge.svg)](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml)

### Dependency Security
[![Known Vulnerabilities](https://snyk.io/test/github/zaibaitech/asrar/badge.svg)](https://snyk.io/test/github/zaibaitech/asrar)

### Code Quality
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
[![Code Coverage](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=coverage)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)

### Security Ratings
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=bugs)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)

</div>

---

### 🛡️ Our Security Practices

We take security seriously. This project is continuously scanned using:

- 🔍 **Snyk** - Dependency vulnerability scanning
- 📊 **SonarCloud** - Code quality and security analysis
- 🛡️ **OWASP ZAP** - Dynamic application security testing
- 🐳 **Trivy** - Comprehensive security scanning

All security scans run automatically on:
- Every pull request
- Every push to main branch
- Weekly scheduled scans
- Manual triggers when needed

For more information, see our [Security Scanning Guide](SECURITY_SCANNING_GUIDE.md).
```

---

## 🔧 Customization Guide

### Update Project Key

Replace `zaibaitech_asrar` with your actual project key in all SonarCloud badges:

```markdown
<!-- Find this -->
project=zaibaitech_asrar

<!-- Replace with your project key -->
project=YOUR_GITHUB_USERNAME_YOUR_REPO_NAME
```

### Update Organization

Replace `zaibaitech` with your GitHub username:

```markdown
<!-- Find this -->
github.com/zaibaitech/asrar

<!-- Replace with -->
github.com/YOUR_USERNAME/YOUR_REPO
```

### Change Badge Style

SonarCloud supports different badge styles:

```markdown
<!-- Default style -->
https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=alert_status

<!-- Flat style (no 3D effect) -->
https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=alert_status&style=flat

<!-- Flat-square style -->
https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=alert_status&style=flat-square
```

---

## 🎨 Custom Badges with Shields.io

Create custom badges for tools that don't provide official ones:

### Template

```markdown
![Badge Name](https://img.shields.io/badge/LABEL-MESSAGE-COLOR?logo=LOGO_NAME)
```

### Examples

```markdown
<!-- Security Scanned Badge -->
![Security](https://img.shields.io/badge/Security-Scanned-brightgreen?logo=security)

<!-- DevSecOps Badge -->
![DevSecOps](https://img.shields.io/badge/DevSecOps-Enabled-blue?logo=github-actions)

<!-- OWASP ZAP -->
![OWASP ZAP](https://img.shields.io/badge/OWASP%20ZAP-Tested-orange?logo=owasp)

<!-- Trivy -->
![Trivy](https://img.shields.io/badge/Trivy-Scanned-blue?logo=aqua)

<!-- Compliance -->
![Compliance](https://img.shields.io/badge/Compliance-OWASP%20Top%2010-green?logo=checkmarx)

<!-- Last Scan -->
![Last Scan](https://img.shields.io/badge/Last%20Scan-December%202025-blue?logo=github-actions)

<!-- Vulnerability Free -->
![Vulnerabilities](https://img.shields.io/badge/Vulnerabilities-0%20Found-brightgreen?logo=shield)
```

### Dynamic Badges

```markdown
<!-- Stars -->
![GitHub Stars](https://img.shields.io/github/stars/zaibaitech/asrar?style=social)

<!-- Forks -->
![GitHub Forks](https://img.shields.io/github/forks/zaibaitech/asrar?style=social)

<!-- License -->
![License](https://img.shields.io/github/license/zaibaitech/asrar)

<!-- Last Commit -->
![Last Commit](https://img.shields.io/github/last-commit/zaibaitech/asrar)

<!-- Issues -->
![Issues](https://img.shields.io/github/issues/zaibaitech/asrar)

<!-- Pull Requests -->
![Pull Requests](https://img.shields.io/github/issues-pr/zaibaitech/asrar)
```

---

## 📱 Badge Placement Suggestions

### Option 1: Top of README (Recommended)

```markdown
# Asrār Everyday

[![DevSecOps](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml/badge.svg)](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml)
[![Snyk](https://snyk.io/test/github/zaibaitech/asrar/badge.svg)](https://snyk.io/test/github/zaibaitech/asrar)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)

> Islamic spiritual guidance app with comprehensive security scanning
```

### Option 2: Dedicated Security Section

```markdown
# Asrār Everyday

> Islamic spiritual guidance app

## Features
...

## Security & Quality

We maintain the highest security standards...

[All security badges here]
```

### Option 3: Footer

```markdown
# Asrār Everyday

[Main content]

---

## Project Status

[All badges here]

## License

MIT
```

---

## 🔗 Badge Links

Make sure your badges link to the right places:

| Badge | Should Link To |
|-------|---------------|
| GitHub Actions | Your workflow runs page |
| Snyk | Snyk project dashboard |
| SonarCloud | SonarCloud project summary |
| Custom badges | Relevant documentation or workflow |

---

## ✅ Verification Checklist

Before adding badges to your README:

- [ ] Replace `zaibaitech` with your GitHub username
- [ ] Replace `asrar` with your repository name
- [ ] Update SonarCloud project key
- [ ] Update SonarCloud organization name
- [ ] Test all badge links (they should load images)
- [ ] Verify badges link to correct dashboards
- [ ] Ensure badges display correctly on GitHub
- [ ] Add context/description for what the badges mean

---

## 🎯 Badge Best Practices

### Do's ✅

- Use badges to showcase project health
- Keep badges up to date
- Provide context for what badges mean
- Link badges to detailed reports
- Group related badges together
- Use consistent styling

### Don'ts ❌

- Don't add too many badges (max 6-8)
- Don't use badges for outdated metrics
- Don't mix different badge styles
- Don't hide failing badges
- Don't add badges without understanding them

---

## 📊 Badge Monitoring

After adding badges, monitor them weekly:

```markdown
Weekly Badge Check:
- [ ] All badges loading correctly
- [ ] No broken images
- [ ] Links go to correct pages
- [ ] Metrics are up to date
- [ ] No new security issues shown
```

---

## 🆘 Troubleshooting Badges

### Badge Not Showing

**Problem:** Badge shows broken image icon

**Solutions:**
```markdown
1. Check URL is correct
2. Verify project is public
3. Wait 5 minutes (caching)
4. Clear browser cache
5. Check service status (GitHub, Snyk, SonarCloud)
```

### Badge Shows Wrong Status

**Problem:** Badge shows "unknown" or outdated status

**Solutions:**
```markdown
1. Trigger workflow manually
2. Wait for next scheduled scan
3. Check if service is down
4. Verify project key is correct
5. Check API token is valid
```

### Badge Not Updating

**Problem:** Badge stuck on old status

**Solutions:**
```markdown
1. Force refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
2. Clear GitHub cache: Add ?v=2 to badge URL
3. Check workflow ran successfully
4. Verify service integration is active
```

---

## 🔗 Additional Resources

- **Shields.io**: https://shields.io - Create custom badges
- **GitHub Badges**: https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge
- **Snyk Badges**: https://docs.snyk.io/scan-applications/snyk-open-source/manage-vulnerabilities/custom-badges
- **SonarCloud Badges**: https://docs.sonarcloud.io/enriching/badges/

---

**Last Updated:** December 11, 2025
**Version:** 1.0.0

---

## 📝 Example README Section

Here's a complete, production-ready security section for your README:

```markdown
## 🔒 Security & Quality

<div align="center">

[![DevSecOps Security Scan](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml/badge.svg)](https://github.com/zaibaitech/asrar/actions/workflows/security-scan.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/zaibaitech/asrar/badge.svg)](https://snyk.io/test/github/zaibaitech/asrar)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)
[![Code Coverage](https://sonarcloud.io/api/project_badges/measure?project=zaibaitech_asrar&metric=coverage)](https://sonarcloud.io/summary/new_code?id=zaibaitech_asrar)

</div>

### 🛡️ Security Tools

This project employs comprehensive DevSecOps practices with automated security scanning:

| Tool | Purpose | Frequency |
|------|---------|-----------|
| 🔍 [Snyk](https://snyk.io) | Dependency vulnerabilities | Every PR, Push, Weekly |
| 📊 [SonarCloud](https://sonarcloud.io) | Code quality & security | Every PR, Push, Weekly |
| 🛡️ [OWASP ZAP](https://www.zaproxy.org) | Dynamic security testing | Every PR, Push, Weekly |
| 🐳 [Trivy](https://trivy.dev) | Comprehensive scanning | Every PR, Push, Weekly |

**Security Reports:** [View detailed security analysis](https://github.com/zaibaitech/asrar/security)

**Vulnerability Disclosure:** Found a security issue? Please email security@yourdomain.com
```

Copy and customize this for your README.md! 🎉
