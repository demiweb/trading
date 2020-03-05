import MySlider from './MySlider'
import classes from '../../classNames'

const classNames = classes.slider

export default class Slider {
  constructor(slider) {
    this.sliderClass = slider
    this.sliders = []
  }

  _getOptions() {
    this.getOptions = ({ navigation, onInit, pagination }) => ({
      hero: {
        slidesPerView: 1,
        navigation,
        on: {
          init: onInit,
        },
      },
      items: {
        slidesPerView: 1,
        spaceBetween: 28,
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true,
        },
        on: {
          init: onInit,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 36,
          },
          992: {
            navigation,
            slidesPerView: 3,
          },
        },
      },
      plans: {
        slidesPerView: 'auto',
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          992: {
            pagination: false,
          },
        },
      },
    })
  }

  _initSliders() {
    this.containers.forEach(container => {
      if (container.classList.contains(classNames.plugin.initialized)) return

      const slider = new MySlider(container, this.getOptions)
      slider.init()
      this.sliders = [...this.sliders, slider]
    })
  }

  init() {
    this.containers = [...document.querySelectorAll(this.sliderClass)]
    if (!this.containers.length) return

    this._getOptions()
    this._initSliders()
  }
}
