// export default {
//   npmClient: 'yarn'
// };

import { defineConfig } from "umi";
const pxtorem = require("postcss-pxtorem");

export default defineConfig({
  extraPostCSSPlugins: [
    pxtorem({
      // rootValue: 75, //这里根据设计稿大小配置,一般是375 1rem=75px
      // propList: ['*']
      viewportWidth: 750, // (Number) The width of the viewport.
      viewportHeight: 1334, // (Number) The height of the viewport. -- 一般不需要配置
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: "vw", // (String) Expected units.
      selectorBlackList: [], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false,
    }),
  ],

  // 路由配置
  routes: [
    { path: "/", component: "@/pages/index" },
    { path: "/doc", component: "@/pages/docs" },
  ],
});
