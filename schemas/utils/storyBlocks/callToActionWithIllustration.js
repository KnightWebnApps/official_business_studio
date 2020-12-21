export default {
  name: 'callToActionWithIllustration',
  title: 'Call To Action W/ Illustration',
  type: 'object',
  fields: [
    {
      name: 'illustration',
      type: 'seoImage'
    },
    {
      name: 'text',
      title: 'Link Text',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link Url',
      type: 'url'
    },
  ]
}