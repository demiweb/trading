import Anim from 'js-anim'
import classNames from '../classNames'

export default function animateOnScroll() {
  const els = document.querySelectorAll(`.${classNames.animEl}`)
  if (!els.length) return

  const anim = new Anim(els, {
    observer: {
      threshold: 0.2,
    },
  })
  anim.observe()
}
