export default {
    name: 'linkTree',
    type: 'document',
    title: 'Link Tree',
    fields: [
      {
        name: 'photo',
        type: 'image',
        title: 'Photo'
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role'
      }, 
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'links',
        type: 'array',
        title: 'Links',
        of: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'name',
                type: 'string',
                title: 'Name'
              },
              {
                name: 'url',
                type: 'url',
                title: 'URL'
              }
            ]
          }
        ]
      }
    ]
  }