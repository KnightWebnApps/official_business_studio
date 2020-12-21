export default {
  name: 'feature',
  title: 'Product Features',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: Rule => Rule.min(50).max(160)
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
      name: 'subFeatures',
      type: 'array',
      title: 'Sub Features',
      description: 'What are the benefits for the business.',
      of: [
        { type: 'string' }
      ]
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'seoImage'
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