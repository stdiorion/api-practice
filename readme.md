# API の練習

種々の API の使い方を練習するためのプログラム群です。

## RESTful な Web API

- `/rest` … node.js と Express によるサーバーサイド
- `/rest_client` … Python による呼び出し

### Usage

サーバーを立ち上げます。

```sh
cd rest
node index.js
```

`http://localhost:8080/articles/` を GET で叩くと `/rest/articles_data.json` の中身を返します。

```sh
> python rest_client/get.py

Raw Response -------------------------
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 240
ETag: W/"f0-AXJQZq/wWwLUBwnY/BiFK/53qwM"
Date: Sat, 18 Sep 2021 19:14:18 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"articles":[{"id":1,"title":"サンプル記事1","postdate":"2021-09-20","content":"サンプル記事1の内容です。"},{"id":2,"title":"サンプル記事2","postdate":"2021-09-21","content":"サンプル記事2の内容です。"}]}

JSON Format --------------------------
{'articles': [{'content': 'サンプル記事1の内容です。',
               'id': 1,
               'postdate': '2021-09-20',
               'title': 'サンプル記事1'},
              {'content': 'サンプル記事2の内容です。',
               'id': 2,
               'postdate': '2021-09-21',
               'title': 'サンプル記事2'}]}

DataFrame Format ---------------------
   id    title    postdate        content
0   1  サンプル記事1  2021-09-20  サンプル記事1の内容です。
1   2  サンプル記事2  2021-09-21  サンプル記事2の内容です。
```