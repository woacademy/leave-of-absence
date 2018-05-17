/**
 * Called whenever a cell is edited.
 * This must be an installable trigger to access MailApp.
 *
 * @param   {Object}    e   GAS event parameter.
 * @return  {void}          No return.
 */
function LOA_OnEdit(e) {
  // Ignore non-listeners.
  if (!(e.value.charAt(0).toLowerCase() in LOA_Listeners))
    return;

  // The approved column is always the last.
  var sheet = e.source.getActiveSheet();
  if (e.range.getColumn() !== (sheet.getRange("1:1").getLastColumn() - 1))
    return;

  // Process the selected absence.
  var email = sheet.getRange("C" + e.range.getRow()).getValue();
  if (LOA_Listeners[e.value.charAt(0).toLowerCase()] === true) {
    LOA_ProcessAbsence(true, email);
    e.range.setValue("A — " + LOA_FormatTime());
  } else {
    LOA_ProcessAbsence(false, email);
    e.range.setValue("D — " + LOA_FormatTime());
  }
}
