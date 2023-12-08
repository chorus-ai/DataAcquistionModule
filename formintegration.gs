var token = "<TOKEN REDACTED>";

var ehr_types = "Demographics, Labs, Inputs/Outputs - fluids (inclusion transfusions), Conditions/diagnoses, Vital Signs (from Flowsheets), Organ support (from Flowsheets), Assessments (from Flowsheets), Other Flowsheets, Medications, Procedures, SDoH, Orders"

var uehr_types = "H&P, Progress notes, Discharge summaries, Nurses notes, Radiology reports, Echo and Ultrasound reports, Ancillary services notes, Social service notes, Operative and procedure notes, Clinical consults"

var issuenum_pt = {
  "Massachusetts General Hospital": "64",
  "Mayo Clinic": "66",
  "University of California San Francisco": "70",
  "University of New Mexico": "72",
  "University of Washington/Seattle Childrens": "68",
  "University of California Los Angeles": "69",
  "Duke University": "62",
  "Emory University": "63",
  "University of Pittsburgh": "73",
  "University of Virginia": "74",
  "Columbia University": "61",
  "Nationwide Childrens Hospital": "67",
  "University of Florida": "71",
  "Massachusetts Institute of Technology": "65"
};

var issuenum_wf = {
  "Massachusetts General Hospital": "20",
  "Mayo Clinic": "28",
  "University of California San Francisco": "44",
  "University of New Mexico": "52",
  "University of Washington/Seattle Childrens": "36",
  "University of California Los Angeles": "40",
  "Duke University": "11",
  "Emory University": "16",
  "University of Pittsburgh": "56",
  "University of Virginia": "60",
  "Columbia University": "1",
  "Nationwide Childrens Hospital": "32",
  "University of Florida": "48",
  "Massachusetts Institute of Technology": "24"
};

var issuenum_img = {
  "Massachusetts General Hospital": "19",
  "Mayo Clinic": "27",
  "University of California San Francisco": "43",
  "University of New Mexico": "51",
  "University of Washington/Seattle Childrens": "35",
  "University of California Los Angeles": "39",
  "Duke University": "12",
  "Emory University": "15",
  "University of Pittsburgh": "55",
  "University of Virginia": "59",
  "Columbia University": "4",
  "Nationwide Childrens Hospital": "31",
  "University of Florida": "47",
  "Massachusetts Institute of Technology": "23"
};

var issuenum_uehr = {
  "Massachusetts General Hospital": "18",
  "Mayo Clinic": "26",
  "University of California San Francisco": "42",
  "University of New Mexico": "50",
  "University of Washington/Seattle Childrens": "34",
  "University of California Los Angeles": "38",
  "Duke University": "9",
  "Emory University": "14",
  "University of Pittsburgh": "54",
  "University of Virginia": "58",
  "Columbia University": "2",
  "Nationwide Childrens Hospital": "30",
  "University of Florida": "46",
  "Massachusetts Institute of Technology": "22"
};

var issuenum_ehr = {
  "Massachusetts General Hospital": "17",
  "Mayo Clinic": "25",
  "University of California San Francisco": "41",
  "University of New Mexico": "49",
  "University of Washington/Seattle Childrens": "33",
  "University of California Los Angeles": "37",
  "Duke University": "10",
  "Emory University": "13",
  "University of Pittsburgh": "53",
  "University of Virginia": "57",
  "Columbia University": "3",
  "Nationwide Childrens Hospital": "29",
  "University of Florida": "45",
  "Massachusetts Institute of Technology": "21"
};

