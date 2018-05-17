/**
 * Called whenever a form responses is submitted
 *
 * @param   {Object}    e   GAS event parameter.
 * @return  {void}          No return.
 */
function LOA_OnSubmit(e) {
  var spreadsheet = SpreadsheetApp.openById(LOA_PartnerSpread);
  if (spreadsheet === null) {
    Logger.log("Error: Can't open partner spreadsheet.");
    return;
  }

  var time = e.response.getTimestamp();
  var responses = e.response.getItemResponses();

  // TODO: Make this more dynamic.
  switch (responses[2].getResponse()) {
    case LOA_Map.Course.choicename:
      LOA_LogAbsenceRequest(spreadsheet, LOA_Map.Course, time, responses);
      break;
    case LOA_Map.Visit.choicename:
      LOA_LogAbsenceRequest(spreadsheet, LOA_Map.Visit, time, responses);
      break;
    case LOA_Map.Meeting.choicename:
      LOA_LogAbsenceRequest(spreadsheet, LOA_Map.Meeting, time, responses);
      break;
    default:
      LOA_LogAbsenceRequest(spreadsheet, LOA_Map.Miscellaneous, time, responses);
  }
}
