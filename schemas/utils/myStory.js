export default {
  name: 'myStory',
  type: 'object',
  title: 'My Story',
  fields: [
    {
      name: 'background',
      type: 'object',
      title: 'Background',
      fields: [
        {
          name: 'primaryColor',
          description: 'Your base background color',
          title: 'Color',
          type: 'color',
        },
        {
          name: 'secondaryColor',
          description: 'Leave blank unless you want a gradient as your background. Beware gradients can make some text hard to read so use responsibly.',
          title: 'Color',
          type: 'color',
        },
        {
          name: 'music',
          type: 'file',
          title: 'Audio'
        }
      ]
    },
    {
      name: 'builder',
      title: 'Story Builder',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'textBlock' },
        { type: 'textWithIllustration' },
        { type: 'gallery' },
        { type: 'callToAction' },
        { type: 'callToActionWithIllustration' },
        { type: 'video' },
        { type: 'form' },
        { type: 'faq'}
      ]
    }
  ]
}