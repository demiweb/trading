import classNames from '../classNames'

export default ({ dom }) => {
  const { body: BODY } = dom

  document.addEventListener('click', e => {
    const btn = e.target.closest(`.${classNames.scrollTo}`)

    if (!btn) return
    const href = btn.getAttribute('href')
    const target = document.querySelector(href)

    if (!target) return
    e.preventDefault()
    const header = document.querySelector('.header')
    if (!header) return

    const offset = header.offsetHeight

    const top = target.getBoundingClientRect().top + BODY.scrollTop - offset

    window.scrollBy({
      top,
      behavior: 'smooth',
    })
  })
}