var gh_item_id = {
  "Massachusetts General Hospital": "PVTI_lADOB2W_hM4AWFPnzgKXPv0",
  "Mayo Clinic": "PVTI_lADOB2W_hM4AWFPnzgKXP6w",
  "University of California San Francisco": "PVTI_lADOB2W_hM4AWFPnzgKXQM4",
  "University of New Mexico": "PVTI_lADOB2W_hM4AWFPnzgKkDpk",
  "University of Washington/Seattle Childrens": "PVTI_lADOB2W_hM4AWFPnzgKXQEI",
  "University of California Los Angeles": "PVTI_lADOB2W_hM4AWFPnzgKXQI4",
  "Duke University": "PVTI_lADOB2W_hM4AWFPnzgKXPiA",
  "Emory University": "PVTI_lADOB2W_hM4AWFPnzgKXPl0",
  "University of Pittsburgh": "PVTI_lADOB2W_hM4AWFPnzgKXQdc",
  "University of Virginia": "PVTI_lADOB2W_hM4AWFPnzgKXQhU",
  "Columbia University": "PVTI_lADOB2W_hM4AWFPnzgKkDpo",
  "Nationwide Childrens Hospital": "PVTI_lADOB2W_hM4AWFPnzgKXQAU",
  "University of Florida": "PVTI_lADOB2W_hM4AWFPnzgKXQVI",
  "Massachusetts Institute of Technology": "PVTI_lADOB2W_hM4AWFPnzgKXP2g"
};

var gh_field_id = {
  "Status": "PVTSSF_lADOB2W_hM4AWFPnzgOHL3Y",
  "First Pull Status": "PVTSSF_lADOB2W_hM4AWFPnzgOHL4A",
  "Second Pull Status": "PVTSSF_lADOB2W_hM4AWFPnzgOHL4E",
  "Third Pull Status": "PVTSSF_lADOB2W_hM4AWFPnzgOHL4I",
  "Fourth Pull Status": "PVTSSF_lADOB2W_hM4AWFPnzgPj7xg",
  "First Pull Date": "PVTF_lADOB2W_hM4AWFPnzgPIdWs",
  "Second Pull Date": "PVTF_lADOB2W_hM4AWFPnzgOHL4c",
  "Third Pull Date": "PVTF_lADOB2W_hM4AWFPnzgOHL4g",
  "Fourth Pull Date": "PVTF_lADOB2W_hM4AWFPnzgPj8Ac",
  "Structured EHR -1st Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj8GY",
  "Unstructured EHR - 1st Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj8PY",
  "Waveforms - 1st Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj8VU",
  "Images - 1st Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj8Zw",
  "Structured EHR - 2nd Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj9JY",
  "Unstructured EHR - 2nd Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj9T4",
  "Waveforms - 2nd Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj9VY",
  "Images - 2nd Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj9bs",
  "Structured EHR - 3rd Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj9e4",
  "Unstructured EHR - 3rd Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj9jg",
  "Waveforms - 3rd Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj9pc",
  "Images - 3rd Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj-QM",
  "Structured EHR - 4th Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj9us",
  "Unstructured EHR - 4th Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj9zQ",
  "Waveforms - 4th Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj930",
  "Images - 4th Pull": "PVTSSF_lADOB2W_hM4AWFPnzgPj98Q"
}

var gh_status_options = {
  "Not Started": "98236657",
  "Data Acquired": "00a2bac7",
  "Data Transformed": "f187ab3d",
  "Data Uploaded": "67fa13c7"
}

var gh_fps_options = {
  "Not Started": "2208c5f2",
  "Data Acquisition In Progress": "b906181f",
  "Data Acquired": "36bc40d2",
  "Data Transformed": "2c84b00e",
  "Data Uploaded": "d82df3c8"
}

var gh_fps_ehr_options = {
  "Not Started": "05f966ea",
  "Data Acquisition In Progress": "75023b2b",
  "Data Acquired": "9911812d",
  "Data Transformed": "f3a77be0",
  "Data Uploaded": "1aee270c"
}

var gh_fps_uns_options = {
  "Not Started": "5211a5a0",
  "Data Acquisition In Progress": "e6eba82e",
  "Data Acquired": "79f00e72",
  "Data Transformed": "65e8d68c",
  "Data Uploaded": "4c2a6caf"
}

var gh_fps_wav_options = {
  "Not Started": "9a5164ff",
  "Data Acquisition In Progress": "a94f9e39",
  "Data Acquired": "7d5dbe1d",
  "Data Transformed": "f0620d23",
  "Data Uploaded": "5a9c8cd8"
}

var gh_fps_img_options = {
  "Not Started": "4958ed7f",
  "Data Acquisition In Progress": "91f60900",
  "Data Acquired": "3c23b8e0",
  "Data Transformed": "56e7b83c",
  "Data Uploaded": "7e0739b7"
}

