import katex from "katex"

export function Equation({ value, inline = false }: { value: string; inline?: boolean }) {
  const html = katex.renderToString(value, {
    displayMode: !inline,
    throwOnError: false
  })

  const Tag = inline ? "span" : "div"

  return <Tag dangerouslySetInnerHTML={{ __html: html }} />
}
