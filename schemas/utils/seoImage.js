export default {
  name: 'seoImage',
  type: 'object',
  title: 'SEO Image',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description: 'Used for SEO and Accessability, a short description of what is happening in the photo.'
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Can be used to credit Stock Image Artist or be a human readable caption for more context.'
    }
  ]
}