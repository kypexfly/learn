import { alternate } from "./utils/alternate";
import { once } from "./utils/once";
import { onceAndAfter } from "./utils/onceAndAfter";

const shout = (a: string) => console.log("shout1: ", a);

const onceShout = once(shout);

onceShout("This must show in console");
onceShout("I'm hidden from console");

const shout2 = (a: string) => console.log("shout2: ", a);

const onceAndAfterShout = onceAndAfter(shout, shout2)

onceAndAfterShout("!!!!!")
onceAndAfterShout("!!!!!")
onceAndAfterShout("!!!!!")
onceAndAfterShout("!!!!!")


const alternateShout = alternate(() => shout("A"), () => shout2("B"));

alternateShout()
alternateShout()
alternateShout()
alternateShout()

console.log("Hola")

// const composeNumberToString = () => compose((x: number) => x.toString(), (x: number) => x + 1);
// console.log(composeNumberToString()(2))
