export default {
  widgets: [
    {
      name: 'document-list', 
      options: {
        title: 'Last edited posts', 
        order: '_updatedAt desc', 
        types: ['post']
      }
    },
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    }
  ]
}