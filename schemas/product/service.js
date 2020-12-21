export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'blurb',
      type: 'text',
      title: 'Sales Blurb',
      validation: Rule => Rule.min(50).max(160)
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [{ name: 'feature', type: 'string' }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}]}]
    }
  ]
}