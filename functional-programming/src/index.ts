import { once } from "./utils/once";
import { onceAndAfter } from "./utils/onceAndAfter";

const shout = (a: string) => console.log("shout1: ", a);

// const onceShout = once(shout);

// onceShout("hola");
// onceShout("hola");
// onceShout("hola");
// onceShout("hola");
// onceShout("hola");

const shout2 = (a: string) => console.log("shout2: ", a);

const onceAndAfterShout = onceAndAfter(shout, shout2)

onceAndAfterShout("hola")
onceAndAfterShout("hola")
onceAndAfterShout("hola")
onceAndAfterShout("hola")