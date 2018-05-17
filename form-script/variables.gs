/**
 * Leave of Absence Manager — Form Script
 *
 * @license   GPLv3, https://www.gnu.org/licenses/gpl.txt
 * @version   1.0
 * @author    Adam Adoch
 * @updated   16/03/2018
 * @link      http://www.woacademy.co.uk
 */
var LOA_PartnerSpread = "";

var LOA_Map = {
  Course: {
    sheetname: "Training/Course",
    choicename: "Training/Course",
    responsemap: {
      SUBMITTED:  0,
      1429934001: 1,
      429300019:  2,
      388884800:  null,
      107618466:  3,
      30515086:   4,
      500753219:  5,
      2083607804: 6,
      291360354:  7,
      1445047359: 8,
      2094995620: 9,
      759510046:  10,
      307098647:  11,
      1880739925: 12,
      912744951:  13,
      1318521897: 14,
      593328463:  15,
      APPROVED:   16,
      COMMENTS:   17,
      SIZE:       18
    },
    wrappingmap: {
      "E:E": true,
      "K:K": true,
      "L:L": true,
      "M:M": true,
      "N:N": true,
      "R:R": true
    }
  },
  Visit: {
    sheetname: "Educational Visit/Trip",
    choicename: "Educational Visit/Trip",
    responsemap: {
      SUBMITTED:  0,
      1429934001: 1,
      429300019:  2,
      388884800:  null,
      618599181:  3,
      139643001:  4,
      1800613921: 5,
      2073873958: 6,
      1950054865: 7,
      1143672954: 8,
      681687809:  9,
      APPROVED:   10,
      COMMENTS:   11,
      SIZE:       12
    },
    wrappingmap: {
      "G:G": true,
      "H:H": true,
      "I:I": true,
      "L:L": true
    }
  },
  Meeting: {
    sheetname: "Off/On-site Meeting",
    choicename: "Off/On Site Meeting",
    responsemap: {
      SUBMITTED:  0,
      1429934001: 1,
      429300019:  2,
      388884800:  null,
      432873242:  3,
      939968191:  4,
      968804999:  5,
      66290329:   6,
      1242993470: 7,
      464625074:  8,
      785664550:  9,
      APPROVED:   10,
      COMMENTS:   11,
      SIZE:       12
    },
    wrappingmap: {
      "H:H": true,
      "I:I": true,
      "L:L": true
    }
  },
  Miscellaneous: {
    sheetname: "Other",
    responsemap: {
      SUBMITTED:  0,
      1429934001: 1,
      429300019:  2,
      388884800:  null,
      695111896:  3,
      APPROVED:   4,
      COMMENTS:   5,
      SIZE:       6
    },
    wrappingmap: {
      "D:D": true,
      "F:F": true
    }
  }
};
