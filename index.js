function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    const home = gameObject().home.players
    for (const key in home) {
        if (key === playerName) {
            return home[`${key}`].points
        }
    }

    const away = gameObject().away.players
    for (const key in away) {
        if (key === playerName) {
            return away[`${key}`].points
        }
    }
}

function shoeSize(playerName) {
        const home = gameObject().home.players
    for (const key in home) {
        if (key === playerName) {
            return home[`${key}`].shoe
        }
    }

    const away = gameObject().away.players
    for (const key in away) {
        if (key === playerName) {
            return away[`${key}`].shoe
        }
    }
}

function teamColors(teamName) {
    const home = gameObject().home
    if (home.teamName === teamName) {
            return home.colors
        }
    

    const away = gameObject().away
    if (away.teamName === teamName) {
            return away.colors
        }
    
}

function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName]
}

function playerNumbers(teamName) {
    const arr = []
    const home = gameObject().home
    if (home.teamName === teamName) {
        for (const key in (home.players)) {
            console.log(key)
            arr.push(home.players[`${key}`].number)
        }
        return arr
    }
    
    const away = gameObject().away
    if (away.teamName === teamName) {
        for (const key in (away.players)) {
            arr.push(away.players[`${key}`].number)
        }
        return arr
    }

}

function playerStats(playerName) {
        const home = gameObject().home.players
    for (const key in home) {
        if (key === playerName) {
            return home[`${key}`]
        }
    }

    const away = gameObject().away.players
    for (const key in away) {
        if (key === playerName) {
            return away[`${key}`]
        }
    }    
}

function bigShoeRebounds() {
    let greatestSize = 0
    let player = ""
    const home = gameObject().home.players
    for (const key in home) {
        if ((home[`${key}`]. shoe) > greatestSize) {
            greatestSize = (home[`${key}`]. shoe)
            player = home[`${key}`]
        }
    }

    const away = gameObject().away.players
    for (const key in away) {
        if ((away[`${key}`]. shoe) > greatestSize) {
            greatestSize = (away[`${key}`]. shoe)
            player = away[`${key}`]
        }
    }
    return player.rebounds
}

