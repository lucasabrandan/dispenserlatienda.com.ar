// ============================================================
// Google Apps Script — Pegar este código en Google Apps Script
// para recibir leads del formulario de la web.
//
// INSTRUCCIONES:
// 1. Abrí Google Sheets y creá una planilla nueva llamada "Leads Web"
// 2. En la primera fila poné estos encabezados:
//    Fecha | Nombre | Teléfono | Zona | Servicio | Mensaje | Origen
// 3. Menú Extensiones > Apps Script
// 4. Pegá este código, reemplazando todo el contenido
// 5. Deploy > Nueva implementación > Tipo: App web
//    - Ejecutar como: Yo
//    - Quién tiene acceso: Cualquiera
// 6. Copiá la URL del deploy
// 7. En la web, en src/config/site.ts, pegá la URL en SHEETS_WEBHOOK
//    O bien agregá en el HTML: window.__SHEETS_WEBHOOK__ = "URL";
// ============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.fecha || new Date().toISOString(),
      data.nombre || "",
      data.telefono || "",
      data.zona || "",
      data.servicio || "",
      data.mensaje || "",
      data.origen || "web",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Necesario para responder al preflight CORS
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
