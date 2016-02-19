var fs = require('fs');
fs.writeFileSync(JSON.stringify({
  defaultTermsOfService: fs.readFileSync('./terms-of-service.md', 'utf8'),
  defaultPrivacyPolicy: fs.readFileSync('./privacy-policy.md', 'utf8')
}, 'utf8');
