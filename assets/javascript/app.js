var panel = $('#quiz-area');

$(document).on('click', '#start', function(e){
  game.start();
});

$(document).on('click', '#done', function(e){
  game.done();
});

//question set

var questions = [{
    question: "1)	Which of the following Avengers from the comics is not in the movie?",
    answers: ['Hawkeye', 'Black Widow', 'The Wasp', 'Captain America'],
    correctAnswer: "The Wasp"
    }, {
    question: "2)	What is Agent Coulson’s first name?",
    answers: ['Phil', 'Cal', 'Steven', 'John'],
    correctAnswer: "Phil"
    }, {
    question: "3)	When Loki is locked up in the S.H.I.E.L.D. helicarrier, who gets him to reveal that he is planning to get Banner to change into the Hulk and destroy the ship fro within?",
    answers: ['Thor', 'Black Widow', 'Iron Man', 'Nick Fury'],
    correctAnswer: "Black Widow"
    }, {
    question: "4)	Which Avenger’s girlfriend makes an appearance in the film that isn’t just a quick picture or a flashback to one of the their solo movies?",
    answers: ["Jane Foster (Thor)", "Betty Ross (Hulk)", "Peggy Carter (Captain America)", "Pepper Potts (Iron Man)"],
    correctAnswer: "Black Widow"
    }, {
    question: "5)	What is the name of the blue glowing square that Loki uses as a weapon?",
    answers: ["The Soulstone", "The Infinity Gem", "The Tesseract", "The Forever Cube"],
    correctAnswer: "The Tesseract"
    }, {
    question: "3)	When Loki is locked up in the S.H.I.E.L.D. helicarrier, who gets him to reveal that he is planning to get Banner to change into the Hulk and destroy the ship fro within?",
    answers: ["Thor", "Black Widow", "Iron Man", "Nick Fury"],
    correctAnswer: "Black Widow"
    }, {
    question: "3)	When Loki is locked up in the S.H.I.E.L.D. helicarrier, who gets him to reveal that he is planning to get Banner to change into the Hulk and destroy the ship fro within?",
    answers: ["Thor", "Black Widow", "Iron Man", "Nick Fury"],
    correctAnswer: "Black Widow"
    }, {
    question: "3)	When Loki is locked up in the S.H.I.E.L.D. helicarrier, who gets him to reveal that he is planning to get Banner to change into the Hulk and destroy the ship fro within?",
    answers: ["Thor", "Black Widow", "Iron Man", "Nick Fury"],
    correctAnswer: "Black Widow"
    }, {
    question: "3)	When Loki is locked up in the S.H.I.E.L.D. helicarrier, who gets him to reveal that he is planning to get Banner to change into the Hulk and destroy the ship fro within?",
    answers: ["Thor", "Black Widow", "Iron Man", "Nick Fury"],
    correctAnswer: "Black Widow"
    }, {
    question: "3)	When Loki is locked up in the S.H.I.E.L.D. helicarrier, who gets him to reveal that he is planning to get Banner to change into the Hulk and destroy the ship fro within?",
    answers: ["Thor", "Black Widow", "Iron Man", "Nick Fury"],
    correctAnswer: "Black Widow"
  }];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },


  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }
    panel.append('<button id="done">Done</button>');
  },
  done: function(){

    $.each($("input[name='question-0']:checked"), function(){
       if ($(this).val() == questions[0].correctAnswer) {
        console.log(this);
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-1']:checked"), function(){
       if ($(this).val() == questions[1].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function(){
       if ($(this).val() == questions[2].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    this.results();
  },

    results:function(){
      clearInterval(timer);

      $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
    }
  };
;