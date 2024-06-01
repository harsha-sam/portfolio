'use server'
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { formatNotionAPIResponse } from "@/lib/utils";
import { Article } from "@/types";
import { notion } from "@/db";

export async function getBlogs(): Promise<Article[] | undefined>{
  try {
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: process.env["NOTION_DATABASE"]!,
      filter: {
        and: [
          {
            property: "Type",
            select: {
              "equals": "Blog"
            },
          },
          {
            property: "Status",
            status: {
              "equals": "Published"
            },
          },
        ]
      },
      sorts: [
        {
          property: "Published Date",
          direction: "ascending"
        },
        {
          property: "Name",
          direction: "ascending"
        }
      ],
    })
    return formatNotionAPIResponse(response);
  }
  catch(e){console.log(e)}
}

export async function getProjects(): Promise<Article[] | undefined> {
  try {
    const response = await notion.databases.query({
      database_id: process.env["NOTION_DATABASE"]!,
      filter: {
        and: [
          {
            property: "Type",
            select: {
              "equals": "Project"
            },
          },
          {
            property: "Status",
            status: {
              "equals": "Published"
            },
          },
        ]
      },
      sorts: [
        {
          property: "Published Date",
          direction: "descending"
        },
        {
          property: "Name",
          direction: "ascending"
        }
      ],
    })
    return formatNotionAPIResponse(response);
  }
  catch(e){console.log(e)}
}
