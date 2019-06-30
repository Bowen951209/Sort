const easyjs = {
    sort: function (arr) {
        var ranking = [];
        var len = arr.length;
        var under = [];
        for (let x = 0; x < len; x++) {
            under.push(0);
            for (let y = 0; y < len; y++) {
                if (x + y <= len - 1) {
                    if (arr[x] < arr[x + y]) {
                        under[x] += 1;
                        // console.log(x + y);
                    }
                } else {
                    if (arr[x] < arr[x + y - len]) {
                        under[x] += 1;
                        // console.log(x + y - len);
                    }
                }
            }

            // console.log(under);
            // console.log(under.indexOf(0));


        }

        for (let i = 0, rankingLength = ranking.length; i < len; i++) {
            if (under.indexOf(i) > -1) {
                ranking.unshift(arr[under.indexOf(i)]);
            }
        }
        return ranking;
    }
}