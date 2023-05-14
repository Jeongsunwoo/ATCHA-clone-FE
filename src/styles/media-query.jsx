//디바이스 미디어쿼리 (아이폰5부터 아이패드 Pro 해상도)
import facepaint from 'facepaint'
import { css } from '@emotion/react';

// const breakpoints = [320, 375, 414, 768, 1024]
// const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const mq = facepaint([
  '@media(min-width: 320px)',
  '@media(min-width: 375px)',
  '@media(min-width: 414px)',
  '@media(min-width: 768px)',
  '@media(min-width: 1024px)',
])




export const HeaderPaddingStyle = css(
  mq({
    padding:['0 3em', '0 1em', '0 1.5em', '0 1.5em', '0 2.5em', '0 2em 0 3em'],
  })
);