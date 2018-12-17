// Get the video
var video = document.getElementById("myVideo");

// smooth scroll

function scrollTo(id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  });
}

var projects = {
  "artcrawler": {
    "name": "Artcrawler",
    "github": "https://github.com/mwissig/artcrawler/",
    "url": "https://artcrawler.herokuapp.com/",
    "username": "",
    "password": "",
    "languages": ["Ruby on Rails", "Google Maps API"],
    "description": "<p>This app uses Ruby On Rails and the Google Maps JavaScript, geocoding, and directions APIs to create a system for organizing and mapping open studios events for organizers, artists, and visitors.</p><p>The open studios event presents a unique problem in that it is a single event that can occur in hundreds of different locations within a given area.Individual artists ' studios, studio buildings, galleries, and other venues need to be listed and mapped so that visitors can navigate between them in the course of a single weekend.</p><p>Arts organizations typically either make their own apps for each event or rely on printed booklets.The purpose of this app is to create a single app that can be used for many events. I also use Google Waypoints to create a system with which visitors can choose which studios they want to visit and have them appear as a route on a personalized map. They can also bookmark individual artists and recieve a feed of information about when and where those artists' work is being shown.</p>"
  },
  "opengym": {
    "name": "Open Gym",
    "github": "https://github.com/stephanie-vitalherne/opengym",
    "url": "",
    "username": "",
    "password": "",
    "languages": ["Ruby on Rails"],
    "description": "<p>Open Gym is a Rails web app for people with available space in a gym, sports field or court to rent or lend that space to others for games.</p><p>My main role in this project was to use geolocation and geocoding to save the last known location of the user and then calculate the distance from new events as they are being created so that nearby users can recieve notifications.</p><p>I also created the notification system and the ability for users to earn points for participating in games, and a system for allowing RSVPs from users without accounts.</p>"
  },
  "satpanel": {
    "name": "School Admin Panel",
    "github": "https://github.com/mwissig/School-Admin-Panel",
    "url": "https://sat-panel.herokuapp.com",
    "username": "User@example.com",
    "password": "password",
    "languages": ["Ruby on Rails"],
    "description": "<p>An administrative panel for a school made with Rails.</p><p>The interface can be used to create, edit, and delete students, courses, cohorts, and employees.</p><p>This app uses AJAX to allow data to be manipulated without reloading the page.</p>"
  },
  "postpile": {
    "name": "Postpile",
    "github": "https://github.com/mwissig/postpile",
    "url": "https://postpile.herokuapp.com",
    "username": "User",
    "password": "password",
    "languages": ["Ruby", "Sinatra"],
    "description": "<p>Postpile is a social media site modeled after Tumblr, made with Sinatra. Users have the ability to create accounts, log in, and create and delete posts and their own accounts. They also have the ability to follow other users, vote their posts up, comment on posts, and send each other private messages.</p>"
  },
  "paper": {
    "name": "Munder Difflin Paper",
    "github": "https://github.com/mwissig/Munder-Difflin-Paper",
    "url": "https://mwissig.github.io/Munder-Difflin-Paper/",
    "username": "",
    "password": "",
    "languages": ["Javascript"],
    "description": "<p>A front end design-focused site for a luxury paper company using Javascript and CSS to create scoll-triggered animations.</p>"
  },
  "bakery": {
    "name": "Queen Anne's Bakery",
    "github": "https://github.com/mwissig/Bakery",
    "url": "",
    "username": "",
    "password": "",
    "languages": ["Sinatra"],
    "description": "<p>A web site for a bakery written with Sinatra and Javascript. This site stores and displays data on products using class names to create dynamic routes. It calls the Edamam API to search for pastry recipes to display in the sidebar.The phone number and address for the bakery are generated randomly using the Faker gem every time the server is restarted. </p>"
  }
};
var title = "artcrawler";
document.getElementById("projectInfo").innerHTML = "<h2>" + projects[title]['name'] + "</h2>" + projects[title]['description'] + "<p><a href='" + projects[title]['github'] + "' target='_blank'>Documentation on Github  <small> <i class='fas fa-external-link-alt'></i></a></small></a></p><p><a href='" + projects[title]['url'] + "' target='_blank'>Go to Site  <small> <i class='fas fa-external-link-alt'></i></a></small></a>";

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-placeholder', {
    width: .9 * document.getElementById("leftdiv").offsetWidth,
    height: .95 * document.getElementById("leftdiv").offsetHeight,
    videoId: '_pUyfrStqE0',
    playerVars: {
      color: 'white',
      playlist: 'WTvAcPI1O7U,ozqyQFDTA2A,3Cxvzxvm0mo,2ux6p9ESjwE,evTha1zuoko',
      rel: 0
    },
    events: {
      onReady: initialize
    }
  });
}

function initialize() {

  // Update the controls on load
  updateTimerDisplay();
  updateProgressBar();

  // Clear any old interval.
  clearInterval(time_update_interval);

  // Start interval to update elapsed time display and
  // the elapsed part of the progress bar every second.
  time_update_interval = setInterval(function() {
    updateTimerDisplay();
    updateProgressBar();
  }, 1000)

}
var extLink = "";
var loginInfo = "";
$('.thumbnail').on('click', function() {

  var url = $(this).attr('data-video-id');
var title = $(this).attr('title');
  player.cueVideoById(url);
  if (projects[title]['url'] != "") {
    extLink = "<p><a href='" + projects[title]['url'] + "' target='_blank'>Go to Site  <small> <i class='fas fa-external-link-alt'></i></a></small></a>";
  }
  else {
    extLink = "";
  };
  if (projects[title]['username'] != "") {
    loginInfo = "<p>Demo username: " + projects[title]['username'] + "</p><p>Demo password: " + projects[title]['password'] + "</p>";
  }
  else {
      loginInfo = "";
  };
document.getElementById("projectInfo").innerHTML = "<h2>" + projects[title]['name'] + "</h2>" + loginInfo + projects[title]['description'] + "<p><a href='" + projects[title]['github'] + "' target='_blank'>Documentation on Github  <small> <i class='fas fa-external-link-alt'></i></a></small></a></p>" + extLink;
});

function scrollToSection(section) {
  document.querySelector("#" + section).scrollIntoView({
    behavior: 'smooth', block: 'start'
  });
  console.log("test");
}
