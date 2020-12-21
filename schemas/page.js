export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      of: [
        { name: 'keyword', type: 'string', title: 'Keyword' }
      ]
    },
    {
      name: 'builder',
      type: 'array',
      title: 'Builder',
      of: [
        { type: 'callToActionWithIllustration' },
        { type: 'callToAction' },
        { type: 'gallery' },
        { type: 'form' },
        { type: 'hero' },
        { type: 'textBlock' },
        { type: 'textWithIllustration' },
        { type: 'video' },
        {
          name: 'contentBlock',
          type: 'object',
          title: 'Content Block',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string'
            },
            { name: 'content', type: 'blockContent' },
          ]
        }
      ]
    }
  ]
}