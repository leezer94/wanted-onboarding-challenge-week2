# 온보딩 챌린지 week 2

- [x] 사용자는 루트 경로의 \_\_posts 폴더에 작성된 마크다운 파일(.md)를 작성할 수 있어야 합니다. 해당 파일은 마크다운 본문과 게시물에 대한 meta data를 담을 수 있어야 합니다.

- [x] - 블로그에 작성된 게시물을 렌더링하는 `목록 페이지`와 개별 게시물을 렌더링하는 `상세 페이지`로 나누어 작성해주세요.

### CSS in JS 를 사용했을떄 (styled-component 기준)

```
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}
```

- \_document.js 는 SSR 시에만 렌더링되고 onClick 메소드는 사용하지 못한다.
  기본 성정이 되어있고 custom이 필요할 때만
- \_document.js 를 생성해서 overriding 하는듯.
- next.js/examples/with-styled-components/pages/\_document.tsx

- 필요한 styled 를 첫 렌더링 시점에 HTML 과 렌더링을 하고 나머지 작업을 수행하는듯?
- 변경해줄 부분은 return 문 을 작성해서 추가해주면 되는거 같다.
