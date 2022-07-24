const commands = [
  "help",
  "copy-email",
  "github",
  "google-scholar",
  "aboutme",
  "education",
  "publication",
  "awards",
  "news",
];

$(document).ready(function () {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $("#user-command-suggestion")[0].innerHTML = "Hello there!";
  }

  if (typeof $("#info-aboutme").html() !== "undefined") {
    localStorage.setItem("infoaboutme", `${$("#info-aboutme").html()}`);
  }
  if (typeof $("#info-news").html() !== "undefined") {
    localStorage.setItem("infonews", `${$("#info-news").html()}`);
  }
  if (typeof $("#info-edu").html() !== "undefined") {
    localStorage.setItem("infoedu", `${$("#info-edu").html()}`);
  }
  if (typeof $("#info-pub").html() !== "undefined") {
    localStorage.setItem("infopub", `${$("#info-pub").html()}`);
  }
  if (typeof $("#info-awards").html() !== "undefined") {
    localStorage.setItem("infoawards", `${$("#info-awards").html()}`);
  }
});

function suggest() {
  if (
    $("#user-command")[0].innerHTML !== $("#user-command")[0].innerHTML.trim()
  ) {
    $("#user-command")[0].innerHTML = $("#user-command")[0].innerHTML.trim();
  }
  const suggestion = commands.find((command) =>
    command.startsWith($("#user-command")[0].innerHTML)
  );
  if (suggestion) {
    $("#user-command-suggestion")[0].innerHTML = suggestion.slice(
      $("#user-command")[0].innerHTML.length
    );
  } else {
    $("#user-command-suggestion")[0].innerHTML =
      "type 'help' to show avaliable commands.";
  }
  if ($("#user-command")[0].innerHTML.length === 0) {
    $("#user-command-suggestion")[0].innerHTML =
      "type 'help' to show avaliable commands.";
  }
}

