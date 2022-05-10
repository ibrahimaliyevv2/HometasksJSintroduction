function FindPower(num,pow){
    let answer = 1;

    while(pow>0){
        answer*=num;
        pow--;
    }
return answer;
}

while(true){
    let num1 = prompt("Quvvete yukseltmek istediyiniz ededi daxil edin:");
    let pow1 = prompt("Quvveti daxil edin:");
    
    let result = FindPower(num1,pow1);
    alert(result);
}
