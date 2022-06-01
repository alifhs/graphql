// async function fetchGreeting() {
//     const response = await fetch(GRAPHQL_URL, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         query: `
//           query {
//             greeting
//           }
//         `,
//       }),
//     });
  
//     const responseBody = await response.json();
//     console.log(responseBody);
//   }

const isValidBdMobileNumber = require("is-valid-bd-phone");
const validation = isValidBdMobileNumber("+89801627410478")
console.log(validation)
// query products{
//     id,
//     name,
//     price
//   }
// }

// mutation {
//     user(firstName: "Alif",
//      lastName: "Sourob",
//      password: "12345",
//      permissionLevel: 2,
//      email: "alif.hs@outlook.com",
//      id:1){
//                         email
//                         password
//                   }
//   }



// mutation User($firstName : String, ) {
//     user(firstName: $firstName,
//      lastName: "Sourob",
//      password: "12345",
//      permissionLevel: 2,
//      email: "alif.hs@outlook.com",
//      id:1){
//                         firstName
//                         email
//                         password
//                   }
//   }