var fs = require('fs');
fs.writeFileSync('terms-and-conditions.json', JSON.stringify({
  defaultTermsOfService: fs.readFileSync('./terms-of-service.md', 'utf8'),
  defaultPrivacyPolicy: fs.readFileSync('./privacy-policy.md', 'utf8')
}), 'utf8');
