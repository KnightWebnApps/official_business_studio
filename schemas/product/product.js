export default {
  name: 'product',
  title: 'Main Products',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string',
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
      title: 'Main Features',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'feature'}]}]
    },
    {
      name: 'examples',
      title: 'Examples',
      type: 'array',
      of: [{ type: 'project'}]
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