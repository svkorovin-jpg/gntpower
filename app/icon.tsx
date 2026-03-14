import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

const sunSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 61 61" fill="none">
  <rect y="29.3213" width="61" height="2.35749" fill="white"/>
  <rect x="31.6787" width="61" height="2.35749" transform="rotate(90 31.6787 0)" fill="white"/>
  <rect x="29.0734" y="20.6914" width="40.6791" height="2.32133" transform="rotate(75 29.0734 20.6914)" fill="white"/>
  <rect x="16.2709" y="3.49707" width="61" height="2.35749" transform="rotate(60 16.2709 3.49707)" fill="white"/>
  <rect x="9.76672" y="8.09961" width="61" height="2.35749" transform="rotate(45 9.76672 8.09961)" fill="white"/>
  <rect x="4.67554" y="14.229" width="61" height="2.35749" transform="rotate(30 4.67554 14.229)" fill="white"/>
  <rect x="1.34436" y="21.4673" width="61" height="2.35749" transform="rotate(15 1.34436 21.4673)" fill="white"/>
  <rect x="0.734131" y="37.2554" width="61" height="2.35749" transform="rotate(-15 0.734131 37.2554)" fill="white"/>
  <rect x="50.9589" y="17.3271" width="6.19563" height="2.35749" transform="rotate(-30 50.9589 17.3271)" fill="white"/>
  <rect x="3.49683" y="44.729" width="40.372" height="2.35749" transform="rotate(-30 3.49683 44.729)" fill="white"/>
  <rect x="8.09973" y="51.2334" width="61" height="2.35749" transform="rotate(-45 8.09973 51.2334)" fill="white"/>
  <rect x="38.7915" y="13.7812" width="11.8754" height="2.35749" transform="rotate(-60 38.7915 13.7812)" fill="white"/>
  <rect x="14.2291" y="56.3242" width="40.372" height="2.35749" transform="rotate(-60 14.2291 56.3242)" fill="white"/>
  <rect x="21.4674" y="59.6558" width="61" height="2.35749" transform="rotate(-75 21.4674 59.6558)" fill="white"/>
</svg>`

const svgDataUrl = `data:image/svg+xml;base64,${Buffer.from(sunSvg).toString("base64")}`

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#308F16",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={svgDataUrl} width={56} height={56} alt="" />
      </div>
    ),
    { ...size }
  )
}
