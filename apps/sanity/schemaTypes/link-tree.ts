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
      type: 'array',
      title: 'Description',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'currentStatus',
      type: 'string',
      title: 'Current Status',
      placeholder: 'Disponible para trabajar',
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
          ]
        })
      ]
    }),
    defineField({
      name: 'quickLinks',
      type: 'array',
      title: 'Quick Links',
      of: [
        defineField({
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
              type: 'string',
              title: 'URL',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'isIconButton',
              type: 'boolean',
              title: 'Is Icon Button',
              initialValue: false
            }),
            defineField({
              name: 'icon',
              type: 'string',
              title: 'Icon',
              hidden: ({ parent }) => !parent?.isIconButton,
              options: {
                list: ['website', 'email', 'linkedin', 'instagram', 'x']
              }
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'additionalLinks',
      type: 'object',
      title: 'More Links',
      fields: [
        defineField({
          name: 'mainButtonLabel',
          type: 'string',
          title: 'Main Button Label',
          placeholder: '¿Qué recursos uso?',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'mainButtonUrl',
          type: 'string',
          title: 'Main Button URL',
          placeholder: '/links',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'links',
          type: 'array',
          title: 'Additional Links',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  type: 'string',
                  title: 'Icon',
                  options: {
                    list: ['resources']
                  }
                }),
                defineField({
                  name: 'name',
                  type: 'string',
                  title: 'Name',
                  placeholder: 'Mis recursos',
                  validation: (Rule) => Rule.required()
                }),
                defineField({
                  name: 'description',
                  type: 'array',
                  title: 'Description',
                  of: [
                    defineArrayMember({
                      type: 'block',
                    }),
                  ],
                }),
                defineField({
                  name: 'links',
                  type: 'array',
                  title: 'Links',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'type',
                          type: 'string',
                          title: 'Type',
                          options: {
                            list: ['button', 'card']
                          }
                        }),
                        defineField({
                          name: 'name',
                          type: 'string',
                          title: 'Name or Title',
                          validation: (Rule) => Rule.required()
                        }),
                        defineField({
                          name: 'description',
                          type: 'array',
                          title: 'Description',
                          hidden: ({ parent }) => parent?.type === 'button',
                          of: [
                            defineArrayMember({
                              type: 'block',
                            }),
                          ],
                        }),
                        defineField({
                          name: 'label',
                          type: 'string',
                          title: 'Label',
                          placeholder: 'Recurso recomendado',
                          hidden: ({ parent }) => parent?.type === 'button',
                        }),
                        defineField({
                          name: 'url',
                          type: 'string',
                          title: 'URL',
                          validation: (Rule) => Rule.required()
                        }),
                        defineField({
                          name: 'image',
                          type: 'image',
                          title: 'Image',
                        })
                      ]
                    }),
                  ],
                })
              ]
            })
          ]
        })
      ]

    })
  ]
})

export default linkTree