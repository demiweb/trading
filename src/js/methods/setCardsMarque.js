import Marquee from 'jsmarquee'

export default function setCardsMarque() {
  const m = new Marquee({
    element: '.cards',
    velocity: 1,
  })

  m.run()
}
