export interface InitialState {
  initialized: boolean
  settled: boolean
  contractAddress: string
  contractABI: string
  timeline: PhaseType[]
  currentPhaseStage: number
}

export interface SetProjectDetailsPayload {
  contractAddress: string
  contractABI: string
  timeline: PhaseType[]
}

export interface PhaseType {
  phaseId: string
  phaseStage: number
  displayName: string
  description: string
  priceInEth: number
  maxMintPerAddress: number
  startedAt: string
  finishedAt: string
  totalSupply: number
  revealed: boolean
}
