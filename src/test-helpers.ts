import * as dom from 'solid-js/dom'

export function render(jsx: JSX.Element): string {
  const div = document.createElement('div')

  const dispose = dom.render(() => jsx, div)
  dispose()

  return div.children[0].outerHTML;
}

export function assertMatchesSnapshot(jsx: JSX.Element) {
  const html = render(jsx);
  expect(html).toMatchSnapshot()
}
