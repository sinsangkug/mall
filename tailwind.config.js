/** 
 * @type {import('tailwindcss').Config} 
 * 이 파일은 Tailwind CSS의 설정을 담고 있습니다. Tailwind CSS는 웹사이트의 디자인을 쉽게 만들어주는 도구입니다.
 */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // 이 배열 안에는 Tailwind CSS를 적용하고 싶은 파일들의 경로를 적습니다. 현재는 src 폴더 아래의 모든 JavaScript와 TypeScript 파일에 적용됩니다.
  theme: {
    extend: {}, // 여기서는 웹사이트의 기본 디자인(테마)을 변경할 수 있습니다. 'extend'는 기존의 디자인을 유지하면서 추가적인 디자인 설정을 할 수 있게 해줍니다. 현재는 추가할 디자인이 없어 비어 있습니다.
  },
  plugins: [], // 이 배열에는 추가적인 기능을 제공하는 플러그인들을 넣을 수 있습니다. 플러그인을 사용하면 Tailwind CSS의 기능을 확장할 수 있습니다. 현재는 플러그인을 사용하지 않아 비어 있습니다.
}
