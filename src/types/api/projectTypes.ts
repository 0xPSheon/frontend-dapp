import { BaseApiResponseType } from 'src/types/api/baseApiTypes'
import { PhaseType } from 'src/types/mint/phaseTypes'

export type ProjectType = {
  id: number
  displayName: string
  useChainName: string
  description?: string
  contractAddress?: string
  phases: PhaseType[]
  contractABI: string
  createdAt: string
  updatedAt: string
}

// ** Find One
export type FindOneProjectParamsType = {
  populate?: string[]
}
export type FindOneProjectTransformResponseType = BaseApiResponseType<{
  id: number
  attributes: Omit<ProjectType, 'id'>
}>
export type FindOneProjectResponseType = ProjectType
