# 🔒 DevSecOps Security Scanning Setup Guide

Complete step-by-step guide to set up automated security scanning for **Asrār Everyday** using Snyk, SonarCloud, OWASP ZAP, and Trivy.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Snyk Setup](#1-snyk-setup)
3. [SonarCloud Setup](#2-sonarcloud-setup)
4. [OWASP ZAP Setup](#3-owasp-zap-setup)
5. [Trivy Setup](#4-trivy-setup)
6. [GitHub Repository Configuration](#5-github-repository-configuration)
7. [Testing the Workflow](#6-testing-the-workflow)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure you have:

- ✅ GitHub repository with admin access
- ✅ Project is public (for free tier access to SonarCloud)
- ✅ Basic understanding of GitHub Actions
- ✅ Email account for registering with security tools

---

## 1. Snyk Setup

Snyk scans for vulnerabilities in dependencies and provides fix recommendations.

### Step 1.1: Create Snyk Account

1. Go to [https://snyk.io/signup](https://snyk.io/signup)
2. Click **"Sign up with GitHub"**
3. Authorize Snyk to access your GitHub account
4. Select the **Free Plan** (includes unlimited tests for open source)

### Step 1.2: Generate Snyk API Token

1. After login, click your profile icon (top right)
2. Go to **Account Settings**
3. Scroll to **General** → **API Token**
4. Click **"Show"** then **"Copy"** the token
5. **Save this token** - you'll need it for GitHub Secrets

### Step 1.3: (Optional) Import Repository

1. In Snyk dashboard, click **"Add project"**
2. Select **"GitHub"**
3. Find and select your `asrar` repository
4. Click **"Add selected repositories"**

> **Note:** The GitHub Action will also monitor your project automatically.

### Step 1.4: Add Snyk Token to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `SNYK_TOKEN`
5. Value: Paste the token from Step 1.2
6. Click **"Add secret"**

✅ **Snyk Setup Complete!**

---

## 2. SonarCloud Setup

SonarCloud analyzes code quality, security vulnerabilities, and technical debt.

### Step 2.1: Create SonarCloud Account

1. Go to [https://sonarcloud.io](https://sonarcloud.io)
2. Click **"Log in"** → **"With GitHub"**
3. Authorize SonarCloud to access your GitHub account
4. This is **FREE for public repositories**

### Step 2.2: Create Organization

1. After login, click **"+"** (top right) → **"Analyze new project"**
2. If you don't have an organization:
   - Click **"Create new organization"**
   - Choose **"Free plan"** (for public repos)
   - Organization key: `zaibaitech` (or your GitHub username)
   - Display name: Your preference
   - Click **"Continue"**

### Step 2.3: Import Repository

1. Select your GitHub organization
2. Find **"asrar"** repository
3. Click **"Set Up"**
4. Choose **"With GitHub Actions"**
5. SonarCloud will show you configuration - we already have this in our workflow

### Step 2.4: Get SonarCloud Token

1. Go to **My Account** (top right profile icon)
2. Click **"Security"** tab
3. Under **"Generate Tokens"**:
   - Name: `GitHub Actions - asrar`
   - Type: Choose **"Global Analysis Token"** or **"Project Analysis Token"**
   - Click **"Generate"**
4. **Copy the token** immediately (it won't be shown again)

### Step 2.5: Add SonarCloud Token to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `SONAR_TOKEN`
5. Value: Paste the token from Step 2.4
6. Click **"Add secret"**

### Step 2.6: Verify Project Key

Ensure your `sonar-project.properties` file has the correct values:

```properties
sonar.projectKey=zaibaitech_asrar
sonar.organization=zaibaitech
```

Update these values if your organization or project key is different.

✅ **SonarCloud Setup Complete!**

---

## 3. OWASP ZAP Setup

OWASP ZAP (Zed Attack Proxy) performs dynamic security testing on your running application.

### Step 3.1: Understanding OWASP ZAP

- ✅ **No account needed** - runs directly in GitHub Actions
- ✅ **No API tokens needed**
- ✅ Scans your running web application for vulnerabilities
- ✅ Completely free and open source

### Step 3.2: Configuration (Already Complete)

The `.zap/rules.tsv` file has been created with sensible defaults:

- **IGNORE**: Development warnings that don't apply to production
- **WARN**: Potential security issues that should be reviewed
- **FAIL**: Critical vulnerabilities that will fail the build

### Step 3.3: Customize Rules (Optional)

Edit `.zap/rules.tsv` to adjust which issues should fail the build:

```tsv
# Change IGNORE to WARN or FAIL for stricter checks
10054	WARN	Cookie Without SameSite Attribute

# Change FAIL to WARN to allow builds with known issues
40012	WARN	Cross Site Scripting (Reflected)
```

✅ **OWASP ZAP Setup Complete!**

---

## 4. Trivy Setup

Trivy scans for vulnerabilities in dependencies, containers, and configurations.

### Step 4.1: Understanding Trivy

- ✅ **No account needed** - open source tool
- ✅ **No API tokens needed**
- ✅ Scans file system, dependencies, and containers
- ✅ Completely free

### Step 4.2: Configuration (Already Complete)

Trivy is configured in the GitHub Actions workflow to:

- Scan all project files and dependencies
- Report CRITICAL, HIGH, and MEDIUM severity issues
- Upload results to GitHub Security tab
- Generate JSON and text reports

### Step 4.3: Customize Severity (Optional)

Edit `.github/workflows/security-scan.yml` to adjust severity levels:

```yaml
# Only fail on CRITICAL issues
severity: 'CRITICAL'

# Include all severity levels
severity: 'CRITICAL,HIGH,MEDIUM,LOW,UNKNOWN'
```

✅ **Trivy Setup Complete!**

---

## 5. GitHub Repository Configuration

### Step 5.1: Enable GitHub Security Features

1. Go to **Settings** → **Code security and analysis**
2. Enable the following:
   - ✅ **Dependency graph** (should be enabled by default)
   - ✅ **Dependabot alerts**
   - ✅ **Dependabot security updates**
   - ✅ **Code scanning** (will be populated by our workflow)
   - ✅ **Secret scanning** (if available for your repo type)

### Step 5.2: Verify GitHub Secrets

Ensure you have these secrets configured in **Settings** → **Secrets and variables** → **Actions**:

| Secret Name | Description | Required |
|------------|-------------|----------|
| `SNYK_TOKEN` | Snyk API token | ✅ Yes |
| `SONAR_TOKEN` | SonarCloud token | ✅ Yes |

**Note:** `GITHUB_TOKEN` is automatically provided by GitHub Actions.

### Step 5.3: Branch Protection (Recommended)

1. Go to **Settings** → **Branches**
2. Click **"Add rule"** for `main` branch
3. Enable:
   - ✅ **Require status checks to pass before merging**
   - ✅ Select: `Snyk Security Scan`, `SonarCloud Analysis`, `OWASP ZAP Security Scan`, `Trivy Security Scan`
   - ✅ **Require branches to be up to date before merging**

This ensures all security scans must pass before code can be merged.

✅ **GitHub Configuration Complete!**

---

## 6. Testing the Workflow

### Step 6.1: Manual Trigger

1. Go to **Actions** tab in your repository
2. Select **"DevSecOps Security Scanning"** workflow
3. Click **"Run workflow"** dropdown
4. Select `main` branch
5. Click **"Run workflow"** button

### Step 6.2: Monitor Execution

Watch each job execute:

1. ✅ Snyk Security Scan (~2-3 minutes)
2. ✅ SonarCloud Analysis (~2-4 minutes)
3. ✅ OWASP ZAP Security Scan (~5-10 minutes)
4. ✅ Trivy Security Scan (~1-2 minutes)
5. ✅ Security Scan Summary (~30 seconds)

### Step 6.3: View Results

**In GitHub Actions:**
- Click on the workflow run
- View the **Summary** tab for consolidated results
- Download artifacts for detailed reports

**In GitHub Security Tab:**
- Go to **Security** → **Code scanning**
- View alerts from Snyk, Trivy, and other tools

**In External Dashboards:**
- **Snyk**: [https://app.snyk.io](https://app.snyk.io)
- **SonarCloud**: [https://sonarcloud.io](https://sonarcloud.io)

### Step 6.4: Test with a Pull Request

1. Create a new branch: `git checkout -b test-security-scan`
2. Make a small change to any file
3. Commit and push: `git add . && git commit -m "Test security scan" && git push origin test-security-scan`
4. Create a pull request on GitHub
5. Watch the security scans run automatically
6. View results directly in the PR

✅ **Testing Complete!**

---

## Troubleshooting

### Common Issues and Solutions

#### Issue: Snyk scan fails with "Authentication failed"

**Solution:**
```bash
# Verify SNYK_TOKEN is set correctly
# In GitHub: Settings → Secrets → SNYK_TOKEN
# Token should start with a UUID format
```

#### Issue: SonarCloud shows "Project not found"

**Solution:**
```properties
# Check sonar-project.properties has correct values:
sonar.projectKey=YOUR_GITHUB_USERNAME_REPOSITORY
sonar.organization=YOUR_SONARCLOUD_ORG

# Example:
sonar.projectKey=zaibaitech_asrar
sonar.organization=zaibaitech
```

#### Issue: OWASP ZAP fails with "Connection refused"

**Solution:**
```yaml
# Ensure Next.js is running before ZAP scans
# Check the workflow has proper wait time
timeout 60 bash -c 'until curl -f http://localhost:3000; do sleep 2; done'
```

#### Issue: Trivy shows too many low-severity issues

**Solution:**
```yaml
# Adjust severity threshold in workflow
severity: 'CRITICAL,HIGH'  # Remove MEDIUM
```

#### Issue: Workflow runs too slowly

**Solution:**
```yaml
# Optimize by:
# 1. Use npm ci instead of npm install (already done)
# 2. Enable caching (already done)
# 3. Run independent jobs in parallel (already done)
# 4. Reduce ZAP scan depth in .zap/rules.tsv
```

#### Issue: Too many false positives

**Solution:**
```
# For OWASP ZAP: Edit .zap/rules.tsv
10054	IGNORE	Cookie Without SameSite Attribute

# For SonarCloud: Add to sonar-project.properties
sonar.issue.ignore.multicriteria=e1
sonar.issue.ignore.multicriteria.e1.ruleKey=javascript:S1135
sonar.issue.ignore.multicriteria.e1.resourceKey=**/*.tsx
```

---

## 📊 Expected Scan Duration

| Tool | Average Duration | Frequency |
|------|-----------------|-----------|
| Snyk | 2-3 minutes | Every PR, Push, Weekly |
| SonarCloud | 2-4 minutes | Every PR, Push, Weekly |
| OWASP ZAP | 5-10 minutes | Every PR, Push, Weekly |
| Trivy | 1-2 minutes | Every PR, Push, Weekly |
| **Total** | **~10-20 minutes** | Per run |

---

## 🎯 Next Steps

1. ✅ Review first scan results
2. ✅ Fix critical and high-severity issues
3. ✅ Add security badges to README (see `README_BADGES.md`)
4. ✅ Set up notifications for security alerts
5. ✅ Schedule regular security reviews
6. ✅ Document security findings in your blog post

---

## 📚 Additional Resources

- **Snyk Documentation**: https://docs.snyk.io
- **SonarCloud Documentation**: https://docs.sonarcloud.io
- **OWASP ZAP Documentation**: https://www.zaproxy.org/docs
- **Trivy Documentation**: https://aquasecurity.github.io/trivy
- **GitHub Actions Security**: https://docs.github.com/en/actions/security-guides

---

## 🆘 Need Help?

If you encounter issues not covered here:

1. Check the **Actions** tab for detailed error logs
2. Review each tool's documentation
3. Check GitHub Issues for similar problems
4. Join the tool's community forums:
   - Snyk: https://community.snyk.io
   - SonarCloud: https://community.sonarsource.com
   - OWASP ZAP: https://groups.google.com/group/zaproxy-users

---

**Last Updated:** December 11, 2025
**Version:** 1.0.0
