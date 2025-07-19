import { defineField, defineType } from "sanity";
import {TagIcon} from "@sanity/icons"

export const blogCategoryType = defineType({
    name: "blogCategory",
    title: "Blog Category",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "slug",
            options: {
                source: "title"
            }
        }),
        defineField({
            name: "description",
            type: "text"
        })
    ]
})