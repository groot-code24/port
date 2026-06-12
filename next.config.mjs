import { withContentlayer } from "next-contentlayer"

const nextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    mdxRs: true
  }
}

export default withContentlayer(nextConfig)
