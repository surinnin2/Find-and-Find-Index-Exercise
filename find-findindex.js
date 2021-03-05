function findUserByUsername(usersArray, username) {
  let objToReturn = usersArray.find(function(obj) {
    return (obj['username'] === username)
  })
  return objToReturn
}

function removeUser(usersArray, username) {
  let indexToRemove = usersArray.findIndex(function(obj) {
    return (obj['username'] === username)
   })
  
  
  if(indexToRemove === -1) {
    return undefined
  } else {
    return (usersArray.splice(indexToRemove, 1))
  }
}