var gh_sps_options = {
  "Not Started": "bbeaffce",
  "Data Acquisition In Progress": "c117a36e",
  "Data Acquired": "c117a36e",
  "Data Transformed": "c7f54e31",
  "Data Uploaded": "dea493b1"
}

var gh_sps_ehr_options = {
  "Not Started": "bf153a8f",
  "Data Acquisition In Progress": "44951019",
  "Data Acquired": "3cac445f",
  "Data Transformed": "19857989",
  "Data Uploaded": "cb71f2cb"
}

var gh_sps_uns_options = {
  "Not Started": "c4bdf78d",
  "Data Acquisition In Progress": "2712a2a7",
  "Data Acquired": "236e48d1",
  "Data Transformed": "5b035a02",
  "Data Uploaded": "7202a60e"
}

var gh_sps_wav_options = {
  "Not Started": "8aa84bfa",
  "Data Acquisition In Progress": "9f79c09b",
  "Data Acquired": "64e5bee3",
  "Data Transformed": "4b27e045",
  "Data Uploaded": "158a830f"
}

var gh_sps_img_options = {
  "Not Started": "499422a0",
  "Data Acquisition In Progress": "60e2181b",
  "Data Acquired": "d38dbac8",
  "Data Transformed": "db964eca",
  "Data Uploaded": "741b5035"
}

var gh_tps_options = {
  "Not Started": "8098a5df",
  "Data Acquisition In Progress": "43acc310",
  "Data Acquired": "43acc310",
  "Data Transformed": "15705d31",
  "Data Uploaded": "f6935034"
}

var gh_tps_ehr_options = {
  "Not Started": "b2986473",
  "Data Acquisition In Progress": "764ecdde",
  "Data Acquired": "c8671b60",
  "Data Transformed": "734b5dde",
  "Data Uploaded": "3e8fd575"
}

var gh_tps_uns_options = {
  "Not Started": "f17e3d53",
  "Data Acquisition In Progress": "9e466594",
  "Data Acquired": "8d4f5b5c",
  "Data Transformed": "7c4d484e",
  "Data Uploaded": "18dca5ed"
}

var gh_tps_wav_options = {
  "Not Started": "7f4bc0fa",
  "Data Acquisition In Progress": "b179362d",
  "Data Acquired": "71960dc3",
  "Data Transformed": "e547e55b",
  "Data Uploaded": "d479b4f8"
}

var gh_tps_img_options = {
  "Not Started": "8783733e",
  "Data Acquisition In Progress": "b9cb5b5e",
  "Data Acquired": "c40afc35",
  "Data Transformed": "9be23eb3",
  "Data Uploaded": "b047fd5a"
}

var gh_4ps_options = {
  "Not Started": "43737ba7",
  "Data Acquisition In Progress": "5f969e99",
  "Data Acquired": "cb6a6999",
  "Data Transformed": "c8642873",
  "Data Uploaded": "194a76bb"
}

var gh_4ps_ehr_options = {
  "Not Started": "f1ef7f9f",
  "Data Acquisition In Progress": "92da0282",
  "Data Acquired": "c40be3ea",
  "Data Transformed": "093d6614",
  "Data Uploaded": "d85cf479"
}

var gh_4ps_uns_options = {
  "Not Started": "5524f5e6",
  "Data Acquisition In Progress": "735d18d0",
  "Data Acquired": "b4f0f294",
  "Data Transformed": "89cf8abd",
  "Data Uploaded": "1eac9436"
}

var gh_4ps_wav_options = {
  "Not Started": "2c17bf1a",
  "Data Acquisition In Progress": "b36a2531",
  "Data Acquired": "410a4563",
  "Data Transformed": "8eab4f31",
  "Data Uploaded": "56af7fab"
}

var gh_4ps_img_options = {
  "Not Started": "e1db9e80",
  "Data Acquisition In Progress": "9c438adc",
  "Data Acquired": "0d7e37ed",
  "Data Transformed": "120a49b9",
  "Data Uploaded": "cc1fb91e"
}

