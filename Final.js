// Problem-01

function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    let surcharge = fare * 0.20;
    let fine = fare + surcharge + 30;

    return fine;
}


// Problem-02 

function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }

    let noSpaces = str.split(" ").join("");
    let result = noSpaces.toUpperCase();
    return result;
}

// Problem-03

function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
        return "Invalid";
    }

    let score1 = player1.foul + player1.cardY + player1.cardR;
    let score2 = player2.foul + player2.cardY + player2.cardR;

    if (score1 < score2) {
        return player1.name;
    } else if (score2 < score1) {
        return player2.name;
    } else {
        return "Tie";
    }
}


// Problem -04

function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Problem- 05

function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    if (marks.length === 0) {
        return {
            finalScore: 0,
            pass: 0,
            fail: 0
        };
    }
    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let mark of marks) {
        total += mark;
        if (mark >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }
    let avg = Math.round(total / marks.length);

    return {
        finalScore: avg,
        pass: passCount,
        fail: failCount
    };
}