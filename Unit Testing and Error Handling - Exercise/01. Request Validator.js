function solve(obj) {
    let arrMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (obj.method === undefined ||!arrMethod.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }
    if (obj.uri || !/^([a-zA-Z0-9\.]+|\*)$/gm.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI')
      }

    let versionArr = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (obj.version === undefined || !versionArr.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }

  
    
    if (obj.message === undefined || !(/[^<>\\&'"]*$/gm.test(obj.message))){
        throw new Error('Invalid request header: Invalid Message')
    }


    return obj
}
console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }
  ));