# THE YARD | G-Force Lead Magnet Funnel

A high-conversion performance analytics funnel built for **The Yard**. Optimized for the Lion City Classic 2026.

## 📂 Project Structure
- `index.html`: The main funnel page (HTML5, Tailwind CSS, Responsive).
- `script.js`: Frontend logic, GA4 event triggers, and Google Sheets integration.
- `google-apps-script.js`: A backup of the server-side code for your Google Sheet.

## 🚀 Deployment Instructions
This project is self-contained and ready for deployment.

1. **Upload**: Move all files in this directory to your server's public folder.
2. **Analytics**: Open `index.html` and replace `G-XXXXXXXXXX` with your **GA4 Measurement ID**.
3. **Google Sheets**: The lead capture is linked to a Google Apps Script webhook.
    - **Leads Spreadsheet**: [View your leads here](https://docs.google.com/spreadsheets/d/1LIZ66KbOH93Fmeksq27wjeoXO6SRW82LO2AtzWP3rJc/)
    - **Technical Setup**: The script uses a "Hidden Form" method to bypass security restrictions when running from different domains.

## 🛠️ Maintenance & Edits
- **Changing CTA Links**: All buttons are currently set to point to `https://www.theyard.sg/`. You can change this in `script.js` (inside `renderFacts`) and at the bottom of `index.html`.
- **Updating Scientific Facts**: The facts displayed after form submission are managed in the `facts` array at the top of `script.js`.
- **Branding Colors**:
    - **Vivid Gold**: `#f2cd00`
    - **The Yard Red**: `#da0d20`
    - **Strong Azure**: `#00519d`

## 📊 Conversion Tracking
The funnel automatically triggers a `generate_lead` event in Google Analytics whenever someone successfully reveals the report. You can see these stats in your GA4 Real-time or Engagement reports.

---
**Handover Completed: 2026-04-23**
