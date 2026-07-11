import type { ReactNode } from 'react'

type PixelIconName = 'brand' | 'journal' | 'scroll' | 'anvil' | 'nameplate' | 'map' | 'search' | 'sun' | 'moon' | 'sprout'

type PixelIconProps = { name: PixelIconName; size?: number; className?: string }

const c = {
  ink: '#20232d', paper: '#f8e8ba', parchment: '#d8ad62',
  grass: '#78ad52', leaf: '#477d3b', earth: '#8f573d', earthLight: '#b87550',
  wood: '#b97846', woodLight: '#d99a55', woodDark: '#6c4030',
  red: '#c83f4c', gold: '#efc75a', sky: '#79a9c9', violet: '#8d77bd',
  skin: '#d89a70', skinLight: '#edb789', hair: '#51372f', moon: '#d8cdf1',
} as const

function Brand() {
  return <>
    <rect width="24" height="24" fill={c.ink} />
    <rect x="2" y="2" width="20" height="6" fill={c.grass} /><rect x="2" y="8" width="20" height="14" fill={c.earth} />
    <rect x="4" y="2" width="6" height="3" fill="#a2d261" /><rect x="16" y="2" width="4" height="3" fill={c.leaf} />
    <rect x="4" y="10" width="6" height="4" fill={c.earthLight} /><rect x="12" y="8" width="4" height="4" fill="#70402f" /><rect x="18" y="14" width="2" height="6" fill={c.earthLight} /><rect x="6" y="17" width="6" height="4" fill="#6f4130" />
  </>
}

function Journal() {
  return <>
    <rect x="3" y="5" width="12" height="17" fill={c.ink} /><rect x="4" y="6" width="10" height="15" fill={c.woodDark} /><rect x="5" y="6" width="3" height="15" fill={c.woodLight} /><rect x="8" y="7" width="5" height="13" fill={c.wood} />
    <rect x="9" y="8" width="3" height="2" fill={c.paper} /><rect x="9" y="12" width="3" height="1" fill={c.parchment} /><rect x="9" y="15" width="2" height="1" fill={c.parchment} />
    <rect x="14" y="2" width="3" height="5" fill={c.ink} /><rect x="15" y="2" width="2" height="4" fill={c.paper} /><rect x="16" y="5" width="3" height="4" fill={c.ink} /><rect x="17" y="6" width="2" height="3" fill={c.paper} />
    <rect x="18" y="8" width="3" height="3" fill={c.ink} /><rect x="17" y="10" width="3" height="4" fill={c.ink} /><rect x="16" y="13" width="3" height="5" fill={c.ink} /><rect x="15" y="17" width="3" height="4" fill={c.ink} /><rect x="15" y="18" width="2" height="3" fill={c.red} />
  </>
}

function Scroll() {
  return <>
    <rect x="4" y="3" width="16" height="18" fill={c.ink} /><rect x="2" y="5" width="20" height="4" fill={c.woodDark} /><rect x="3" y="5" width="18" height="2" fill={c.woodLight} /><rect x="2" y="17" width="20" height="4" fill={c.woodDark} /><rect x="3" y="18" width="18" height="2" fill={c.woodLight} />
    <rect x="6" y="6" width="12" height="13" fill={c.paper} /><rect x="7" y="7" width="5" height="4" fill={c.sky} /><rect x="8" y="8" width="3" height="2" fill="#c7e5ef" /><rect x="13" y="7" width="3" height="2" fill={c.parchment} /><rect x="12" y="10" width="4" height="4" fill={c.red} /><rect x="13" y="10" width="2" height="2" fill="#ef7c6e" /><rect x="7" y="15" width="9" height="1" fill={c.parchment} />
  </>
}

function Anvil() {
  return <>
    <rect x="3" y="4" width="18" height="4" fill={c.ink} /><rect x="4" y="5" width="16" height="2" fill="#8b969d" /><rect x="5" y="5" width="8" height="1" fill="#bec8cc" /><rect x="17" y="6" width="3" height="1" fill="#626c75" />
    <rect x="7" y="8" width="10" height="4" fill={c.ink} /><rect x="8" y="8" width="8" height="3" fill="#707a83" /><rect x="9" y="8" width="5" height="1" fill="#aeb9bd" />
    <rect x="9" y="12" width="6" height="5" fill={c.ink} /><rect x="10" y="12" width="4" height="4" fill="#5e6872" /><rect x="10" y="13" width="2" height="2" fill="#87939b" />
    <rect x="5" y="17" width="14" height="4" fill={c.ink} /><rect x="6" y="18" width="12" height="2" fill="#78838b" /><rect x="7" y="18" width="4" height="1" fill="#a9b5b8" /><rect x="15" y="19" width="2" height="1" fill="#535d67" />
  </>
}

function Nameplate() {
  return <>
    <rect x="16" y="2" width="4" height="3" fill={c.ink} /><rect x="15" y="4" width="6" height="4" fill={c.ink} /><rect x="17" y="2" width="2" height="3" fill="#f1f3ef" /><rect x="18" y="4" width="2" height="3" fill="#c5cbca" />
    <rect x="13" y="5" width="6" height="5" fill={c.ink} /><rect x="10" y="8" width="7" height="7" fill={c.ink} /><rect x="7" y="11" width="7" height="8" fill={c.ink} /><rect x="3" y="15" width="8" height="7" fill={c.ink} />
    <rect x="14" y="6" width="4" height="3" fill="#f1cf78" /><rect x="11" y="9" width="5" height="5" fill="#e6bb63" /><rect x="8" y="12" width="5" height="6" fill="#e1b45c" /><rect x="4" y="16" width="6" height="5" fill="#d4a651" />
    <rect x="15" y="6" width="3" height="1" fill="#ffe59a" /><rect x="12" y="9" width="3" height="1" fill="#f7d47e" /><rect x="9" y="12" width="2" height="2" fill="#f7d47e" /><rect x="5" y="16" width="2" height="2" fill="#ebc66e" />
    <rect x="13" y="9" width="2" height="2" fill="#76543a" /><rect x="11" y="11" width="2" height="3" fill="#76543a" /><rect x="8" y="15" width="3" height="2" fill="#76543a" /><rect x="6" y="18" width="2" height="1" fill="#76543a" />
  </>
}

