export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return ({ status: 200, body: 'Success' });
    })
    .catch((err) => {
      console.error(err);
      return (Error(''));
    });
}
