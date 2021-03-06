var subtitles = ["Guitarist", "Slight Egomaniac", "Graphic Designer", "Instructor", "Freelancer", "Web Developer"];

var projects = [
    {
        title: "C. L. Halpern's Website",
        desc: "Developed for Christina Lewis Halpern, founder and Executive Director of All Star Code, built to showcase her work and philanthropic efforts.",
        img: "christina-website.png",
        link: "http://christinalewis.com"
    },
    {
        title: "College Organizer",
        desc: "A personal project, designed to automate a large portion of the tedious college researching process, using College Scorecard API and Firebase.",
        img: "college-organizer.png",
        link: "colleges"
    },
    {
        title: "Centre News",
        desc: "Submission for the 2017 Congressional App Challenge, combatting Media Bias by pulling articles from many news sources on the same page.",
        img: "centre-news.png",
        link: "news"
    },
    {
        title: "All Star Wars",
        desc: "Developed for All Star Code, a (virtual reality supported) game that connects your phone to your display, allowing you to wield a lightsaber.",
        img: "all-star-wars.png",
        link: "http://navidmx.herokuapp.com"
    }
]

var skills = [
    {
        name: "html",
        desc: "The stucture and backbone of every website, I have thorough experience with HTML 5, and it's integration with CSS, Search Engine Optimization through meta data, etc."
    },
    {
        name: "css",
        desc: "The style and design behind most of the internet, CSS 3 is my medium for creativity in websites, along with mobile readiness through media queries and libraries such as Bootstrap."
    },
    {
        name: "js",
        desc: "My programming language of choice, I have experience with JavaScript, and am learning more efficient techniques through ES 6. Libraries I use include jQuery, ajax, and node.js."
    },
    {
        name: "php",
        desc: "The server-side language behind most of my programs, I use PHP to provide backend for connecting to databases, scanning local files, etc."
    },
    {
        name: "mysql",
        desc: "The relational database management system behind many of my projects, I have thorough experience querying and sorting through SQL."
    },
    {
        name: "photoshop",
        desc: "One of the most robust and widely used photo editors of all time, I have decent experience with Photoshop, from typography to optimizing media for web development."
    }
]

var count = 0;
var tabOutLeft = false;
var tabOutRight = false;

particlesJS.load('particles', 'assets/lib/particles.json', function() {
});

$(document).ready(function () {
    $("#title").fadeIn(1000);
    $("#navbar").fadeIn(2000);
    //$("#bg-pic").attr("src","assets/img/backgrounds/"+(Math.floor(Math.random()*18)+1)+".jpg");
    changeSubtitle();
    for (var i = 0; i < projects.length; i++) {
        $("#sidebar-right").append("<div class='project'><a href=" + projects[i].link + " target='_newtab'><img class='projectImg' src='assets/img/projects/" + projects[i].img + "'></a><h4>" + projects[i].title + "</h4><h5>" + projects[i].desc + "</h5></div>");
    }
    for (var i = 0; i < skills.length; i++) {
        $(".panel-group").append("<div class='panel'><h4><a data-toggle='collapse' data-parent='#accordion' href='#panel-" + skills[i].name + "'><img class='projectImg' src='assets/img/skills/" + skills[i].name + ".png'></a></h4><div id='panel-" + skills[i].name + "' class='panel-collapse collapse'><div class='panel-body'>" + skills[i].desc + "</div></div></div>");
    }
    if (window.innerWidth < 700) {
        $("#arrow-right").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
        $("#arrow-left").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
    } else {
        $("#arrow-right").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
        $("#arrow-left").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
    }
});

$("#sidebarTab-right").hover(function () {
    $("#sidebar-right").css("background-color", "#1a1a1a");
}, function () {
    $("#sidebar-right").css("background-color", "#212121");
});

$("#sidebarTab-left").hover(function () {
    $("#sidebar-left").css("background-color", "#1a1a1a");
}, function () {
    $("#sidebar-left").css("background-color", "#212121");
});

$("#sidebarTab-right").click(function () {
    if (window.innerWidth > 700) {
        if (!tabOutRight) {
            $("#title").css("right", "30%");
            $("#sidebar-right").css("right", 0);
            $("#sidebarTab-right").css("right", (.3 * window.innerWidth) - 10);
            $("#arrow-right").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
            tabOutRight = true;
        } else if (tabOutRight) {
            $("#title").css("right", "0");
            $("#sidebar-right").css("right", "-30%");
            $("#sidebarTab-right").css("right", "-10px");
            $("#arrow-right").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
            tabOutRight = false;
        }
    } else if (window.innerWidth <= 700) {
        if (!tabOutRight) {
            $("#title").css("transform", "translateY(-95%)");
            $("#sidebar-right").css("bottom", 0);
            $("#sidebarTab-right").css("bottom", (.5 * window.innerHeight) - 10);
            $("#arrow-right").html("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeOut(500);
            }
            tabOutRight = true;
        } else if (tabOutRight) {
            $("#title").css("transform", "translateY(-70%)");
            $("#sidebar-right").css("bottom", "-50%");
            $("#sidebarTab-right").css("bottom", "-10px");
            $("#arrow-right").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeIn(500);
            }
            tabOutRight = false;
        }
    }
});

$("#sidebarTab-left").click(function () {
    if (window.innerWidth > 700) {
        if (!tabOutLeft) {
            $("#title").css("left", "30%");
            $("#sidebar-left").css("left", 0);
            $("#sidebarTab-left").css("left", (.3 * window.innerWidth) - 10);
            $("#arrow-left").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
            tabOutLeft = true;
        } else if (tabOutLeft) {
            $("#title").css("left", "0");
            $("#sidebar-left").css("left", "-30%");
            $("#sidebarTab-left").css("left", "-10px");
            $("#arrow-left").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
            tabOutLeft = false;
        }
    } else if (window.innerWidth <= 700) {
        if (!tabOutLeft) {
            $("#title").css("transform", "translateY(-95%)");
            $("#sidebar-left").css("bottom", 0);
            $("#sidebarTab-left").css("bottom", (.5 * window.innerHeight) - 10);
            $("#arrow-left").html("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeOut(500);
            }
            tabOutLeft = true;
        } else if (tabOutLeft) {
            $("#title").css("transform", "translateY(-70%)");
            $("#sidebar-left").css("bottom", "-50%");
            $("#sidebarTab-left").css("bottom", "-10px");
            $("#arrow-left").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeIn(500);
            }
            tabOutLeft = false;
        }
    }
});

function changeSubtitle() {
    setInterval(function () {
        if (count < subtitles.length - 1) {
            $("#subtitle").html(subtitles[count]);
            count++;
        } else {
            $("#subtitle").html(subtitles[subtitles.length - 1]);
            count = 0;
        }
    }, 1000);
}
