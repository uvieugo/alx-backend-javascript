function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => (success ? resolve({ status: 200, body: 'Success' }) : reject(Error('The fake API is not working currently'))));
}
console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
