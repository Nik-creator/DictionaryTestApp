import React, { ComponentType } from 'react'

type OwnProps = {
  skeletonComponent: ComponentType
  length?: number
}

const useGetSkeletons = ({ skeletonComponent: SkeletonComponent, length = 1 }: OwnProps) => {
  const getSkeletons = () =>
    new Array(length)
      .fill(0)
      .map((item, index) => (
        <SkeletonComponent key={`${item }_${index}`} />
      ))

   return getSkeletons
}

export { useGetSkeletons }