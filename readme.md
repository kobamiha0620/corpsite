# Leverages Staffing コーポレートサイト

Leverages Staffin の公式 コーポレートサイトのソースコードを管理するためのものです。

## 目次

- [ソースツリー](#tree)
- [開発環境について](#setup)
- [その他](#overview)

<h2 id="tree">ソースツリー</h2>

├── dist **本番ファイル**
│   ├── 404
│   │   └── index.html
│   ├── assets
│   │   ├── css
│   │   ├── img **画像はこちらに格納**
│   │   └── js
│   ├── company
│   │   └── index.html
│   ├── contact
│   │   ├── confirm
│   │   ├── index.html
│   │   └── thanks
│   ├── environment
│   │   └── index.html
│   ├── index.html
│   └── maintenance
│   └── index.html
├── esbuild.config.js **Javascript を 1 つにまとめる設定ファイル**
├── package.json **npm 設定ファイル**
├── postcss.config.js **PostCSS の設定ファイル**
├── readme.md
├── bs-config.js **Browser-sync の設定ファイル**
└── src **開発ファイル**
├── ejs
│   ├── 404
│   ├── company
│   ├── contact
│   ├── environment
│   ├── index.ejs
│   ├── maintenance
│   └── module **共通 EJS パーツを格納**
├── js
│   ├── main.js
│   └── module **各 JS パーツを格納**
└── sass
├── foundation
├── global
│   ├── mixin
│   └── setting
├── layout
├── object
│   ├── component
│   ├── project
│   └── utility
└── style.scss

<h2 id="setup">開発環境について</h2>

### 前提条件

- Node.js（v20.10.0）
- npm（Node Package Manager）

### EJS init の変数について

各ページの EJS トップに配置している変数についての説明
直下の.ejs ファイル群は主要ページ html と対応しています。
主要ページ冒頭には <% // 以下の設定値を記入のこと const pageinit = { title : '' , 〜〜〜 }; %> のように、変数設定項目があります。
以下各変数の説明となります。

const pageinit = {
title : **<title>タグの一部を指定 & mata property の og:title を指定**
sitename: **mata property の og:sitename を指定**
description : **mata property の og:description を指定**
ogurl: **mata property の og:url を指定**
ogimage: **mata property の og:image を指定**
path : **各ページのパスを指定**
type: **mata property の og:type を指定**
pagename : **各ページの名称（例：お問い合わせ）**
robots : **mata name の robots を指定**
id: **<body>に付与する ID 名**

**！以下は入力フォームのみ対応！**
action: **Google フォーム action の URL（例：<form action=""></form>）**,
lastName: **Google フォームの「姓」の entryID**
firstName: **Google フォームの「名」の entryID**
lastNameKana: **Google フォームの「姓カナ」の entryID**
firstNamekana: **Google フォームの「名カナ」の entryID**
tel: **Google フォームの「電話番号」の entryID**
mail: **Google フォームの「メール」の entryID**
context: **Google フォームの「お問い合わせ内容」の entryID**
}

### npm コマンド

npm run dev
開発環境用データの作成
・browserSyncs でのブラウザ同期

npm run build
本番環境用のデータの作成
・js/css の minify 化
・一部ファイル名の変更（index.html -> index.php）
・不要ファイルの削除

###css について

- scss を利用
- FLOCSS 記法
  /assets/css/style.css を出力

###js について
assets/js/main.js
として自動書き出し

src/js/module 配下に機能ごとに javascript をわけています

<h2 id="overview">その他</h2>
###Googleフォームについて
https://docs.google.com/forms/d/10WUUNrMc_ehsB4EbGL2n5MjFOMMpGx8r2aYI4fjkwBk/edit

ドメインが異なる場合オーナーの権限が譲渡できません
恐れ入りますが、@gmail.com のアカウント名を教えていただくことは可能でしょうか？

###テストサイト
https://green-amami-3748.readymade.jp/
ID : admin
PW : T9wCY5W2