function Map() {
  return <>
    <rect x="2" y="3" width="20" height="18" fill={c.ink} /><rect x="4" y="5" width="16" height="14" fill={c.paper} />
    <rect x="5" y="6" width="5" height="12" fill="#8ac1cf" /><rect x="10" y="6" width="5" height="12" fill="#86ad5b" /><rect x="15" y="6" width="4" height="12" fill="#d1b269" />
    <rect x="6" y="7" width="3" height="3" fill="#c5e1e4" /><rect x="11" y="7" width="3" height="4" fill="#b0d076" /><rect x="16" y="13" width="3" height="2" fill="#a8764b" />
    <rect x="9" y="4" width="2" height="16" fill={c.ink} /><rect x="14" y="4" width="2" height="16" fill={c.ink} /><rect x="11" y="12" width="3" height="3" fill={c.red} />
  </>
}

function Search() {
  return <>
    <rect x="3" y="2" width="12" height="3" fill={c.ink} /><rect x="2" y="5" width="3" height="10" fill={c.ink} /><rect x="13" y="5" width="3" height="10" fill={c.ink} /><rect x="5" y="14" width="9" height="3" fill={c.ink} />
    <rect x="5" y="5" width="8" height="9" fill={c.violet} /><rect x="6" y="5" width="6" height="3" fill="#c8b8eb" /><rect x="6" y="8" width="2" height="4" fill="#a894d6" /><rect x="8" y="11" width="4" height="2" fill="#6d59a0" />
    <rect x="14" y="14" width="3" height="3" fill={c.ink} /><rect x="16" y="16" width="3" height="3" fill={c.ink} /><rect x="18" y="18" width="4" height="4" fill={c.ink} /><rect x="17" y="17" width="3" height="3" fill={c.gold} /><rect x="19" y="19" width="2" height="2" fill={c.woodDark} />
  </>
}

function Sun() {
  return <>
    <rect x="9" y="1" width="6" height="4" fill={c.ink} /><rect x="10" y="1" width="4" height="3" fill={c.gold} /><rect x="9" y="19" width="6" height="4" fill={c.ink} /><rect x="10" y="20" width="4" height="2" fill={c.gold} />
    <rect x="1" y="9" width="4" height="6" fill={c.ink} /><rect x="2" y="10" width="3" height="4" fill={c.gold} /><rect x="19" y="9" width="4" height="6" fill={c.ink} /><rect x="19" y="10" width="3" height="4" fill={c.gold} />
    <rect x="5" y="5" width="14" height="14" fill={c.ink} /><rect x="6" y="6" width="12" height="12" fill={c.gold} /><rect x="8" y="7" width="6" height="4" fill="#ffe69b" /><rect x="7" y="13" width="4" height="3" fill="#e5ab3d" />
  </>
}

function Moon() {
  return <>
    <rect x="9" y="1" width="6" height="2" fill={c.ink} /><rect x="7" y="3" width="8" height="2" fill={c.ink} /><rect x="5" y="5" width="9" height="2" fill={c.ink} /><rect x="3" y="7" width="9" height="10" fill={c.ink} /><rect x="5" y="17" width="9" height="2" fill={c.ink} /><rect x="7" y="19" width="8" height="2" fill={c.ink} /><rect x="9" y="21" width="6" height="2" fill={c.ink} />
    <rect x="9" y="3" width="4" height="2" fill={c.moon} /><rect x="7" y="5" width="5" height="2" fill={c.moon} /><rect x="5" y="7" width="5" height="10" fill={c.moon} /><rect x="7" y="17" width="5" height="2" fill={c.moon} /><rect x="9" y="19" width="4" height="2" fill={c.moon} />
    <rect x="6" y="7" width="3" height="3" fill={c.paper} /><rect x="5" y="11" width="2" height="3" fill="#b8a9da" /><rect x="7" y="15" width="2" height="2" fill="#b8a9da" />
  </>
}

function Sprout() {
  return <>
    <rect x="11" y="11" width="3" height="11" fill={c.ink} /><rect x="12" y="11" width="2" height="10" fill={c.leaf} /><rect x="3" y="6" width="9" height="7" fill={c.ink} /><rect x="4" y="6" width="7" height="6" fill={c.grass} /><rect x="6" y="7" width="4" height="3" fill="#9bce62" /><rect x="13" y="3" width="8" height="9" fill={c.ink} /><rect x="13" y="4" width="7" height="7" fill="#87ba59" /><rect x="14" y="5" width="4" height="3" fill="#a4d46b" />
  </>
}

const icons: Record<PixelIconName, () => ReactNode> = { brand: Brand, journal: Journal, scroll: Scroll, anvil: Anvil, nameplate: Nameplate, map: Map, search: Search, sun: Sun, moon: Moon, sprout: Sprout }

export function PixelIcon({ name, size = 24, className }: PixelIconProps) {
  const Shape = icons[name]
  return <svg className={`pixel-icon ${className ?? ''}`} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" shapeRendering="crispEdges"><Shape /></svg>
}
