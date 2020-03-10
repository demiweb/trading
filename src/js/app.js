import 'core-js/features/symbol'
import 'core-js/features/array/from'
import 'core-js/features/promise'
import 'core-js/features/object/assign'
import 'core-js/features/object/values'
import 'intersection-observer'
import './lib/polyfill'
// import regeneratorRuntime from 'regenerator-runtime'

import classNames from './classNames'

import sayHello from './lib/sayHello'
import setHTMLClassNames from './methods/setHTMLClassNames'
import setLazy from './methods/setLazy'
import toggleHeader from './methods/toggleHeader'
import closeMenu from './methods/closeMenu'
import animateOnScroll from './methods/animateOnScroll'
import scrollTo from './methods/scrollTo'

import Menu from './components/Menu/Menu'
import Slider from './components/Slider/Slider'
import Accordion from './components/Accordion/Accordion'

class App {
  constructor() {
    this.methods = {}
    this.classNames = classNames
    this.dom = {
      body: document.body,
      header: document.querySelector(`.${classNames.header}`),
    }

    this.menu = new Menu({
      classNames: {
        btn: 'burger',
        menu: 'header__nav',
      },
    })
    this.slider = new Slider(`.${classNames.slider.container}`)
    this.accordion = new Accordion({
      classNames: {
        btn: 'faq-question__title',
        item: 'faq-question__content',
      },
    })
  }

  initMethods() {
    this.methods = {
      sayHello,
      setHTMLClassNames,
      setLazy,
      closeMenu,
      toggleHeader,
      animateOnScroll,
      scrollTo,
    }

    Object.values(this.methods).forEach(fn => fn(this))
  }

  init() {
    this.initMethods()

    this.menu.init()
    this.slider.init()
    this.accordion.init()
    this.marquee.init()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App()
  app.init()
  window.app = app
})
