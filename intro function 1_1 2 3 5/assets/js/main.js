// function intro() {
//     let a = 1 + 3;
//     console.log(a + " Hello World");
//     console.log("1+3 = " + a)
// }

// intro();
// Das ruft die Funktion auf. Vorher gibt er keine 4 aus. 

// Ab hier aufgabe 1_2
function intro2() {
    let paraName = "Sofia";
    let varName = "SuperCoder";
    console.log("Hi, " + varName + ". Mein Name ist " + paraName + " .")
}
intro2()

// Ab hier aufgabe 1_3

function intro3() {
    let paraName = "Sofia"
    let paraStadt = "Hamburg"
    let paraAlter = "34"
    console.log("Hallo, mein Name ist " + paraName + ". Ich bin " + paraAlter + " Jahre alt und komme aus " + paraStadt + ".")
}
intro3()

// Ab hier aufgabe 1_5
// Das hier drunter ist falsch.
function math(a, b) {
    let c = a * b;
    // let c = a / b;
    console.log(c);
}
// math(30, 20);
math(100, 100);

function math2(a, b) {
    let c = a / b;
    console.log(c);
}
// math2(5, 0)
math2(45, 173)
// So müsste es richtig sein
function math3(a, b) {
    console.log(a * b);
    console.log(a / b);
}
math3(45, 100)
math3(30, 20)