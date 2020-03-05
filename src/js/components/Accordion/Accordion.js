import { IS_ACTIVE, IS_OPEN } from '../../constants'
import { BEMblock } from '../../helpers'
import classes from '../../classNames'

const classNames = classes.accordion

export default class Accordion {
  constructor(options = {}) {
    this.options = options
    this.classes = {}
  }

  init() {
    this._addListeners()
  }

  destroy() {
    this._removeListeners()
  }

  get BEMbtn() {
    return BEMblock(this.btn, this.classes[this.name].btn)
  }

  get BEMitem() {
    return BEMblock(this.item, this.classes[this.name].item)
  }

  _addListeners() {
    this.onClick = this.handleClick.bind(this)

    document.addEventListener('click', this.onClick)
  }

  _removeListeners() {
    document.removeEventListener('click', this.onClick)
  }

  handleClick(e) {
    this.toggleAccordion(e)
  }

  toggleAccordion(e) {
    this.btn = e.target.closest(`.${classNames.btn}`)
    if (!this.btn) return

    e.preventDefault()

    this.wrap = this.btn.closest(`.${classNames.wrap}`)
    this.btns = [...document.querySelectorAll(`.${classNames.btn}`)]
    this.items = [...document.querySelectorAll(`.${classNames.item}`)]

    this.name = this.btn.getAttribute('data-accordion-btn') || 'default'
    this.item =
      this.name && this.name !== 'default'
        ? this.wrap.querySelector(`[data-accordion-item="${this.name}"]`)
        : this.btn.nextElementSibling
    if (!this.item) return

    this.btns.forEach((btn, i) => {
      const name = btn.getAttribute('data-accordion-btn') || 'default'
      const btnClass = btn.getAttribute('data-block') || this.options.classNames.btn
      const itemClass = this.items[i].getAttribute('data-block') || this.options.classNames.item
      this.classes = {
        ...this.classes,
        [name]: {
          btn: btnClass,
          item: itemClass,
        },
      }
    })

    if (!this.classes) return

    this.BEMbtn.toggleMod(IS_ACTIVE)
    this.BEMitem.toggleMod(IS_OPEN)

    if (this.BEMitem.containsMod(IS_OPEN)) {
      this.BEMitem.node.style.maxHeight = `${this.BEMitem.node.scrollHeight}px`
    } else {
      this.BEMitem.node.style.maxHeight = ''
    }

    console.log(this.BEMitem.node)

    if (this.onToggle) this.onToggle()
  }
}
