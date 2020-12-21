export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The label on the browser tab.',
    },
    {
      type: 'myStory',
      name: 'story'
    },
    {
      name: 'socialMedia',
      type: 'array',
      title: 'Social Media',
      of: [
        {
          name: 'profile',
          type: 'social',
        }
      ]
    },
    {
      name: 'licenses',
      type: 'array',
      title: 'Licenses',
      of: [
        {
          name: 'license',
          type: 'object',
          title: 'License',
          fields: [
            {
              name: 'file',
              type: 'file',
              title: 'File'
            },
            {
              name: 'title',
              title: 'Name',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
}