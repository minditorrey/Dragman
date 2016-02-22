$(document).ready(function() {
  var words = ["shade", "she mail", "queen", "read", "backrolls", "sissy that walk", "beat", "extravaganza eleganza", "fishy", "gag", "hunty", "meaty tuck", "werk", "chanté you stay", "hog body", "pit crew", "realness", "resting on pretty", "sashay away", "halleloo", "fierce", "body ody ody", "busted", "chicken cutlets", "clock", "condragulations", "drag mother", "dusted", "feeling my oats", "Flazéda", "flooded my basement", "glamazon", "heathers", "kai kai", "ki ki", "ladyboy", "resting on pretty", "rol-aska-tox", "roladex of hate", "rupaulagoize", "squirrel friends", "tranny chaser", "tuckahoe", "untuck", "tilapia", "garage doors", "not today satan", "leotarded", "sexcretary", "sickening", "living", "cooking", "pageant queen", "dariene lake", "adore delano", "sharon needles", "bianca del rio", "ginger minj", "rupaul", "jinx monsoon", "raja gemini", "courtney act", "michelle visage", "covergirl", "queens", "yaaaaaaaaaaaaaaaas queen", "banjee girl", "lipsync for your life", "squirrel friend", "mopping", "sissy that walk", "drag race", "untucked", "alyssa edwards", "roxxxy andrews", "kennedy davenport", "sissyogrophy", "mimi imfurst", "alaska thunderfuck", "katya", "willam belli", "alexis mateo", "detox", "coco montrese", "shangela laquifa wadley", "tyra sanchez", "the other tyra", "jujubee", "pandora boxx", "violet chachki", "carmen carrera", "trixie mattel", "miss fame", "Jessica Wild", "Jiggly Caliente", "Jaidynn Diore Fierce", "delta work", "trinity k bonet", "raven", "latrice royale", "you better work"];
  var usedLetters = [];
  var wrongLetters = [];

  $('.play').click(function() {
    $('<img class="queens" src="http://trashwire.com/wp-content/uploads/2012/01/Queens_Group_Composite_black.jpg">').load(function() {
      $(this).width(800).height(300).appendTo('#play');
    });
    $('#play').html('<p class="start">Gentlemen, start your engines. May the best woman...WIN!</p>');
    var word = words[Math.floor(Math.random() * words.length)];
    var wordLength = word.length;
    var underscores = "";
    for (i = 0; i < wordLength; i++) {
      var underscores = underscores + "_ "
    };
    $('#words').after(underscores);
  });
  $('.btn-default').on('click', function() {
    var guess = $(this).text();
    if (jQuery.inArray(guess, usedLetters) === -1) {
      usedLetters.push(guess);
    }
    $('.used').html('<p class="used">Letters used:</p><span>' + usedLetters + '</span>');

    if (jQuery.inArray(guess, wrongLetters) === -1) {
      wrongLetters.push(guess);
    };
    console.log(wrongLetters);
  });
});
