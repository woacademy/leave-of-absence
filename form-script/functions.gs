/**
 * Log a staff member's absence request.
 *
 * @param   {Spreadsheet} spread      Partner spreadsheet.
 * @param   {Object}      map         Response map to use.
 * @param   {Date}        time        Time request was submitted.
 * @param   {Array}       responses   Form responses.
 * @return  {void}                    No return.
 */
function LOA_LogAbsenceRequest(spread, map, time, responses) {
  var logsheet = spread.getSheetByName(map.sheetname);
  if (logsheet === null) {
    Logger.log("Error: Can't find sheet by name.");
    return;
  }

  // Push responses to an array before appending.
  var row = new Array(map.responsemap.SIZE);
  row[map.responsemap.SUBMITTED] = LOA_FormatTime(time);
  row[map.responsemap.APPROVED] = "";

  // Fill in user-provided data.
  responses.forEach(function(response) {
    var id = response.getItem().getId();
    if (map.responsemap[id] === null)
      return;

    if (typeof response.getResponse() === "string") {
      row[map.responsemap[id]] = response.getResponse();
    } else {
      row[map.responsemap[id]] = response.getResponse().join(", ");
    }
  });

  // Replace null, date & time elements.
  for (var element = 0; element < row.length; element++) {
    if (row[element] == null) {
      row[element] = "";
      continue;
    }

    timematch = row[element].match(new RegExp("^([0-9]{2}):([0-9]{2})$"));
    if (timematch !== null) {
      row[element] = timematch[1] + ":" + timematch[2] + " ";
      continue;
    }

    datematch = row[element].match(new RegExp("^([0-9]{4})-([0-9]{2})-([0-9]{2})$"));
    if (datematch !== null) {
      row[element] = datematch[3] + "/" + datematch[2] + "/" + datematch[1];
    }
  }

  logsheet.appendRow(row);
  LOA_SetCellWrapping(map);
}

/**
 * Sets a sheet's cell wrapping based on the passed map.
 * 
 * @param   {Object}  map   Desired sheet's map.
 * @return  {void}          No return.
 */
function LOA_SetCellWrapping(map) {
  var sheet = spread.getSheetByName(map.sheetname);
  if (sheet === null) {
    Logger.log("Error: Can't find sheet by name.");
    return;
  }

  Object.keys(map.wrappingmap).forEach(function(a1) {
    sheet.getRange(a1).setWrap(map.wrappingmap[a1]);
  });
}

/**
 * Get the datetime in our preferred format. (e.g. 09/02/2018 @ 14:30)
 * @see docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html
 *
 * @param  {Date}   time  Datetime to use instead of current time.
 * @return {String}       Datetime in "dd/MM/yy @ HH:mm" format.
 */
function LOA_FormatTime(time) {
  // GAS doesn't support ES6 yet, no default value kwargs.
  if (time === undefined)
    time = new Date();

  return Utilities.formatDate(time, "Europe/London", "dd/MM/yy @ HH:mm");
}
