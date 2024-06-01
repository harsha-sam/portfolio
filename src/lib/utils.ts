import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"
import { Article } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNotionAPIResponse (response: QueryDatabaseResponse): Article[] {
  let formattedResults: Article[] = [];
  response.results.forEach((result) => {
    if ("properties" in result && "public_url" in result) {
      const { Name, Description, Preview, Type } = result.properties;
      let title: string = ""
      let description: string = ""
      let cover_url: string = ""
      let preview_url: string = ""
      if ("title" in Name && Array.isArray(Name.title)) {
        title = Name.title[0]?.plain_text
      }
      if ("rich_text" in Description && Array.isArray(Description.rich_text)) {
        description = Description.rich_text[0]?.plain_text
      }
      if ("url" in Preview && Preview.url) {
        preview_url = Preview.url as string
      }
      if (result.cover && "external" in result.cover) {
        cover_url = result.cover.external.url
      }
      if (!result.public_url || !title) {
        return;
      }
      if ("select" in Type && Type.select) {
        if ("name" in Type.select && Type.select.name === "Project" && (!description || !preview_url)) {
          return;
        }
      }
      formattedResults.push({
        id: result.id,
        public_url: result.public_url,
        title,
        description,
        cover_url,
        preview_url
      })
    }
  })
  return formattedResults;
}