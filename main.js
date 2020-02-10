
document.getElementById('header').innerHTML = "Milo Wissig";


document.getElementById('footer').innerHTML = `<a href='instagram.com/mwissig/'><i class='fab fa-instagram'></i></a> <a href='https://github.com/mwissig'><i class='fab fa-github'></i></a>`;


document.getElementById("arttitle").addEventListener("mouseenter", function(){
document.getElementById("body").classList.remove('codebg');
document.getElementById("body").classList.add('artbg');
});

document.getElementById("arttitle").addEventListener("mouseleave", function(){
  document.getElementById("body").classList.remove('artbg');
  document.getElementById("body").classList.remove('codebg');
});
document.getElementById("codetitle").addEventListener("mouseenter", function(){
document.getElementById("body").classList.remove('artbg');
document.getElementById("body").classList.add('codebg');
});

document.getElementById("codetitle").addEventListener("mouseleave", function(){
  document.getElementById("body").classList.remove('codebg');
  document.getElementById("body").classList.remove('artbg');
});

function openNewWindow() {
    window.showModalDialog("https://artcrawler.herokuapp.com", "",
        "dialogHeight:667px; dialogWidth:375px")
      };

      var thisYear  = new Date().getFullYear(),
          startYear = '2013';
      if (thisYear > startYear) { $('#copyright').text(startYear + '-' + thisYear); }

      function scrollToProjects() {
        document.getElementById('launchme').classList.add("rocketshadow");
 document.getElementById('letsgo').classList.add("rocketshadow");
 setTimeout(function() {

        document.querySelector('#projects').scrollIntoView({
          block: "start",
          behavior: 'smooth'
        }
      );
      document.getElementById('launchme').classList.remove("rocketshadow");
document.getElementById('letsgo').classList.remove("rocketshadow");
}, 1000);
      }
