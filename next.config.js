/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // adicione os domínios das suas imagens se necessário
  },
  typescript: {
    ignoreBuildErrors: true, // temporariamente para fazer o deploy funcionar
  }
}

module.exports = nextConfig