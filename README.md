# riot-simple-loader-sample
riot-simple-loader を使用したサンプルです。

## 実行方法

### このプロジェクトをクローンしてください。
```bash
git clone https://github.com/nekijak/riot-simple-loader-sample.git
```

### 依存関係モジュールのインストール
```bash
npm i
```

### 起動
```bash
npm start
```

## ポイント

### webpack.config.babel.js
以下の設定でプリコンパイルが実行されます。
```javascript
  module: {
    rules: [{
        enforce: "pre",
        test: /\.tag$/,
        exclude: /node_modules/,
        use: [{
          loader: 'riot-simple-loader',
          options: {}
        }],
      },
      :
```

## ライセンス

MIT License

Copyright (c) 2017 Kentaro Kajino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