function multifield2md(txtbase, txtsub) {
  var mdarray = new Array();
  mdarray = txtbase.split(", ");
  var mdarraysub = new Array();
  mdarraysub = txtsub.split(", ");
  var md_checklist = ""
  var matched = false

  for (var counter = 0; counter < mdarray.length; counter = counter + 1) {
    matched = false
    for (var counter2 = 0; counter2 < mdarraysub.length; counter2 = counter2 + 1) {
      submit = mdarraysub[counter2]
      check = mdarray[counter]
      if (submit.match(check) == check) {
        str = "- [X] " + check 
        matched = true
      }  
    }
    if (matched == false) {
      str = "- [ ] " + check
    }
    md_checklist = md_checklist + str + "\n"
  }
  return md_checklist
}

function yesnocheckbox(txtbase, txtsub) {
  if (txtsub.match("Yes") == "Yes") {
    var checkboxout = "- [X] " +  txtbase
  } else {
    var checkboxout = "- [ ] " +  txtbase
  }
  if (txtsub.match("I don't know / Not applicable") == "I don't know / Not applicable") {
    checkboxout = checkboxout + " **UNKNOWN OR N/A**"
  }
  return checkboxout
}

function convertdate(dateinput) {
  var datearray = dateinput.split("/")
  var year = datearray[2]
  var month = datearray[0]
  if (month.length == 1){
    month = "0" + month
  }
  var day = datearray[2]
  var dateoutput = year + "-" + month + "-" + day
  return dateoutput
}

