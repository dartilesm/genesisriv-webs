import { defineArrayMember, defineField, defineType } from "sanity"

const linkTree = defineType({
  name: 'linkTree',
  type: 'document',
  title: 'Link Tree',
  fields: [
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required()
        })
      ]
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name'
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role'
    }), 
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description'
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        defineArrayMember({
          name: 'link',
          type: 'object',
          title: 'Link',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Name',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: (Rule) => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
              }).required()
            }),
            defineField({
              name: 'ariaLabel',
              type: 'string',
              title: 'Aria Label',
              validation: (Rule) => Rule.required()
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'iconLinks',
      type: 'object',
      title: 'Icon Links',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'links',
          type: 'array',
          title: 'Links',
          of: [
            defineArrayMember({
              name: 'icon',
              type: 'image',
              title: 'Icon',
              validation: (Rule) => Rule.required(),
              fields: [
                defineField({
                  name: 'ariaLabel',
                  type: 'string',
                  title: 'Aria Label',
                  validation: (Rule) => Rule.required()
                }),
                defineField({
                  name: 'url',
                  type: 'url',
                  title: 'URL',
                  validation: (Rule) => Rule.required()
                })
              ]
            }),
          ]
        })
      ]
    })
  ]
})

export default linkTree