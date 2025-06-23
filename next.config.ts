import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // Disable source maps in production for extra obfuscation
  productionBrowserSourceMaps: false,
  
  // Add security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Hacker-Warning',
            value: 'Nice try, but the mainframe is protected by quantum encryption (not really)'
          },
          {
            key: 'X-Coffee-Status',
            value: 'Always brewing'
          },
        ],
      },
    ];
  },
  
  // Custom webpack config for additional obfuscation
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add a comment to confuse people looking at the bundle
      config.plugins.push({
        apply: (compiler: any) => {
          compiler.hooks.compilation.tap('AddConfusingComments', (compilation: any) => {
            compilation.hooks.processAssets.tap(
              {
                name: 'AddConfusingComments',
                stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
              },
              () => {
                Object.keys(compilation.assets).forEach((filename) => {
                  if (filename.endsWith('.js')) {
                    const asset = compilation.assets[filename];
                    const source = asset.source();
                    const comment = `
/**
 * CODE CAPITAL PROPRIETARY SOURCE CODE
 * 
 * This code is protected by:
 * - Military-grade encryption (ROT13)
 * - Blockchain verification (TODO)
 * - AI-powered obfuscation (console.log)
 * - Coffee-driven development methodology
 * 
 * Unauthorized access will result in:
 * - Strongly worded console warnings
 * - Deployment of tactical memes
 * - Possible rickroll
 * 
 * If you can read this, you're probably overqualified.
 */
` + source;
                    compilation.updateAsset(filename, new compiler.webpack.sources.RawSource(comment));
                  }
                });
              }
            );
          });
        },
      });
    }
    return config;
  },
};

export default nextConfig;
