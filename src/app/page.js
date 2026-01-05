'use client'

import Hero from '@/components/hero/Hero_landing'
import PopularKits from '@/components/popularKits/PopularKits'
import CategorySection from '@/components/categorySection/CategorySection'
import FeaturedEquipmentSection from '@/components/featuredEquipment/FeaturedEquipment'

export default function Home () {
  return (
    <>
      <Hero />
      <PopularKits />
      <FeaturedEquipmentSection />
      <CategorySection />
    </>
  )
}
