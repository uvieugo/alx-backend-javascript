import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise
  .allSettled([signUpUser(firstName, lastName).catch((error) => error), uploadPhoto(filename).catch((error) => error)])
    .then(([result1, result2]) => {
      return [
        {
          status: result1.status,
          value: result1.status === 'fulfilled' ? result1.status : String(result1.reason)
        },
        {
          status: result2.status,
          value: result2.status === 'fulfilled' ? result2.status : String(result2.reason)
        },
      ]
    })
}
