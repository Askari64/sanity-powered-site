'use client'

import { NextStudio } from "next-sanity/studio";
import { sanityConfig } from "../../../../sanity.config";


function SanityStudio() {
  return (
    <NextStudio config={sanityConfig} />
  )
}

export default SanityStudio