function runCommand() {
  const command = $("#user-command")[0].innerHTML;
  let output;
  const timestamp = "[" + new Date().toLocaleString() + "] ";
  if (command === "help") {
    output = document.createElement("span");
    output.innerHTML =
      timestamp +
      "Available commands: " +
      "<br />" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; copy-email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; copy my email address to the clipboard." +
      "<br />" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; github: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; open my github page in a new tab." +
      "<br />" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; google-scholar: &nbsp; open my google scholar page in a new tab." +
      "<br />" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; aboutme: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; print about me." +
      "<br />" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; education: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; print my education." +
      "<br />" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; publication: &nbsp;&nbsp;&nbsp;&nbsp; print my publication." +
      "<br />" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; awards: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; print my awards." +
      "<br />" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; news: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; print my news.";
    $("#command-outputs")[0].prepend(output);
  } else if (command === "copy-email") {
    output = document.createElement("span");
    output.innerHTML = timestamp + "Email address copied!";
    $("#command-outputs")[0].prepend(output);
    const email = "changrui.chen";
    navigator.clipboard.writeText(`${email}@warwick.ac.uk`);
  } else if (command === "github") {
    output = document.createElement("span");
    output.innerHTML = timestamp + "Opening github page...";
    $("#command-outputs")[0].prepend(output);
    window.open("https://github.com/GeoffreyChen777");
  } else if (command === "google-scholar") {
    output = document.createElement("span");
    output.innerHTML = timestamp + "Opening google scholar page...";
    $("#command-outputs")[0].prepend(output);
    window.open("https://scholar.google.com/citations?user=x-3oI_EAAAAJ&hl=en");
  } else if (command === "aboutme") {
    output = document.createElement("div");
    output.classList.add("flex");
    const aboutmeDate = document.createElement("div");
    aboutmeDate.innerHTML = timestamp;
    aboutmeDate.classList.add("min-w-[161px]");
    output.appendChild(aboutmeDate);
    const aboutmeInfo = document.createElement("div");
    aboutmeInfo.innerHTML = localStorage.infoaboutme;
    aboutmeInfo.classList.add("grow");
    output.appendChild(aboutmeInfo);
    $("#command-outputs")[0].prepend(output);
  } else if (command === "education") {
    output = document.createElement("div");
    output.classList.add("flex");
    const educationDate = document.createElement("div");
    educationDate.innerHTML = timestamp;
    educationDate.classList.add("min-w-[161px]");
    output.appendChild(educationDate);
    const educationInfo = document.createElement("div");
    educationInfo.innerHTML = localStorage.infoedu;
    educationInfo.classList.add("grow");
    output.appendChild(educationInfo);
    $("#command-outputs")[0].prepend(output);
  } else if (command === "publication") {
    output = document.createElement("div");
    output.classList.add("flex");
    const publicationDate = document.createElement("div");
    publicationDate.innerHTML = timestamp;
    publicationDate.classList.add("min-w-[161px]");
    output.appendChild(publicationDate);
    const publicationInfo = document.createElement("div");
    publicationInfo.innerHTML = localStorage.infopub;
    publicationInfo.classList.add("grow");
    output.appendChild(publicationInfo);
    $("#command-outputs")[0].prepend(output);
  } else if (command === "awards") {
    output = document.createElement("div");
    output.classList.add("flex");
    const awardsDate = document.createElement("div");
    awardsDate.innerHTML = timestamp;
    awardsDate.classList.add("min-w-[161px]");
    output.appendChild(awardsDate);
    const awardsInfo = document.createElement("div");
    awardsInfo.innerHTML = localStorage.infoawards;
    awardsInfo.classList.add("grow");
    output.appendChild(awardsInfo);
    $("#command-outputs")[0].prepend(output);
  } else if (command === "news") {
    output = document.createElement("div");
    output.classList.add("flex");
    const newsDate = document.createElement("div");
    newsDate.innerHTML = timestamp;
    newsDate.classList.add("min-w-[161px]");
    output.appendChild(newsDate);
    const newsInfo = document.createElement("div");
    newsInfo.innerHTML = localStorage.infonews;
    newsInfo.classList.add("grow");
    output.appendChild(newsInfo);
    $("#command-outputs")[0].prepend(output);
  } else {
    output = document.createElement("span");
    output.innerHTML = timestamp + "Command not found.";
    $("#command-outputs")[0].prepend(output);
  }

  $("#user-command").empty();
  suggest();
}

$("body").keypress(function (e) {
  $("#user-command")[0].innerHTML =
    $("#user-command")[0].innerHTML + String.fromCharCode(e.which);
  suggest();
});

$("body").keydown(function (e) {
  if (e.which === 32) {
    e.preventDefault();
  }
  if (e.which === 9) {
    e.preventDefault();
    if (
      $("#user-command-suggestion")[0].innerHTML !==
      "type 'help' to show avaliable commands."
    ) {
      $("#user-command")[0].innerHTML =
        $("#user-command")[0].innerHTML +
        $("#user-command-suggestion")[0].innerHTML;
      $("#user-command-suggestion")[0].innerHTML = "";
    }
  }
  if (e.which == 8) {
    e.preventDefault();
    $("#user-command")[0].innerHTML = $("#user-command")[0].innerHTML.slice(
      0,
      -1
    );
    suggest();
  }
  if (e.which == 13) {
    e.preventDefault();
    runCommand();
  }
});

const timestamp = "[" + new Date().toLocaleString() + "]&nbsp;";
let dateDiv;
dateDiv = document.createElement("span");
dateDiv.innerHTML = timestamp;

if ($("#date-awards")[0]) {
  $("#date-awards")[0].prepend(dateDiv);
  dateDiv = document.createElement("span");
  dateDiv.innerHTML = timestamp;
  $("#date-pub")[0].prepend(dateDiv);

  dateDiv = document.createElement("span");
  dateDiv.innerHTML = timestamp;
  $("#date-edu")[0].prepend(dateDiv);

  dateDiv = document.createElement("span");
  dateDiv.innerHTML = timestamp;
  $("#date-news")[0].prepend(dateDiv);

  dateDiv = document.createElement("span");
  dateDiv.innerHTML = timestamp;
  $("#date-aboutme")[0].prepend(dateDiv);
}
