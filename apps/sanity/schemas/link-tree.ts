import { DocumentDefinition, Rule } from "sanity";

const linkTree: DocumentDefinition = {
  name: 'linkTree',
  type: 'document',
  title: 'Link Tree',
  fields: [
    {
      name: 'photo',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: Rule => Rule.required()
        }
      ]
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
              title: 'Name',
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'ariaLabel',
              type: 'string',
              title: 'Aria Label',
              validation: (Rule: Rule) => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'iconLinks',
      type: 'object',
      title: 'Icon Links',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: Rule => Rule.required()
        },
        {
          name: 'links',
          type: 'array',
          title: 'Links',
          of: [
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
              validation: Rule => Rule.required(),
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Text',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'url',
                  type: 'url',
                  title: 'URL',
                  validation: Rule => Rule.required()
                }
              ]
            },
          ]
        }
      ]
    }
  ]
}

export default linkTree