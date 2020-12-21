export default {
  name: 'faq',
  type: 'object',
  title: 'FAQ',
  description: 'Frequently asked questions.',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of your FAQ section.'
    },
    {
      name: 'questions',
      type: 'array',
      title: 'Questions',
      of: [
        {
          name: 'question',
          type: 'object',
          title: 'Question',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question',
            },
            {
              name: 'answer',
              type: 'text',
              title: 'Answer'
            }
          ]
        }
      ]
    }
  ]
}