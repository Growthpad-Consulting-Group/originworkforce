import { defineField, defineType, useFormValue, set, unset } from "sanity";
import { useEffect, useRef } from "react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function AutoSlugInput(props: any) {
  const title = useFormValue(["title"]) as string | undefined;
  const { onChange, value } = props;
  const prevTitleRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    const prevTitle = prevTitleRef.current;
    prevTitleRef.current = title;

    if (!title) {
      return;
    }

    const currentSlug = value?.current || "";
    const prevGenerated = prevTitle ? slugify(prevTitle) : "";
    const nextGenerated = slugify(title);

    // Update if slug is empty OR matches the generated slug from the previous title
    if (!currentSlug || currentSlug === prevGenerated) {
      if (currentSlug !== nextGenerated) {
        onChange(nextGenerated ? set({ _type: "slug", current: nextGenerated }) : unset());
      }
    }
  }, [title, value?.current, onChange]);

  return props.renderDefault(props);
}

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
      components: {
        input: AutoSlugInput,
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
      initialValue: () => new Date().toISOString().split("T")[0],
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
