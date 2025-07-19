import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
    name: "category",
    title: "Category",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required()   
        }),
        defineField({
            name: "slug",
            title: "slug",
            type: "slug",
            validation: (Rule) => Rule.required()   
        }),
        defineField({
            name: "image",
            title: "Category Image",
            type: "image",
            options:{
                hotspot: true
            }   
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text"
        }),
        defineField({
            name: "range",
            title: "Range",
            type: "number",
            description: "Starting From"
        }),
        defineField({
            name: "featured",
            title: "Featured",
            type: "boolean",
            initialValue: false
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "descripton",
            media: "image",

        }
    }
})