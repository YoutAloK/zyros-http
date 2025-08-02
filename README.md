# zyros-http

Лёгкая обёртка над axios для удобного выполнения HTTP-запросов GET и POST с простым обработчиком результатов.

---

## Установка

```bash
npm install zyros-http
```

---

## Импорт

```js
import { get, post } from 'zyros-http';
```

---

## API

### `get(url, config)`

GET-запрос по URL.

- **url** — строка с адресом запроса  
- **config** — (опционально) настройки axios

Возвращает Promise с объектом:

```js
{
  success: boolean,
  data: any,
  status: number,
  error?: string
}
```

---

### `post(url, data, config)`

POST-запрос по URL с телом `data`.

- **url** — строка с адресом  
- **data** — объект с данными для отправки  
- **config** — (опционально) настройки axios

Возвращает Promise с тем же объектом результата.

---

## Примеры

```js
import { get, post } from 'zyros-http';

(async () => {
  // GET-запрос
  const resGet = await get('https://jsonplaceholder.typicode.com/posts/1');
  if (resGet.success) {
    console.log('GET data:', resGet.data);
  } else {
    console.error('GET error:', resGet.error);
  }

  // POST-запрос
  const resPost = await post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
  });
  if (resPost.success) {
    console.log('POST data:', resPost.data);
  } else {
    console.error('POST error:', resPost.error);
  }
})();
```

---

## Зависимости

- [axios](https://www.npmjs.com/package/axios)

---

## Лицензия

MIT
