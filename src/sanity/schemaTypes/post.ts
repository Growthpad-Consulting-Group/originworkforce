import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fieldsets: [
    {
      name: "seo",
      title: "SEO & Social Metadata",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Brief summary of the article. If left blank, it will be automatically generated from the body content.",
    }),
    defineField({
      name: "date",
      title: "Published Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Custom tags / keywords to group or label this article (e.g. Sourcing, Compliance).",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      fieldset: "seo",
      description: "Meta title for search engines. Stays under 60 characters. Falls back to post title if left blank.",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      fieldset: "seo",
      description: "Meta description for search engines. Stays under 160 characters. Falls back to post excerpt if left blank.",
    }),
  ],
});
