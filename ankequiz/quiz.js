let myQuestions = [
    {
      question: "michelle hates green ",
      answer: true
    },
  
    { question: "Jimbio was robbed", answer: true },
  
    {
      question: "lill poundcake was born on season 5 ",
      answer: true
    },
    {
      question:
        "Im roxy andrew and im here to make it clear, i know you hate me baby and thats way you brought me here",
      answer: false
    },
    {
      question: "jujube has compited the most times",
      answer: true
    },
    {
      question: "ornacia was the first eliminated queen on sesaon 6 ",
      answer: false
    },
    {
      question: "trinity the tuck has the most challenge wins",
      answer: true
    },
    {
      question: "bob the dragqueens drag dother is monet xchange ",
      answer: false
    },
  
    {
      question: "kylie sonic love was the first trans winner ",
      answer: false
    },
    {
      question: "is Bebe the first winner of RuPauls drag race ?",
      answer: true
    }
  ];
  let count = 0;
  var points = 0;
  let question;
  let maxPoints = myQuestions.length;

  
  function showButtons(){
	document.getElementById("answerT").style.display="";
	document.getElementById("answerF").style.display="";
    document.getElementById("result").style.display=""; 
}
  function randomQuestion() {
    start.style.display = "none";
  showButtons();
 
    let countQuestion = (document.getElementById("count").innerHTML =
      "Question " + ++count + " / 10");
  
    let currentQuestion = myQuestions.map(function (question) {
      return question.question;
    });
    let questionList = myQuestions.filter(function (question) {
      return question;
    });
    question = questionList[Math.floor(Math.random() * questionList.length)];
    document.getElementById("quest").innerHTML = question.question;
  }
  let copy = [].concat(myQuestions);
  
  function deleteUsed() {
    if (myQuestions.length > 0) {
      myQuestions.splice(myQuestions.indexOf(question), 1);
    } else {
      document.getElementById("answerT").style.display = "none";
      document.getElementById("answerF").style.display = "none";
      document.getElementById("result").style.display=""; 
    }
  }
  
  function answer(value) {
    deleteUsed();
    if (value === question.answer) {
      points++;
  
      console.log(points);
    }
    if (count === 10) {
      document.getElementById("answerT").style.display = "none";
      document.getElementById("answerF").style.display = "none";
      document.getElementById("question").style.display = "none";
      document.getElementById("result").style.display = "";
      document.getElementById("reset").style.display = "";
    }
    randomQuestion();
  }

  function showResult() {
    
    if (points > maxPoints * 0.75) {
      document.getElementById("mvg").style.display = "";
    } else if ( points >= maxPoints * 0.5) {
      document.getElementById("g").style.display = "";
    } else if (points < maxPoints * 0.5) {
      document.getElementById("u").style.display = "";
    }
    document.getElementById("reset").style.display = "";
  }
  function restart() {
    document.location.href = "";
  }
  
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  