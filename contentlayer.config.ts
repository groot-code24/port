import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rehypePrettyCodePlugin = rehypePrettyCode as any

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc: { _raw: { flattenedPath: string } }) => doc._raw.flattenedPath.replace(/^(research|writing|experiments)\//, "")
  },
  url: {
    type: "string",
    resolve: (doc: { _raw: { flattenedPath: string } }) => `/${doc._raw.flattenedPath}`
  }
} as const

export const ResearchDoc = defineDocumentType(() => ({
  name: "ResearchDoc",
  filePathPattern: "research/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    status: { type: "string", required: true },
    citationKey: { type: "string", required: true }
  },
  computedFields
}))

export const WritingDoc = defineDocumentType(() => ({
  name: "WritingDoc",
  filePathPattern: "writing/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    readingTime: { type: "string", required: true }
  },
  computedFields
}))

export const ExperimentDoc = defineDocumentType(() => ({
  name: "ExperimentDoc",
  filePathPattern: "experiments/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    outcome: { type: "string", required: true }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [ResearchDoc, WritingDoc, ExperimentDoc],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypePrettyCodePlugin, { theme: "github-dark-dimmed" }]
    ]
  }
})