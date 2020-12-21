export default {
  name: 'seoDetails',
  type: 'object',
  title: 'SEO Details',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Appears under title in search results. Don\'t use double quotation marks (") ',
      type: 'text',
      validation: Rule => Rule.min(50).max(160)
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    }
  ]
}