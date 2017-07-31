
var email = require('./app/js/email.js');

module.exports = {
  "logprefix": "cpu",
  "preprocess": {
    context: {
      PAGETITLE: 'caffeineaddicted.de',
      MENUTITLE: 'CaffeineProcessorsUnited',
      NAME: 'Caffeine Processing United',
      SOCIAL_EMAIL: new email().encode('someone@example.com', ''),
      SOCIAL_TWITTER: '#twitter',
      SOCIAL_GOOGLEPLUS: '#googleplus',
      SOCIAL_FACEBOOK: '#facebook'
    }
  }
}
