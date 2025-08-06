export default {
  titleTemplate: '%s | عنوان سایت',
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no'
    },
    { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
    { hid: 'og:title', property: 'og:title', content: 'عنوان سایت' },
    {
      hid: 'og:image',
      property: 'og:image',
      content: '/images/logo/small-light.png'
    }
  ],
  link: [{ rel: 'icon', type: 'image/*', href: '/images/logo/small-light.png' }]
}
