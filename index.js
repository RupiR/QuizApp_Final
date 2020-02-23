let score = 0;
let currentQuestion = 0;
let questions = [
  {
    title:
      "'Ray of Light' was the title track of what singer's 1998 CD, her first studio album in four years?",
    answers: ["Cher", "Madonna", "Aretha Franklin", "Annie Lennox"],
    correct: 1
  },
  {
    title:
      'Jay-Z\'s 1998 hit "Hard Knock Life" took its title from a song from which Broadway musical?',
    answers: ["The Music Man", "Rent", "Annie", "Annie Get Your Gun"],
    correct: 2
  },
  {
    title:
      "Former Menudo star Ricky Martin released what chart-topping English-language hit in 1999?",
    answers: [
      "I Need To Know",
      "Shake Your Bon-Bon",
      "Everybody",
      "Livin' La Vida Loca"
    ],
    correct: 3
  },
  {
    title:
      'Celine Dion\'s "My Heart Will Go On" was also known as the theme from what 1997 film?',
    answers: [
      "Titanic",
      "The Bodyguard",
      "You've Got Mail",
      "Shakespeare In Love"
    ],
    correct: 0
  },
  {
    title:
      "Boyz II Men sang the praises of what city, their hometown, in their debut 1991 single?",
    answers: ["Omaha", "Philadelphia", "Atlanta", "Boston"],
    correct: 1
  },
  {
    title:
      'What 1990 M.C. Hammer hit featured a sample from Rick James\' "Super Freak"?',
    answers: [
      "Dancing Machine",
      "They Put Me In The Mix",
      "U Can't Touch This",
      "2 Legit 2 Quit"
    ],
    correct: 2
  },
  {
    title:
      'Which 1990 rap hit featured a sample of "Under Pressure" from Queen and David Bowie?',
    answers: [
      "Cool As Ice",
      "Ice Ice Baby",
      "Fight The Power",
      "Play That Funky Music"
    ],
    correct: 1
  },
  {
    title:
      'Ironic was one of five hit singles from which artist\'s "Jagged Little Pill" album?',
    answers: [
      "Celine Dion",
      "Alanis Morissette",
      "Mariah Carey",
      "Martha Wash"
    ],
    correct: 1
  },
  {
    title:
      "Dr. Dre's \"Nuthin' But a 'G' Thang\" featured an appearance by what up-and-coming rapper?",
    answers: ["Jay-Z", "Nas", "Snoop Doggy Dogg", "Tupac Shakur"],
    correct: 2
  },
  {
    title:
      "The Latin duo Los Del Rio popularized what dance craze with a 1996 Spanish-language hit?",
    answers: [
      "The Macarena",
      "The Cha-Cha Slide",
      "The Chicken Dance",
      "The Achy Breaky"
    ],
    correct: 0
  }
];

$(document).ready(function() {
  $(".start a").click(function(e) {
    e.preventDefault();
    $(".start").hide();
    $(".quiz").show();
    showQuestion();
  });

  $(".quiz ul").on("click", "li", function() {
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".quiz a").click(function(e) {
    e.preventDefault();
    if ($("li.selected").length) {
      let guess = parseInt($("li.selected").attr("id"));
      checkAnswer(guess);
    } else {
      alert("Please Select An Answer");
    }
  });

  $(".summary a").click(function(e) {
    e.preventDefault();
    restartQuiz();
  });
});

function showQuestion() {
  let question = questions[currentQuestion];
  $(".quiz h2").text(question.title);
  $(".quiz ul").html("");
  $(".quiz h6").text(
    " Question: " + [currentQuestion + 1] + " / " + questions.length
  );
  $(".quiz h5").text("Score: " + score + " / " + questions.length);
  for (var i = 0; i < question.answers.length; i++) {
    $(".quiz ul").append("<li id='" + i + "'>" + question.answers[i] + "</li>");
  }
}

function checkAnswer(guess) {
  let question = questions[currentQuestion];
  if (question.correct === guess) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showSummary();
  } else {
    showQuestion();
  }
}
function showSummary() {
  $(".quiz").hide();
  $(".summary").show();
  $(".summary p").text(
    "Congrats, you scored " + score + " out of " + questions.length + " !"
  );
}

function restartQuiz() {
  $(".summary").hide();
  $(".quiz").show();
  score = 0;
  currentQuestion = 0;
  showQuestion();
}
