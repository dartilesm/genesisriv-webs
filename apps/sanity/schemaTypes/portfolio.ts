import { defineArrayMember, defineField, defineType } from "sanity"

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
          name: 'socialLinks',
          type: 'array',
          title: 'Social Links',
          of: [
            defineArrayMember({
              name: 'socialLink',
              type: 'object',
              title: 'Social Link',
              fields: [
                defineField({
                  name: 'icon',
                  type: 'string',
                  title: 'Icon',
                  options: {
                    list: [
                      { title: 'LinkedIn', value: 'Linkedin' },
                      { title: 'X', value: 'X' },
                      { title: 'Instagram', value: 'Instagram' },
                      { title: 'Curriculum Vitae', value: 'CV' },
                      { title: 'Mail', value: 'Mail' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'url',
                  type: 'string',
                  title: 'URL',
                  validation: (Rule) => Rule.required(),
                }),
              ],
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
              type: 'string',
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
        defineField({
          name: 'currentActivity',
          type: 'array',
          title: 'Current Activity',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  type: 'string',
                  title: 'Label',
                  placeholder: 'Cursando',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  type: 'string',
                  title: 'Description',
                  placeholder: 'Carrera de Diseño Gráfico Artístico/Digital',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'activityCTA',
          type: 'object',
          title: 'Activity Call to Action',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
              placeholder: 'Trabajemos juntos',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              type: 'string',
              title: 'URL',
              placeholder: 'mailto:desginer.genesisriv@gmail.com',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'stats',
          type: 'array',
          title: 'Stats',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'number',
                  type: 'string',
                  placeholder: '5+',
                  title: 'Number',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'label',
                  type: 'string',
                  title: 'Label',
                  placeholder: 'Years of experience',
                  validation: (Rule) => Rule.required(),
                }),
              ],
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
    defineField({
      name: 'testimonials',
      type: 'object',
      title: 'Testimonials',
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
        }),
        defineField({
          name: 'testimonialsList',
          type: 'array',
          title: 'Testimonials List',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  type: 'string',
                  title: 'Name',
                  placeholder: 'Fernando Ruiz',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'role',
                  type: 'string',
                  title: 'Role',
                  placeholder: 'Sr. Product Designer & Strategy - NoCode developer',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'imageUrl',
                  type: 'string',
                  title: 'Image URL',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'text',
                  type: 'array',
                  title: 'Text',
                  of: [
                    defineArrayMember({
                      type: 'block',
                    }),
                  ],
                }),
                defineField({
                  name: 'size',
                  type: 'string',
                  title: 'Size',
                  description: 'This is the size of the testimonial card',
                  options: {
                    list: ['small', 'medium', 'large'],
                  },
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'cta',
          type: 'object',
          title: 'Call to Action',
          fields: [
            defineField({
              name: 'subtitle',
              type: 'string',
              title: 'Subtitle',
              placeholder: 'Recomendaciones de colegas y clientes con los que he tenido el placer de trabajar',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
              placeholder: 'Dejar una recomendación',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              type: 'string',
              title: 'URL',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})

export default portfolio
