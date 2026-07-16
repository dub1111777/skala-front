function checkGrade(){

    // 과목 배열
    var subjects = ["HTML", "CSS", "JavaScript"];

    // 총점 변수
    var total = 0;


    // 과목 개수만큼 반복
    for(var i = 0; i < subjects.length; i++){

        var score = prompt(subjects[i] + " 점수를 입력하세요.");

        score = Number(score);

        total += score;

    }


    // 평균 계산
    var average = total / subjects.length;


    // 합격 여부 판단
    var result;


    if(average >= 60){

        result = "합격입니다!";

    }

    else{

        result = "불합격입니다.";

    }


    // 등급 계산
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



    // 결과 출력

    alert(
        "총점: " + total + "점\n" +
        "평균: " + average.toFixed(2) + "점\n" +
        "등급: " + grade + "\n" +
        "결과: " + result
    );

}