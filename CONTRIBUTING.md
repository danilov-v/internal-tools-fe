# Участие в проекте

## Код стайл

Большая часть код стайла на проекте контролируется при помощи различных статических анализаторов кода.
Проверка осуществляется перед каждым коммитом.

Прежде чем выключать какие-то правила из конфига, прочитайте описание данного правила и проконсультируйтесь с командой.

Некоторые вещи, которые эти анализаторы _пока_ не проверяют:

- Разделяйте импорты "чужого кода" и кода приложения пустой строкой
- Если есть список в котором порядок не важен, постарайтесь чтобы порядок был алфавитным
- Пишите типы для компонентов в конце файла

## Структура проекта

Для данного проекта мы придерживаемся следующей структуры и стиля написания кода.

### Статические ресурсы

Все необходимые для проекта картинки и другие статические ресурсы хранятся в папке [`src/assets`](./src/assets).
Для иконок используется папка [`src/assets/icons`](./src/assets/icons).
Для изображений рангов - [`src/assets/ranks`](./src/assets/ranks).

Исключение составляют шрифты, которые хранятся напрямую в [`public/fonts`](./public/fonts).
Это сделано намерено, чтобы не захламлять [`src`](./src).

### Многоразовые компоненты

Компоненты, которые используются или планируют использоваться более одного раза в приложении,
хранятся в папке [`src/components`](./src/components).

Допускается группировка однотипных компонентов в папки.
Например, [`src/components/dialogs`](./src/components/dialogs) может содержать `BaseDialog`, `ConfirmationDialog`.

Каждый компонент представляет собой папку
(название папки - название компонента в [PascalCase](https://techterms.com/definition/pascalcase)),
в котрой **ВСЕГДА** будет 4 файла:

1. `MyComponent.tsx` - содержит код компонента
2. `index.ts` - реэкспорт компонента из `MyComponent.tsx` и по необходимости оборачивание его в
   [`HOC`и](https://reactjs.org/docs/higher-order-components.html)
3. `MyComponent.style.ts` - стилизованные с помощью [`styled-components`](https://styled-components.com) компоненты,
   которые используются в `MyComponent.tsx`
4. `MyComponent.test.tsx` - юнит тесты для компонента

### Константы и конфигурации

Папка [`src/configs`](./src/configs) предназначена для констант и данных, которые можно отнести к данным конфигурации.
Например, ссылки для запросов к серверу или объект темы приложения.

### Вспомогательные функции

Для вспомогательных функций и утилит, которые могут быть использованы в нескольких местах используется папка
[`src/helpers`](./src/helpers).

В папке [`src/helpers/hooks`](./src/helpers/hooks) хранятся многоразовые хуки.

### Страницы

Под страницами мы понимаем компонент, который рендерится [`@reach/router`](https://reach.tech/router)
по некоторому пути.

Такие компоненты хранятся в папке [`src/pages`](./src/pages).
Для названия папок страниц используется [camelCase](https://en.wikipedia.org/wiki/Camel_case).

В папке со страницей (например, `src/pages/myPage`) как правило находятся (могут находиться):

1. `myPage.tsx` - содержит код страницы
2. `myPage.test.tsx` - содержит юнит тесты страницы
3. `mePage.style.ts` - стилизованные с помощью [`styled-components`](https://styled-components.com) компоненты,
   которые используются в `myPage.tsx`
4. `components` - папка, содержащая компоненты, которые используются только на этой странице

Компоненты страницы придерживаются такой же структуры и стиля как [Многоразовые компоненты](#Многоразовые-компоненты).

### Redux

В качестве глобального хранилища данных приложения мы используем [`Redux`](https://redux.js.org).
Работа с ним осуществляется при помощи [`Redux Toolkit`](https://redux-toolkit.js.org).

Папка [`src/redux`](./src/redux) содержит файл конфигурации стора и папки со слайсами
(частями стора, которые отвечают за часть данных и работу с ними).

В папке слайса **ВСЕГДА** находится 3 файла:

1. `selectors.ts` - селекторы для доступа к данным необходимым интерфейсу
2. `slice.ts` - создание редьюсера слайса и его начальное состояние
3. `thunks.ts` - асинхронные экшены слайса

### Сервисы

Под сервисами мы понимаем части приложения, которые отвечают за операции с ресурсами за пределами данного приложения.
Например, запросы к серверу, аналитика, логирование и сбор ошибок.
Они хранятся в папке [`src/services`](./src/services).

Для каждого сервиса выделяется отдельная папка.
Например, для запросов к серверу используется сервис [`src/services/http`](./src/services/http).

### Типы

Глобальные типы приложения хранятся в папке [`src/types`](./src/types).
Эти типы используются используются более одного раза.
Локальные типы стоит хранить там, где они используются.

## Тестирование

Все юнит тесты и данные для них **должны** находиться рядом с тестируемой частью кода.
Либо в файле (например, `MyComponent.test.tsx`), либо в папке (например, `src/redux/slice/tests`).

Старайтесь тестировать компоненты не обернутые в [`HOC`и](https://reactjs.org/docs/higher-order-components.html).
В противоположном случае это сильно усложняет тесты и они выходят за рамки юнит тестирования.

Используйте следующий подход к создаю экземпляра компонента в своих тестах:

```javascript
const getComponent = props => {
  const parsedProps = {
    callback: () => {},
    prop1: 'prop1',
    ...props,
  };

  return render(<MyComponent {...parsedProps} />);
};

describe('MyComponent component', () => {
  it('does one thing', () => {
    const component = getComponent();

    expect(component.find(Child)).toExist();
  });

  it('does another', () => {
    const callback = jest.fn();
    const component = getComponent({ callback });

    expect(callback).toHaveBeenCalled();
  });
});
```

Это гарантирует, что вы всегда тестируете новый экземпляр компонента.

При таком подходе в объект `parsedProps` следует добавлять **только необходимые параметры**.
Это позволит вам протестировать что вы не забыли обработать случай, когда необязательные параметры не пришли.
Например, вот таким образом:

```javascript
it('renders and matches snapshot', () => {
  const component = getComponent();

  expect(component.baseElement).toMatchSnapshot();
});
```