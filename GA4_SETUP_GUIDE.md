# 📊 Google Analytics 4 Setup Guide

To ensure your funnel correctly tracks visitors from the QR code and logs lead conversions, please follow these steps:

### 1. Find Your Measurement ID

1. Log in to [Google Analytics](https://analytics.google.com/).
2. Go to **Admin** (gear icon) > **Data Streams**.
3. Select your web stream (or create one for `theyard.sg`).
4. Copy the **Measurement ID** (it starts with `G-`).

### 2. Update the Code

1. Open **`index.html`** in your code editor.
2. Search for the text `G-XXXXXXXXXX`.
3. Replace **both occurrences** with your real Measurement ID:
   - **Line 199**: Inside the `<script src="...">` tag.
   - **Line 204**: Inside the `gtag('config', '...');` line.

### 3. Verify Tracking

Once you've uploaded the files to your server:

1. Visit the page using the QR code link.
2. Open Google Analytics > **Reports** > **Real-time**.
3. You should see a visitor active on the page.
4. When you submit the lead form, look for the `generate_lead` event in the Real-time event card.

---
**Handover Completed: 2026-04-23**
**Project: G-Force Performance Funnel**
