﻿interface Runnable {
    isRunning: boolean;
}

interface Refrigerator {
    makesFoodGoBrrr: boolean;
}

let x: string;
let y: "foo" | Refrigerator;

let b: boolean;
b = x == y;
b = "foo" == y
b = y == "foo";
b = "foo" == "bar";

b = x != y;
b = "foo" != y
b = y != "foo";
b = "foo" != "bar";
