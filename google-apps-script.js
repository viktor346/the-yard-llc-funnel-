/**
 * G-Force Funnel: Google Sheets Bridge
 * 
 * Instructions:
 * 1. Open a Google Sheet.
 * 2. Go to Extensions > App Script.
 * 3. Delete any existing code and paste this script.
 * 4. Click "Deploy" > "New Deployment".
 * 5. Select "Web App" as the type.
 * 6. Set "Execute as" to "Me".
 * 7. Set "Who has access" to "Anyone".
 * 8. Copy the Web App URL and paste it into the `GOOGLE_SCRIPT_URL` variable in your `script.js` file.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Parent Name', 'Email', 'Child Name', 'Child Age', 'Source', 'Medium', 'Campaign']);
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#f2cd00').setFontColor('#000000');
    }
    
    // Append the lead data
    sheet.appendRow([
      data.timestamp,
      data.parentName,
      data.email,
      data.childName,
      data.childAge,
      data.utm_source,
      data.utm_medium,
      data.utm_campaign
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function to ensure permissions
function doGet() {
  return ContentService.createTextOutput("G-Force Bridge is Active.");
}
