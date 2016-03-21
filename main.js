$(document).ready(function() {
  var words = ["shade", "she mail", "queen", "read", "backrolls", "sissy that walk", "beat", "extravaganza eleganza", "fishy", "gag", "hunty", "meaty tuck", "werk", "chante you stay", "hog body", "pit crew", "realness", "resting on pretty", "sashay away", "halleloo", "fierce", "body ody ody", "busted", "chicken cutlets", "clock", "condragulations", "drag mother", "dusted", "feeling my oats", "Flazéda", "flooded my basement", "glamazon", "heathers", "kai kai", "ki ki", "ladyboy", "resting on pretty", "rol-aska-tox", "roladex of hate", "rupaulagoize", "squirrel friends", "tranny chaser", "tuckahoe", "untuck", "tilapia", "garage doors", "not today satan", "leotarded", "sexcretary", "sickening", "living", "cooking", "pageant queen", "darienne lake", "adore delano", "sharon needles", "bianca del rio", "ginger minj", "rupaul", "jinkx monsoon", "raja gemini", "courtney act", "michelle visage", "covergirl", "queens", "yaaaaaaaaaaaaaaaas queen", "banjee girl", "lipsync for your life", "squirrel friend", "mopping", "sissy that walk", "drag race", "untucked", "alyssa edwards", "roxxxy andrews", "kennedy davenport", "sissyogrophy", "mimi imfurst", "alaska thunderfuck", "katya", "willam belli", "alexis mateo", "detox", "coco montrese", "shangela laquifa wadley", "tyra sanchez", "the other tyra", "jujubee", "pandora boxx", "violet chachki", "carmen carrera", "trixie mattel", "miss fame", "Jessica Wild", "Jiggly Caliente", "Jaidynn Diore Fierce", "delta work", "trinity k bonet", "raven", "latrice royale", "you better work"];
  var usedLetters = [];
  var wrongGuesses = [];
  var word = words[Math.floor(Math.random() * words.length)];
  var wordLength = word.length;
  var underscores = "";
  $('.play').click(function() {
    $('<img class="queens img-responsive" src="http://vignette1.wikia.nocookie.net/logosrupaulsdragrace/images/b/ba/Rupaul_blackpink_final.jpg/revision/latest?cb=20110731183922" width="250" height="170">').load(function() {
      $(this).addClass("centered").appendTo('#play');
    });
    $('#play').html('<p class="start">Gentlemen, start your engines. May the best woman...WIN!</p>');

    for (i = 0; i < wordLength; i++) {
      underscores = underscores + "-";
    }
    $('#guess-it').html(underscores);
    $('.btn-default').on('click', function() {
      var guess = $(this).text();
      if (jQuery.inArray(guess, usedLetters) === -1) {
        usedLetters.push(guess);
        $('.used').html('<p class="used">Letters used:</p><span>' + usedLetters + '</span>');
      } else {
        alert("You already guessed \"" + guess + "\"!");
      }

      var find = word.indexOf(guess);
      var wordArray = word.split('');
      var underscoresArray = underscores.split('');
      if ((jQuery.inArray(guess, wordArray) === -1) && (jQuery.inArray(guess, wrongGuesses) === -1))  {
        wrongGuesses.push(guess);
        $('.wrong').html('<p class="wrong">Wrong Guesses:</p><span>' + wrongGuesses + '</span>');
      }

      for (i = 0; i < wordArray.length; i++) {

        if (wordArray[i] === " ") {
          underscoresArray[i] = " ";
        }
        if (wordArray[i] === guess) {
          underscoresArray[i] = guess;
        }
        if (wrongGuesses.length === 1) {
          $("#viv-1").attr("src", "https://i.imgur.com/7dvOlHg.jpg1");
        } else if (wrongGuesses.length === 2) {
          $("#viv-1").attr("src", "https://i.imgur.com/M6U8Y9n.jpg?1");
        } else if (wrongGuesses.length === 3) {
          $("#viv-1").attr("src", "https://i.imgur.com/7zKGCkO.jpg?1");
        } else if (wrongGuesses.length === 4) {
          $("#viv-1").attr("src", "https://i.imgur.com/26NyW1A.jpg?1");
        } else if (wrongGuesses.length === 5) {
          $("#viv-1").attr("src", "https://i.imgur.com/Zfk1rFA.jpg?1");
          $('#guess-it').replaceWith('<h3 class="lose">Not today, Satan. Not today!<br> The word was: </h3>' + word);

          $('.well').on('click', function() {
            $('.lose').addClass('animated tada');
          });

        }
        $('#guess-it').empty;
        underscores = underscoresArray.join('');
        $('#guess-it').html(underscores);
        if (underscoresArray.toString() === wordArray.toString()) {
          $('#guess-it').replaceWith('<h3 class="win">You are once fierce queen!</h3>');
          $('.well').on('click', function() {
            $('.win').addClass('animated tada');
          });

        }
      }
    });
    $('.again').click(function() {
      window.location.reload();
    });

  });
});
