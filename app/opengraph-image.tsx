import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ alignItems: 'stretch', background: '#fdf8ed', color: '#25242d', display: 'flex', height: '100%', width: '100%' }}>
        <div style={{ background: '#f2ecd9', borderRight: '8px solid #e6dcc2', display: 'flex', flexDirection: 'column', padding: '74px 58px', width: 330 }}>
          <div style={{ alignItems: 'center', display: 'flex', fontSize: 30, fontWeight: 700, gap: 18 }}>
            <div style={{ background: '#8f573d', border: '6px solid #25242d', borderTop: '12px solid #78ad52', height: 40, width: 54 }} />
            Leo's Notes
          </div>
          <div style={{ background: '#e6dcc2', height: 4, marginTop: 42, width: '100%' }} />
          <div style={{ fontSize: 21, lineHeight: 1.45, marginTop: 40 }}>Research notes on language models, agents, and systems.</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '86px 70px', width: 870 }}>
          <div style={{ color: '#ba2b6c', fontFamily: 'monospace', fontSize: 24, fontWeight: 700, textTransform: 'uppercase' }}>Leo / 黎耀聪</div>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.06, marginTop: 24, width: 700 }}>Ideas worth keeping.</div>
          <div style={{ borderTop: '5px solid #e6dcc2', fontSize: 24, lineHeight: 1.45, marginTop: 42, paddingTop: 32, width: 700 }}>Large language models, agents, and the craft of building systems.</div>
        </div>
      </div>
    ),
    size,
  )
}
