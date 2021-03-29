function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            totalOdds = totalOdds + arr[i]
        }
        else {
            totalEvens = totalEvens + arr[i];
        }
    }

    if (totalOdds > totalEvens) {
        return ("Odds are greater");
    }
    else if (totalOdds < totalEvens) {
        return ("Evens are greater");
    }
    else {
        return ("Tied");
    }




}

var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"