function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}



function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}


function handleProfileSignup() {
  uploadPhoto()
    .then(result => {
      console.log(result.body)
      createUser()
        .then(result => console.log(result.firstName, result.lastName))
    })
}

handleProfileSignup();