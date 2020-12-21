export default {
  name: 'social',
  type: 'object',
  title: 'Social Link',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'url',
      type: 'url',
      title: 'Profile Url'
    },
    {
      name: 'icon',
      type: 'object',
      title: 'Icon',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          // description: 'Typical is "Business Name"\'s Logo'
        }
      ]
    }
  ]
}