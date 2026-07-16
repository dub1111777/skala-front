function checkGrade(){

   
    var subjects = ["HTML", "CSS", "JavaScript"];

  
    var total = 0;


    for(var i = 0; i < subjects.length; i++){

        var score = prompt(subjects[i] + " 점수를 입력하세요.");

        score = Number(score);

        total += score;

    }


    var average = total / subjects.length;


    var result;


    if(average >= 60){

        result = "합격입니다!";

    }

    else{

        result = "불합격입니다.";

    }


    var grade;


    if(average >= 90){

        grade = "A";

    }
    else if(average >= 80){

        grade = "B";

    }
    else if(average >= 70){

        grade = "C";

    }
    else if(average >= 60){

        grade = "D";

    }
    else{

        grade = "F";

    }




    alert(
        "총점: " + total + "점\n" +
        "평균: " + average.toFixed(2) + "점\n" +
        "등급: " + grade + "\n" +
        "결과: " + result
    );

}