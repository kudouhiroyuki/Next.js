## 環境構築<br>
npm install<br>
yarn dev

- React Developer Tools<br>
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

- Redux DevTools<br>
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja

## ドキュメント<br>
- React Bootstrap<br>
https://react-bootstrap.github.io/components/alerts

## 環境構築Log<br>
- yarnインストール<br>
npm install --global yarn

- プロジェクト作成<br>
yarn create next-app

- Typescript設定<br>
touch tsconfig.json<br>
yarn add --dev typescript @types/react @types/node<br>
yarn build

- Sassインストール<br>
yarn add sass --dev

- ESLintインストール<br>
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --dev

- Redux Toolkitインストール<br>
npm install --save @reduxjs/toolkit react-redux @types/react-redux

- axiosインストール<br>
yarn add axios

- bootstrapインストール<br>
npm install --save react-bootstrap
npm install --save bootstrap

- 起動<br>
yarn dev

- ビルド（.next/）<br>
yarn build

## ブランチ運用<br>
- ブランチ名（チケット名にしてください）<br>
feature/CMS_RENEW-XX<br>
bugfix/CMS_DEFECT-XX<br>

- コミット（コミットの時には「リリースフェーズ」「チケット名」を記載してください）<br>
【フェーズ1】 CMS_DEFECT-XX 機能追加<br>
【バグ】 CMS_DEFECT-XX バグ修正


## Backlog運用<br>
#### 記載例（バグ修正の場合）<br>
<--------原因---------><br>
xxxxxxxxxxxxx

<------修正内容------><br>
xxxxxxxxxxxxx

<--------テスト---------><br>
各TOPページ<br>
↳スライダーが正常動作すること

■devPR（マージ済み）<br>
https://GitプルリクURL

■ステージング：テスト（完了）<br>
デモ用：デモサロン<br>
https://ステージング環境の該当URL

■masterPR（マージ済み）<br>
https://GitプルリクURL

■本番：テスト（完了）<br>
デモ用：デモサロン<br>
https://本番環境の該当URL