function onFormSubmit(e) {

  var getissue_pt = issuenum_pt[e.values[2]];
  var getissue_img = issuenum_img[e.values[2]];
  var getissue_wf = issuenum_wf[e.values[2]];
  var getissue_uehr = issuenum_uehr[e.values[2]];
  var getissue_ehr = issuenum_ehr[e.values[2]];

  // Main progress tracker issue update 



  var title_pt = "[" + e.values[2] + "] " + "Progress Tracker";
  
  var body_pt = "*Updated via Google Form Submission: "  + e.values[0] + "*\n\n" +
             "### Data Contributing Site\n\n" + 
              e.values[2] + "\n\n" +
              "### Safe Harbored? \n\n" +
              e.values[3] + "\n\n" +
              "### Time Shifting Recipe: \n\n" +
              e.values[4] + "\n\n" + 
              "### Able to modify time shifting algorithm? \n\n" +
              e.values[5] + "\n\n" +
              "### Cloud environment available? \n\n" +
              e.values[30] + "\n\n" +
              "### How many patients on first pull? \n\n" +
              e.values[7] + "\n\n" +
              "### Any data from NICU / PICU? \n\n" +
              e.values[31] + "\n\n" +
              "### How many NICU patients do you expect to upload? \n\n" +
              e.values[32] + "\n\n" +
              "### How many PICU patients do you expect to upload? \n\n" +
              e.values[33] + "\n\n" +
              "### Issue Links\n\n" +
              "  - https://github.com/chorus-ai/DataAcquistionModule/issues/" + getissue_wf + "\n" +
              "  - https://github.com/chorus-ai/DataAcquistionModule/issues/" + getissue_img + "\n" +
              "  - https://github.com/chorus-ai/DataAcquistionModule/issues/" + getissue_uehr + "\n" +
              "  - https://github.com/chorus-ai/DataAcquistionModule/issues/" + getissue_ehr + "\n";
  
  var payload_pt = {
    "title": title_pt,
    "body": body_pt
  };
   
  var options_pt = {
        "method": "PATCH",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_pt)
      };

  Logger.log(payload_pt)

  var response_pt = UrlFetchApp.fetch("https://api.github.com/repos/chorus-ai/DataAcquistionModule/issues/" + getissue_pt, options_pt);

  // ETL Completion Issue Update

  var title_etl = "[" + e.values[2] + "] " + "EHR Data";
  
  var body_etl = "*Updated via Google Form Submission: "  + e.values[0] + "*\n\n" +
      "### For how many patients have EHR data been extracted?\n" +
      e.values[35] + "\n\n" +
      "### Which types of EHR data have been extracted?\n" +
      multifield2md(ehr_types, e.values[36]) + "\n\n" +
      "### Which EHR system are you using?\n" +
      e.values[37] + "\n\n"
  
  var payload_etl = {
    "title": title_etl,
    "body": body_etl
  };
   
  var options_etl = {
        "method": "PATCH",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_etl)
      };

  Logger.log(payload_etl)
  var response_etl = UrlFetchApp.fetch("https://api.github.com/repos/chorus-ai/DataAcquistionModule/issues/" + getissue_ehr, options_etl);

  // UEHR Issue Update

  var title_flw = "[" + e.values[2] + "] " + "UEHR Data";
  
  var body_flw = "*Updated via Google Form Submission: "  + e.values[0] + "*\n\n" +
      "### For how many patients have Unstructured EHR raw data been extracted?\n" +
      e.values[51] + "\n\n" +
      "### Which types of notes have been fully extracted?\n" +
      multifield2md(uehr_types, e.values[52]) + "\n\n" +
      "### Have notes been de-identified or will they be de-identified??\n" +
      e.values[53] + "\n\n" +
      "### What type(s) of de-identification do you anticipate?\n" +
      e.values[54] + "\n\n" +
      "### Have you installed the OHNLP platform?\n" +
      e.values[55] + "\n\n" +
      "### Have you populated the OHNLP table?\n" +
      e.values[56] + "\n\n" +
      "### Have you uploaded the unstructured EHR data?\n" +
      e.values[57] + "\n\n";

  
  var payload_flw = {
    "title": title_flw,
    "body": body_flw
  };
   
  var options_flw = {
        "method": "PATCH",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_flw)
      };

  Logger.log(payload_flw)
  var response_flw = UrlFetchApp.fetch("https://api.github.com/repos/chorus-ai/DataAcquistionModule/issues/" + getissue_uehr, options_flw);


  // Results Issue Update

  var title_res = "[" + e.values[2] + "] " + "Waveform Data";
  
  var body_res = "*Updated via Google Form Submission: "  + e.values[0] + "*\n\n" +
      "### For how many patients have raw waveform data been extracted? \n" +
      e.values[45] + "\n\n" +
      "### In what format are your raw waveforms recorded? \n" +
      e.values[46] + "\n\n" +
      "### Have the data been transformed to h5 format? \n" +
      e.values[47] + "\n\n" +
      "### Has the transformation been evaluated against the CHoRUS CCDEF format?  \n" +
      e.values[48] + "\n\n" +
      "### Have waveform data been uploaded?  \n" +
      e.values[49] + "\n\n";

  
  var payload_res = {
    "title": title_res,
    "body": body_res
  };
   
  var options_res = {
        "method": "PATCH",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_res)
      };

  Logger.log(payload_res)
  var response_res = UrlFetchApp.fetch("https://api.github.com/repos/chorus-ai/DataAcquistionModule/issues/" + getissue_wf, options_res);


  // Imaging Issue Update

  var title_img = "[" + e.values[2] + "] " + "Imaging Data";
  
  var body_img = "*Updated via Google Form Submission: "  + e.values[0] + "*\n\n" +
      "### For how many patients have raw image data been extracted? \n" +
      e.values[39] + "\n\n" +
      "### Which types of images have been fully extrated? \n" +
      e.values[40] + "\n\n" +
      "### How have images been deidentified? \n" +
      e.values[41] + "\n\n" +
      "### Which deidentification software are you using? \n" +
      e.values[42] + "\n\n" +
      "### Have the images been uploaded? \n" +
      e.values[43] + "\n\n";

  
  var payload_img = {
    "title": title_img,
    "body": body_img
  };
   
  var options_img = {
        "method": "PATCH",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_img)
      };

  Logger.log(payload_img)
  var response_res = UrlFetchApp.fetch("https://api.github.com/repos/chorus-ai/DataAcquistionModule/issues/" + getissue_img, options_img);





  // Update statuses

  var field_ids = ["Status", 
                  "First Pull Status",
                  "Second Pull Status",
                  "Third Pull Status",
                  "Fourth Pull Status",
                  "Structured EHR -1st Pull",
                  "Unstructured EHR - 1st Pull",
                  "Waveforms - 1st Pull",
                  "Images - 1st Pull",
                  "Structured EHR - 2nd Pull",
                  "Unstructured EHR - 2nd Pull",
                  "Waveforms - 2nd Pull",
                  "Images - 2nd Pull",
                  "Structured EHR - 3rd Pull",
                  "Unstructured EHR - 3rd Pull",
                  "Waveforms - 3rd Pull",
                  "Images - 3rd Pull",
                  "Structured EHR - 4th Pull",
                  "Unstructured EHR - 4th Pull",
                  "Waveforms - 4th Pull",
                  "Images - 4th Pull"
  ];

  var value_ids = [gh_status_options, 
                  gh_fps_options, 
                  gh_sps_options, 
                  gh_tps_options,
                  gh_4ps_options,
                  gh_fps_ehr_options,
                  gh_fps_uns_options,
                  gh_fps_wav_options,
                  gh_fps_img_options,
                  gh_sps_ehr_options,
                  gh_sps_uns_options,
                  gh_sps_wav_options,
                  gh_sps_img_options,
                  gh_tps_ehr_options,
                  gh_tps_uns_options,
                  gh_tps_wav_options,
                  gh_tps_img_options,
                  gh_4ps_ehr_options,
                  gh_4ps_uns_options,
                  gh_4ps_wav_options,
                  gh_4ps_img_options];

  var input_values = [e.values[6],
                      e.values[6], // Note overall status is first pull 
                      e.values[9],
                      e.values[16],
                      e.values[23], // 4th pull
                      e.values[34],
                      e.values[50],
                      e.values[44],
                      e.values[38],
                      e.values[11],
                      e.values[14],
                      e.values[13],
                      e.values[12],
                      e.values[18],
                      e.values[21],
                      e.values[20],
                      e.values[19],
                      e.values[25],
                      e.values[28],
                      e.values[27],
                      e.values[26]];

  var get_gh_item = gh_item_id[e.values[2]];

  var date_ids = [
    "First Pull Date",
    "Second Pull Date",
    "Third Pull Date",
    "Fourth Pull Date"
  ]
  var input_dates = [convertdate(e.values[8]),
                    convertdate(e.values[15]),
                    convertdate(e.values[22]),
                    convertdate(e.values[29])]

  // Loop over status updates (columns in project)

  for (var looper = 0; looper < field_ids.length; looper = looper + 1) {
    var loop_field = field_ids[looper]
    var loop_field_id = gh_field_id[loop_field]
    var loop_field_dict = value_ids[looper]
    var field_value_input = input_values[looper]
    var field_value_id = loop_field_dict[field_value_input]

    var query = "mutation{" +
                " updateProjectV2ItemFieldValue(" + 
                " input: {" +
                "   projectId: \"PVT_kwDOB2W_hM4AWFPn\" " +
                "   itemId: \"" + get_gh_item + "\" " +
                "   fieldId: \"" + loop_field_id + "\" " +
                "   value: {" +
                "     singleSelectOptionId: \"" + field_value_id + "\" " +
                "   }" +
                " }" +
                " ) { projectV2Item { id } } }";

    var payload_update = {
    "query": query
    };

    var options_query = {
        "method": "POST",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_update)
    };
    Logger.log(loop_field)
    Logger.log(options_query)
    if (field_value_input.length > 1) {
      var response_update = UrlFetchApp.fetch("https://api.github.com/graphql", options_query);
    }
    Logger.log(response_update)
    
  }

  // Loop over date updates (timepoints on roadmap)
  for (var looper2 = 0; looper2 < date_ids.length; looper2 = looper2 + 1) {
    var loop_field = date_ids[looper2]
    var loop_field_id = gh_field_id[loop_field]
    var field_value_input = input_dates[looper2]

    var query = "mutation{" +
                " updateProjectV2ItemFieldValue(" + 
                " input: {" +
                "   projectId: \"PVT_kwDOB2W_hM4AWFPn\" " +
                "   itemId: \"" + get_gh_item + "\" " +
                "   fieldId: \"" + loop_field_id + "\" " +
                "   value: {" +
                "     date: \"" + field_value_input + "\" " +
                "   }" +
                " }" +
                " ) { projectV2Item { id } } }";

    var payload_update = {
    "query": query
    };

    var options_query = {
        "method": "POST",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_update)
    };
    if (field_value_input.length > 1) {
      var response_update = UrlFetchApp.fetch("https://api.github.com/graphql", options_query);
    }
    Logger.log(response_update)
    
  }
}
