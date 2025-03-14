const string1 = "lakshay"
const string2 = "kalra"

function alternateString(st1,st2){
    const l1 = st1.length
    const l2 = st2.length

    const loop = l1 > l2 ? l2 : l1
    const bigString = l1 > l2 ? st1 : st2

    let result=''

    for(let i=0; i<loop;i++){
        result += st1[i] + st2[i]
    }

    for(let i=loop; i<bigString.length;i++){
        result += bigString[i]
    }

    return result
}

console.log(alternateString(string1, string2))