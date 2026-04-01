import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Thompson N Daiminah Jr - Web & Mobile App Developer & Electrician';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#9acd32',
              margin: 0,
            }}
          >
            Thompson N Daiminah Jr
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Web & Mobile App Developer & Electrician
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#a0a0a0',
              margin: 0,
            }}
          >
            Creating Beautiful Digital Experiences
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
