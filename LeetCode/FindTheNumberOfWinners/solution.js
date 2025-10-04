/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    let winners = new Set();
    const players = [...Array(n)].map(() => ({}));

    for(let [player, ball] of pick){
        let balls = players[player]
        if(balls[ball] > 0) balls[ball]++
        else balls[ball] = 1;

        if(player + 1 <= balls[ball]) winners.add(player)
    }
    return winners.size
};
