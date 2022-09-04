const { Client } = require("@notionhq/client")
const dotenv = require('dotenv')

dotenv.config()

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

console.log(process.env.NOTION_TOKEN);

// (async () => {
//   const listUsersResponse = await notion.users.list({})
//   console.log(listUsersResponse)
// })()


(async () => {
  const databaseId = '47e85059e4104489a236065f49007b7d';
  const response = await notion.databases.query({
    database_id: databaseId,

  });
  // console.log(response);
  response.results.forEach(item => {
    console.log(item.properties.url.url)
  })
})();

// filter: {
//   or: [
//     {
//       property: 'In stock',
//       checkbox: {
//         equals: true,
//       },
//     },
//     {
//       property: 'Cost of next trip',
//       number: {
//         greater_than_or_equal_to: 2,
//       },
//     },
//   ],
// },
// sorts: [
//   {
//     property: 'Last ordered',
//     direction: 'ascending',
//   },
// ],