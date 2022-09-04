const { Client } = require("@notionhq/client")
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config()

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})


app.get('/', (req,res)=>{
  (async () => {
    const databaseId = '47e85059e4104489a236065f49007b7d';
    const response = await notion.databases.query({
      database_id: databaseId,
  
    });
    // console.log(response);
    const set_list = {songs:[]};
    response.results.forEach(item => {
      const _url = item.properties.url.url
      console.log(_url)
      set_list.songs = [ ... set_list.songs, {url:_url}]
    })
    res.json(set_list)
  })();
  

})

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
})