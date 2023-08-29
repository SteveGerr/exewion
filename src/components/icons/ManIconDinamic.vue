<template>
  <svg v-if="!active" width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_610_31)">
    <circle cx="9.7065" cy="5.98922" r="4.66304" stroke="#3D2E64"/>
    <path d="M6.09719 13.5979L7.81679 11.1625C8.00417 10.8971 8.3088 10.7393 8.63368 10.7393H10.5677C10.8922 10.7393 11.1965 10.8967 11.3839 11.1615L13.115 13.6074C13.3079 13.8799 13.3521 14.2308 13.2326 14.5427L10.6151 21.3774C10.2903 22.2254 9.09448 22.2365 8.75412 21.3945L5.98697 14.5495C5.85951 14.2342 5.90103 13.8757 6.09719 13.5979Z" stroke="#3D2E64" stroke-linecap="round"/>
    </g>
    <line x1="0.5" y1="10.6523" x2="2.80435" y2="10.6523" stroke="#3D2E64" stroke-linecap="round"/>
    <line x1="16.1956" y1="10.6523" x2="18.4999" y2="10.6523" stroke="#3D2E64" stroke-linecap="round"/>
    <defs>
    <clipPath id="clip0_610_31">
    <rect width="11.5652" height="23.5435" fill="white" transform="translate(3.71729)"/>
    </clipPath>
    </defs>
  </svg>

  <svg v-if="active" width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_702_87)">
    <path d="M16.2639 6.24367C16.2639 8.90395 13.9193 11.126 10.943 11.126C7.96673 11.126 5.62207 8.90395 5.62207 6.24367C5.62207 3.58339 7.96673 1.36133 10.943 1.36133C13.9193 1.36133 16.2639 3.58339 16.2639 6.24367Z" stroke="#3D2E64"/>
    <path d="M6.87689 14.172L8.84979 11.5884C9.03897 11.3407 9.33285 11.1953 9.64457 11.1953H12.0039C12.3152 11.1953 12.6088 11.3403 12.798 11.5875L14.7841 14.1822C15.001 14.4655 15.0504 14.843 14.9139 15.1727L11.8425 22.5883C11.5051 23.4027 10.3555 23.4139 10.0023 22.6062L6.7554 15.1795C6.60984 14.8466 6.65635 14.4608 6.87689 14.172Z" stroke="#3D2E64" stroke-linecap="round"/>
    <g filter="url(#filter0_d_702_87)">
    <circle cx="11" cy="6" r="3" fill="#00B09B"/>
    </g>
    </g>
    <line x1="0.5" y1="11.126" x2="3.2254" y2="11.126" stroke="#3D2E64" stroke-linecap="round"/>
    <line x1="18.1958" y1="11.126" x2="20.9212" y2="11.126" stroke="#3D2E64" stroke-linecap="round"/>
    <defs>
    <filter id="filter0_d_702_87" x="3" y="-2" width="16" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="2.5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.690196 0 0 0 0 0.607843 0 0 0 1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_702_87"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_702_87" result="shape"/>
    </filter>
    <clipPath id="clip0_702_87">
    <rect width="13.0389" height="24.5435" fill="white" transform="translate(4.19092)"/>
    </clipPath>
    </defs>
  </svg>

</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>
