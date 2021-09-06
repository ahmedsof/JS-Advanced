function solve(str1, str2,str3) {
    let n1 = str1.length
    let n2 = str2.length
    let n3 = str3.length

    let sum = n1 + n2 + n3
    let avarrage = Math.floor(sum/3)
    console.log(sum)
    console.log(avarrage)
}
solve('chocolate', 'ice cream', 'cake')
solve('pasta', '5', '22.3')