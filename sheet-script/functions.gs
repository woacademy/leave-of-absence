/**
 * Process a staff member's leave of absence.
 *
 * @param  {Boolean}  approve   Whether or not to approve the absence.
 * @param  {String}   email     The staff member's email.
 * @return {Boolean}            True if sendEmail was called, false otherwise. 
 */
function LOA_ProcessAbsence(approve, email) {
  // Check if the email is valid.
  if (new RegExp("^[a-zA-Z0-9\-_.]+@woacademy\.co\.uk$").test(email) === false)
    return false;

  body = LOA_ApproveBody;
  if (approve === false)
    body = LOA_DisapproveBody;

  // Inform the staff member via email.
  MailApp.sendEmail(email,
                    LOA_ReplyTo,
                    LOA_Subject,
                    body);

  return true;
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
