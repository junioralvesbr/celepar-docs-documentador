/** @type {import('next').NextConfig} */
import Nextra from 'nextra';

const nextConfig = {
  reactStrictMode: true,
};

const withNextra = Nextra({
  theme: 'nextra-theme-docs',  
  themeConfig: './theme.config.tsx',
})

export default withNextra(nextConfig);
