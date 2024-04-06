import { defineArrayMember, defineField, defineType } from '@sanity-typed/types'

const portfolio = defineType({
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  fields: [
    defineField({
      name: 'header',
      type: 'object',
      title: 'Header',
      fields: [
        defineField({
          name: 'logo',
          type: 'image',
          title: 'Logo',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              validation: (Rule) => Rule.required(),
            }),
          ],
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
                  name: 'url',
                  type: 'string',
                  title: 'URL',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'label',
                  type: 'string',
                  title: 'Label',
                  validation: (Rule) => Rule.required(),
                })
              ]
            })
          ],
        }),
      ],
    }),
    defineField({
      name: 'presentation',
      type: 'object',
      title: 'Presentation',
      fields: [
        defineField({
          name: 'profileImg',
          type: 'image',
          title: 'Profile Image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required(),
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
          name: 'cta',
          type: 'object',
          title: 'Call to Action',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'projects',
      type: 'object',
      title: 'Projects',
      fields: [
        defineField({
          name: 'title',
          type: 'array',
          title: 'Title',
          of: [
            defineArrayMember({
              type: 'block',
            }),
          ],
        }),
        defineField({
          name: 'description',
          type: 'string',
          title: 'Description',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'projectsList',
          type: 'array',
          title: 'Projects List',
          of: [
            defineArrayMember({
              name: 'project',
              type: 'object',
              title: 'project',
              fields: [
                defineField({
                  name: 'projectName',
                  type: 'string',
                  title: 'Project name',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'company',
                  type: 'string',
                  title: 'Company',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'technologiesOrMethodologies',
                  type: 'array',
                  title: 'Technologies or Methodologies',
                  of: [
                    defineArrayMember({
                      type: 'string',
                    })
                  ]
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
                  name: 'cta',
                  type: 'object',
                  title: 'Call to Action',
                  fields: [
                    defineField({
                      name: 'label',
                      type: 'string',
                      title: 'Label',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'url',
                      type: 'url',
                      title: 'URL',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
                defineField({
                  name: 'photo',
                  type: 'image',
                  title: 'Photo',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alt Text',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'experience',
      type: 'object',
      title: 'Experience',
      fields: [
        defineField({
          name: 'title',
          type: 'array',
          title: 'Title',
          of: [
            defineArrayMember({
              type: 'block',
            }),
          ],
        }),
        defineField({
          name: 'description',
          type: 'string',
          title: 'Description',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'experienceList',
          type: 'array',
          title: 'Experience List',
          of: [
            defineArrayMember({
              name: 'experience',
              type: 'object',
              title: 'Experience',
              fields: [
                defineField({
                  name: 'role',
                  type: 'string',
                  title: 'Role',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'time',
                  type: 'string',
                  title: 'Time',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'subtitle',
                  type: 'string',
                  title: 'Subtitle',
                  validation: (Rule) => Rule.required(),
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
                  name: 'cta',
                  type: 'object',
                  title: 'Call to Action',
                  fields: [
                    defineField({
                      name: 'label',
                      type: 'string',
                      title: 'Label',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'url',
                      type: 'url',
                      title: 'URL',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
                defineField({
                  name: 'photo',
                  type: 'image',
                  title: 'Photo',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alt Text',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'about',
      type: 'object',
      title: 'About',
      fields: [
        defineField({
          name: 'title',
          type: 'array',
          title: 'Title',
          of: [
            defineArrayMember({
              type: 'block',
            }),
          ],
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
      ],
    }),
    defineField({
      name: 'certificates',
      type: 'object',
      title: 'Certificates',
      fields: [
        defineField({
          name: 'title',
          type: 'array',
          title: 'Title',
          of: [
            defineArrayMember({
              type: 'block',
            }),
          ],
        }),
        defineField({
          name: 'description',
          type: 'string',
          title: 'Description',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'certificatesList',
          type: 'array',
          title: 'Certificates List',
          of: [
            defineArrayMember({
              name: 'certificate',
              type: 'object',
              title: 'Certificate',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'url',
                  type: 'url',
                  title: 'URL',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'photo',
                  type: 'image',
                  title: 'Photo',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alt Text',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})

export default portfolio
