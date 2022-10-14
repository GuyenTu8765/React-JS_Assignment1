export function question1() {
    var strings: string[] = ["a", "b", "c", "d", "e"];
    console.log("cach1");
    for (let index = 0; index < strings.length; index++) {
        console.log(strings[index]);
    }

    console.log("cach2");
    strings.forEach(element => {
        console.log(element);

    });

}

export default { question1 }