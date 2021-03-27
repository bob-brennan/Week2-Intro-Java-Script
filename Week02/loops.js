console.log (' Step 6A');
var counter = 0;
while (counter <= 100){
    if (counter % 2 == 0) {
        console.log (counter.toString());
    }
    counter ++;
}

console.log (' Step 6B');
counter = 100;
while (counter >= 0){
    console.log (counter.toString());
    counter = counter - 3;
}

console.log (' Step 6C');
for (counter = 1; counter < 100; counter = counter + 2) {
    console.log (counter.toString());
}

console.log (' Step 6D');
for (counter = 1; counter < 101; counter ++) {
    if ((counter % 3 ==0) && (counter % 5 == 0)){
        console.log ('HelloWorld');
    } else if (counter % 3 ==0){
        console.log ('Hello');
    } else if (counter % 5 ==0){
        console.log ('World');
    } else
        console.log (counter.toString());
}