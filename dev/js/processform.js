Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@webdevserv 
alikamal1
/
Form_Data_HTTP_POST_Action
Public
Fork your own copy of alikamal1/Form_Data_HTTP_POST_Action
Code
Issues
Pull requests
7
Actions
Projects
Security
Insights
Form_Data_HTTP_POST_Action/src/index.js /
@alikamal1
alikamal1 update
Latest commit 407dec8 on Nov 30, 2021
 History
 1 contributor
47 lines (38 sloc)  1.21 KB

const core = require('@actions/core');
const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');

async function run() {
  try {
    const url = core.getInput('url')
    const headers = JSON.parse(core.getInput('headers') || '{}')
    const data = JSON.parse(core.getInput('data') || '{}')
    const name = core.getInput('name')
    const file = core.getInput('file')

    console.log(`URL: ${url}`)
    console.log(`Headers: ${headers}`)
    console.log(`Data: ${data}`)
    console.log(`File Name: ${name}`)
    console.log(`File Path: ${file}`)
    core.info(`Connecting to endpoint (${url}) ...`)

    const form = new FormData();
    for (const [key, value] of Object.entries(data)) {
      form.append(key, value)
    }


    if (name && file) {
      form.append(name, fs.createReadStream(file));
    }

    const response = await axios({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'multipart/form-data', ...headers },
      data: form,
    })
    
    console.log(response)

    core.setOutput('response', { 'statusCode': response.statusCode, 'data': response.data });
  } catch (error) {
    console.log(error)
    core.setFailed(error.message);
  }
}

run();
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Form_Data_HTTP_POST_Action/index.js at main · alikamal1/Form_Data_HTTP_POST_Action

