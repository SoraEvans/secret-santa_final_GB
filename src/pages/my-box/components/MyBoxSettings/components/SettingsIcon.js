import React from 'react'

// eslint-disable-next-line react/prop-types
const SettingsIcon = ({ active }) =>
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.0125 13.1021H29.7049C28.6382 13.1021 27.7435 12.1828 27.7435 11.0916C27.7435 10.5418 27.9758
          10.0435 28.3887 9.67404L29.2318 8.84926C30.0662 8.02447 30.0662 6.67561 29.2318 5.85082L27.3134 3.9521C26.9349
          3.57407 26.3757 3.35069 25.8079 3.35069C25.2402 3.35069 24.6896 3.57407 24.3025 3.9521L23.4938 4.7597C23.1067
          5.18927 22.5905 5.42124 22.0314 5.42124C20.9302 5.42124 20.0097 4.52773 20.0097 3.47097V2.15647C20.0097 0.996615
          19.0721 0 17.9021 0H15.2869C14.1169 0 13.1879 0.988024 13.1879 2.15647V3.46238C13.1879 4.51914 12.2674 5.41265
          11.1662 5.41265C10.6157 5.41265 10.1081 5.18068 9.73819 4.77688L8.90374 3.9521C8.52522 3.56548 7.96605 3.35069
          7.39827 3.35069C6.8305 3.35069 6.27993 3.57407 5.89281 3.9521L3.95722 5.84223C3.13136 6.66701 3.13136 8.01588
          3.95722 8.83208L4.76586 9.63968C5.196 10.0263 5.43687 10.5418 5.43687 11.0916C5.43687 12.1914 4.5422 13.1021
          3.47547 13.1021H2.16787C0.989304 13.1021 0 14.0213 0 15.1898V16.4957V17.8016C0 18.9615 0.989304 19.8894 2.16787
          19.8894H3.47547C4.5422 19.8894 5.43687 20.8086 5.43687 21.8998C5.43687 22.4496 5.196 22.9651 4.76586 23.3517L3.95722
          24.1507C3.13136 24.9755 3.13136 26.3244 3.95722 27.1406L5.87561 29.0479C6.25412 29.4345 6.81329 29.6493 7.38107
          29.6493C7.94884 29.6493 8.49941 29.4259 8.88653 29.0479L9.72099 28.2231C10.0823 27.8193 10.5985 27.5873 11.149
          27.5873C12.2502 27.5873 13.1706 28.4809 13.1706 29.5376V30.8435C13.1706 32.0034 14.0997 33 15.2783 33H17.8935C19.0635
          33 19.9925 32.012 19.9925 30.8435V29.5376C19.9925 28.4809 20.913 27.5873 22.0142 27.5873C22.5647 27.5873 23.0809
          27.8279 23.4766 28.2489L24.2853 29.0565C24.6724 29.4345 25.2229 29.6579 25.7907 29.6579C26.3585 29.6579 26.9091
          29.4345 27.2962 29.0565L29.2146 27.1492C30.0404 26.3244 30.0404 24.9755 29.2146 24.1507L28.3715 23.326C27.9586
          22.9565 27.7263 22.4496 27.7263 21.9084C27.7263 20.8086 28.621 19.8979 29.6877 19.8979H30.9953C32.1653 19.8979
          32.9997 18.9787 32.9997 17.8102V16.4957V15.1898C33.0169 14.0213 32.1825 13.1021 31.0125 13.1021ZM23.468
          16.4957C23.468 20.2846 20.3969 23.3689 16.5859 23.3689C12.7749 23.3689 9.70378 20.2846 9.70378 16.4957C9.70378
          12.7068 12.7749 9.62249 16.5859 9.62249C20.3969 9.62249 23.468 12.7068 23.468 16.4957Z" fill={active ? '#FF5539' : 'black'} />
  </svg>

export default SettingsIcon