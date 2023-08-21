import { defineType, defineField } from "@sanity-typed/types";


const metadata = defineType({
    name: 'metadata',
    type: 'document',
    title: 'Site Metadata',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: <T>(Rule: { required: () => T; }) => Rule.required()
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: <T>(Rule: { required: () => T; }) => Rule.required()
        }),
        defineField({
            name: 'keywords',
            type: 'array',
            title: 'Keywords',
            of: [
                defineField({ 
                    name: 'keyword',
                    type: 'string' 
                })
            ],
        }),
        defineField({
            name: 'author',
            type: 'string',
            title: 'Author',
            validation: <T>(Rule: { required: () => T; }) => Rule.required()
        }),
        defineField({
            name: 'url',
            type: 'url',
            title: 'URL',
            validation: <T>(Rule: { required: () => T; }) => Rule.required()
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            validation: <T>(Rule: { required: () => T; }) => Rule.required()
        }),
        defineField({
            name: 'favicon',
            type: 'image',
            title: 'Favicon',
            validation: <T>(Rule: { required: () => T; }) => Rule.required()
        }),
    ]
})

export default metadata;