# fe-w1-kakaopage
카카오페이지 UI를 클론한다.
- 웹툰 UI 레이아웃
- 탭 UI

## 설계
- express로 웹서버를 구성한다.
- html, css, js, image 등 정적파일을 제공한다.
  - 폴더 구조
    - /
      - views
        - (html files)
      - public
        - css
          - (css files)
        - js
          - (js files)
        - img
          - (image files)
- 요구사항과 기획서의 내용에 따라, 모든 이미지와 텍스트는 JS 파일안에서 관리하고 서버와의 통신은 하지 않는다.
