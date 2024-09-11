
export let STROKE_WIDTH = 4

// for these two, also update variables.scss
export let CIRCLE_LEFT_PX_WIDESCREEN = 150
export let CIRCLE_LEFT_PX_NARROWSCREEN = 37


// configure the settings for animation
// precision is the % step at which we animate, for example 0.01 draws 1% of the line for every 1% scrolled
const PRECISION = 0.01
// the percentage of screen height above the bottom of the viewport at which the line is "drawn" (just for the percent intersection, the line can go up)
const ANIM_MARGIN_RATIO = 0.35
// the margin above the top of the screen that still counts as "intersecting", so that lines don't undraw
export const ANIM_MARGIN_TOP = 200

// options is used by IntersectionObserver, see the docs. We configure it to callback every precision% and 
// only call back at ANIM_MARGIN_RATIO*screenheight px above the bottom of the viewport
export const animOptions = () => {
  let scrollArea = document.querySelector("#scrollArea")
  let height = scrollArea ? scrollArea.clientHeight : 900
  return {
    rootMargin: ANIM_MARGIN_TOP + "px 0px -" + height*ANIM_MARGIN_RATIO + "px 0px",
    root: scrollArea,
  }
}

export const lineAnimOptions = () => {return {
    threshold: Array.from({length: (1 / PRECISION) + 1}, (value, index) => index*PRECISION),
    ...animOptions(),
}}