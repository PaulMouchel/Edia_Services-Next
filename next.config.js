  module.exports = {
    env: {
      CONTENTFUL_SPACE_ID:process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOCKEN:process.env.CONTENTFUL_ACCESS_TOCKEN,
      RECAPTCHA_SITE_KEY:process.env.RECAPTCHA_SITE_KEY,
      RECAPTCHA_SECRET_KEY:process.env.RECAPTCHA_SECRET_KEY
    },
    images: {
      domains: ['images.ctfassets.net'],
    },
  }