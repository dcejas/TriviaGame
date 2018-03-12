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
    question: "6)	When Iron Man is struck by Thor’s lightning what happens?",
    answers: ["It is deflected and strikes Captain America", "Tony Stark’s chest piece gives out and he goes into cardiac arrest. ", "It super charges his armor up to 400%", "His suit shuts down and he is trapped in his own armor."],
    correctAnswer: "It super charges his armor up to 400%"
    }, {
    question: "7)	When the Avengers are in the streets of New York Captain America starts issuing orders. What are his orders to the Hulk? ",
    answers: ["Destroy the force field surrounding the machine that is keeping the hole open.", "Smash", "Turn back into Banner and help Tony reinitialize his armor.", "Throw a nuclear bomb into the rift in space."],
    correctAnswer: "Smash"
    }, {
    question: "8)	When all of the Avengers are bickering in the lab on the S.H.I.E.L.D. helicarrier which Avenger is not present?",
    answers: ["Captain America", "Black Widow", "Hawkeye", "Dr. Banner"],
    correctAnswer: "Hawkeye"
    }, {
    question: "9)	When Tony Stark is threatening Loki and going through the Avengers roll call what is he doing?",
    answers: ["Dialing 911 on his phone", "Making a drink", "Using an energy absorber to suck the energy out of Loki’s staff", "Setting Stark Tower to self destruct"],
    correctAnswer: "Making a drink"
    }, {
    question: "10)	In one of the final scenes of the film, Pepper and Tony are standing on a section of Stark Tower that has been destroyed holding blueprints for something. As they are standing, the camera pans out so the audience can see more of Stark Tower and only one letter from STARK is left standing. Which letter is it?",
    answers: ["A", "K", "S", "R"],
    correctAnswer: "A"
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
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2></br>');
    $('#start').remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      panel.append('</hr>');
      for (var j = 0; j < questions[i].answers.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + " " + questions[i].answers[j]);
      }
      panel.append('</br>');
      panel.append('</br>');
    };
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

    $.each($("input[name='question-3']:checked"), function(){
      if ($(this).val() == questions[3].correctAnswer) {
         game.correct++;
     } else {
       game.incorrect++;
     }
    });

   $.each($("input[name='question-4']:checked"), function(){
    if ($(this).val() == questions[4].correctAnswer) {
       game.correct++;
      } else {
      game.incorrect++;
      }
    });
  $.each($("input[name='question-5']:checked"), function(){
    if ($(this).val() == questions[5].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($("input[name='question-6']:checked"), function(){
    if ($(this).val() == questions[6].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($("input[name='question-7']:checked"), function(){
    if ($(this).val() == questions[7].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($("input[name='question-8']:checked"), function(){
    if ($(this).val() == questions[8].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($("input[name='question-9']:checked"), function(){
    if ($(this).val() == questions[9].correctAnswer) {
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