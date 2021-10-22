import { gsap, Back } from "gsap"
import {
  map,
  lerp,
  getMousePos,
  calcWinsize,
  getRandomNumber,
  isMobile,
} from "../utils"

class GridItem {
  public frames: number[] = []
  private winsize: { width: number; height: number } = calcWinsize()
  private mousepos = { x: this.winsize.width / 2, y: this.winsize.height / 2 }

  private conclusions: {
    hadNegativeY: boolean
    hadNegativeX: boolean
    dataSpeedX: number
    dataSpeedY: number
  } = {
    hadNegativeY: null,
    hadNegativeX: null,
    dataSpeedX: null,
    dataSpeedY: null,
  }

  constructor(el: Element, public options?: GridTapeOptions) {
    this.move(el)
    // Calculate the viewport size
    window.addEventListener("resize", () => (this.winsize = calcWinsize()))
    // Track the mouse position
    window.addEventListener(
      "mousemove",
      (ev) => (this.mousepos = getMousePos(ev))
    )
  }

  getXYValue(el: Element, key: "X" | "Y"): number {
    const dataSpeed = el.getAttribute(`data-griptape-speed-${key}`)
    const ds = Number(dataSpeed)
    let value = 0

    if (this.options?.[`disable${key}`]) {
      return value
    } else if (ds < 0) {
      this.conclusions[`hadNegative${key}`] = true
      value = Math.abs(ds)
    } else if (ds) {
      return ds
    } else if (this.options?.speed) {
      return this.options?.speed
    } else {
      value = getRandomNumber(50, 100)
    }

    this.conclusions[`dataSpeed${key}`] = value
    return value
  }

  // Move the items when moving the cursor
  move(el: Element) {
    if (!el) return
    // amounts to move in each axis
    let translationVals = { tx: 0, ty: 0 }

    // get random start and end movement boundaries
    const xstart = this.getXYValue(el, "X")
    const ystart = this.getXYValue(el, "Y")
    // infinite loop
    const render = () => {
      // Calculate the amount to move.
      // Using linear interpolation to smooth things out.
      // Translation values will be in the range of [-start, start] for a cursor movement from 0 to the window's width/height
      const dsXZero =
        this.conclusions.dataSpeedX && this.conclusions.dataSpeedX === 0
      if (!this.options.disableX || !dsXZero)
        translationVals.tx = lerp(
          translationVals.tx,
          map(
            this.mousepos.x,
            0,
            this.winsize.width / this.options.feel,
            -xstart,
            xstart
          ),
          this.options.delay
        )

      const dsYZero =
        this.conclusions.dataSpeedY && this.conclusions.dataSpeedY === 0
      if (!this.options.disableY || !dsYZero)
        translationVals.ty = lerp(
          translationVals.ty,
          map(
            this.mousepos.y,
            0,
            this.winsize.height / this.options.feel,
            -ystart,
            ystart
          ),
          this.options.delay
        )

      const xyValues = {
        x:
          this.options.negative || this.conclusions.hadNegativeX
            ? -translationVals.tx
            : translationVals.tx,
        y:
          this.options.negative || this.conclusions.hadNegativeY
            ? -translationVals.ty
            : translationVals.ty,
      }

      if (!this.options.manual) gsap.set(el, xyValues)
      this.options.onProgress(xyValues)

      this.frames.push(requestAnimationFrame(render))
    }
    this.frames.push(requestAnimationFrame(render))
  }

  killAllRequestAnimationFrames() {
    if (this.frames.length > 1)
      for (const id of this.frames) cancelAnimationFrame(id)
  }
}

type GridTapeOptions = {
  /** Default: false*/
  enterAnimation?: boolean
  /** Default: false*/
  disableY?: boolean
  /** Default: false*/
  disableX?: boolean
  /** Default: false*/
  negative?: boolean
  /** Default: 0.05*/
  delay?: number
  /** Default: 1*/
  feel?: number
  /** Default is `getRandomNumber(50, 100)`*/
  speed?: number
  /** Default: false*/
  manual?: boolean
  /**@returns `(xyValues: { x: number, y: number })`  values*/
  onProgress?: (xyValues: { x: number; y: number }) => void
}

const defaultGridTapeOptions: GridTapeOptions = {
  enterAnimation: false,
  disableY: false,
  disableX: false,
  negative: false,
  delay: 0.05,
  feel: 1,
  manual: false,
  onProgress: () => null,
}

export default class GripTapeEffect {
  constructor(
    /* Can be neither a react reference or a string selection */
    public items: Element[] | string,
    public options?: GridTapeOptions,
    public gridItems: GridItem[] = []
  ) {
    // Merge user options with defaults
    this.options = Object.assign({}, defaultGridTapeOptions, this.options)
    // Slides all elements from bottom, be sure to add overflow: hidden
    if (this.options.enterAnimation) this.showItems()
    if (!isMobile) this.buildTapeGrid()
  }

  private buildTapeGrid() {
    // If given param a querystring
    if (typeof this.items === "string")
      this.items = Array.from(document.querySelectorAll(this.items))

    if (Array.isArray(this.items))
      // Create mooving grid instance for each item
      [...this.items].forEach((item: Element) =>
        this.gridItems.push(new GridItem(item, this.options))
      )
    else this.gridItems.push(new GridItem(this.items, this.options))
  }
  showItems() {
    gsap.timeline().from(
      this.items,
      {
        yPercent: 120,
        duration: 1,
        delay: 0.3,
        ease: Back.easeInOut,
        stagger: { amount: 0.25, from: "end" },
      },
      ">-.3"
    )
  }
  public kill() {
    for (const el of this.gridItems) el.killAllRequestAnimationFrames()
  }
}
