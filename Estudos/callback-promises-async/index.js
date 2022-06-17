const axios = require('axios');
const gitHubApi = 'https://api.github.com/users/lvksounds/repos'

axios.get(gitHubApi).then(res => {
    console.log(res.data)
});

console.log('teste')