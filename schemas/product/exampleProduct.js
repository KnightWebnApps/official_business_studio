export default {
    name: 'project',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'A title for the service'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            title: 'Is Active?',
            name: 'isActive',
            type: 'boolean'
        },
        {
            name: 'image',
            type: 'seoImage',
            title: 'Website Image'
        },
        {
            name: 'url',
            type: 'string',
            title: 'Url'
        }
    ]
}