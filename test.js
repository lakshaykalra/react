const string1 = "ezupkr"

// {}
// 


const string2 = "ubmrapg"

// u, p, r

// string 1 => aau
// aau
// 

// a, a, y, u, 

function result(string1, string2){
  let map = {}
  let count=0


  for(let i=0;i<string2.length;i++){
    map[string2[i]] = map[string2[i]] === undefined ? 1 : map[string2[i]] + 1
  }

  console.log(map)



  for(let i=0; i<string1.length;i++){
    if(map[string1[i]]!==undefined && map[string1[i]] >0) {
      count += 1
      map[string1[i]] = map[string1[i]] - 1
    }
  }
  console.log(map)


  return count
}

console.log(result(string1, string2))