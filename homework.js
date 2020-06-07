// 1. Napisać funkcję która mnoży 2 podane liczby
function mnozenie(a, b) {
   var sumaMnozenia =  a*b;
    console.log("Wynik mnożenia liczb" + a + " i " + b + " to " + sumaMnozenia)
}

mnozenie(5, 5)

// 2. Napisać funkcję która sprawdza czy liczba jest przysta
function czyParzysta(a) {
    if (a%2 == 0)  {
    console.log("Liczba " + a + " jest parzysta")
} else {
    console.log("Liczba " + a + " nie jest parzysta")

}
}

czyParzysta(6)


// 3. Napisać funkcję która dodaje dowolną podaną liczbę argumentów

// czemu to nie działa a to poniżej działa?
function dodawanie(...liczby){
    var wynik = 0;
    for (x = 0; x < liczby.length; x++){
        wynik = wynik + liczby[x]; //o co chodzi z tym zapisem?
    }
}
console.log(dodawanie(1, 1, 1, 1, 1, 1));

// nie moje
var dodawanie = function(...dodaj){

    var wynik = 0;
    for (x = 0; x < dodaj.length; x++){

        wynik = wynik + dodaj[x];

    }
    return wynik;

}

console.log(dodawanie(130, 30, 5));


// 4. Napisać funkcję która wypisze wszystkie parzyste liczy z podanych argumentów (wykorzystać funkcję z pkt. 2)
var tylkoParzyste = function(...liczby) {
for (a =0; x<liczby.length; x++){
    if (liczby[x]%2 == 0) {
        return liczby;
    }
} 
}

tylkoParzyste(8, 10, 11, 12)

