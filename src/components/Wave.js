import React from "react"
import { WaveWrapper, Path, PathPrimary } from "../style"

export const Wave = () => {
  return (
    <WaveWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 10 1400 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(0,0,0,1)" />
            <stop offset="70%" stop-color="rgba(0,0,0,0.7147233893557423)" />
            <stop offset="100%" stop-color="rgba(0,0,0,0.45702030812324934)" />
          </linearGradient>
        </defs>
        <Path
          fill="#f7b801"
          fill-opacity="0.5"
          d="M0,122L80,90C160,58,320,30,480,70.3C640,107,800,165,960,175C1120,190,1250,155,1300,149L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></Path>
        <Path
          fill="#73a942"
          fill-opacity="0.5"
          d="M0,122L80,90C160,58,320,30,480,70.3C640,107,800,165,960,175C1120,190,1250,155,1300,149L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></Path>
        <Path
          fill="#fe5f55"
          fill-opacity="0.5"
          d="M0,122L80,90C160,58,320,30,480,70.3C640,107,800,165,960,175C1120,190,1250,155,1300,149L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></Path>
        <PathPrimary
          fill="url(#gradient)"
          d="M0,122L80,90C160,58,320,30,480,70.3C640,107,800,165,960,175C1120,190,1250,155,1300,149L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></PathPrimary>
      </svg>
    </WaveWrapper>
  )
}
