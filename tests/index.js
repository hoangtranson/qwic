import test from "ava";
const { getCycle } = require("../index");

const input = [
    {
        "startingDay": "2020-01-02T00:00:00.000Z",
        "duration": 5
    },
    {
        "startingDay": "2020-01-09T00:00:00.000Z",
        "duration": 7
    },
    {
        "startingDay": "2020-01-15T00:00:00.000Z",
        "duration": 6
    },
    {
        "startingDay": "2020-01-09T00:00:00.000Z",
        "duration": 3
    }
]

test("Should return 3", t => {
    t.is(getCycle(input), 3);
});