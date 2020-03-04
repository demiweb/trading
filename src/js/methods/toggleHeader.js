import { throttle } from 'throttle-debounce'
import { BEMblock } from '../helpers'
import { HAS_BACKGROUND } from '../constants'

export default function toggleHeader({ dom }) {
  const { header } = dom

  if (!header) return

  function handleScroll() {
    if (!BEMblock(header, 'header').containsMod('transp')) return

    if (window.pageYOffset > 50) {
      BEMblock(header, 'header').addMod(HAS_BACKGROUND)
    } else {
      BEMblock(header, 'header').removeMod(HAS_BACKGROUND)
    }
  }

  const onScroll = throttle(66, handleScroll)

  window.addEventListener('scroll', onScroll)
}
