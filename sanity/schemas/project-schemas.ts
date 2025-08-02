import { defineType, defineField  } from 'sanity';

export const Blogs = {
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export const Author = {
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
        },
      ],
    },
  ],
};


export const User = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "userName",
      title: "User Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'workExperiences',
      title: 'Work Experiences',
      type: 'array',
      of: [{ type: 'workExperience' }],
      validation: (rule) => rule.required().min(1),
    })
  ],
})

export const WorkExperience = defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'object',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (rule) =>
        rule.custom((endDate, context) => {
           const parent = context.parent as { startDate?: string };
           const startDate = parent.startDate;
          if (startDate && endDate && endDate < startDate) {
            return 'End date cannot be before start date';
          }
          return true;
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "url"
    }),
  ],
});