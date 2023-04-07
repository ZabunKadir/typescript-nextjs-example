/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
  },
  // ...withImages(),
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });

  //   return config;
  // },
  //   return config;
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       use: [
  //         {
  //           loader: "ts-loader",
  //           options: {
  //             getCustomTransformers() {
  //               return {
  //                 before: [
  //                   transform({
  //                     overrideIdFn: "[sha512:contenthash:base64:6]",
  //                   }),
  //                 ],
  //               };
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // compilerOptions: {
  //   plugins: [
  //     {
  //       transform: "@formatjs/ts-transformer",
  //       import: "transform",
  //       type: "config",
  //       overrideIdFn: "[sha512:contenthash:base64:6]",
  //       ast: true,
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
