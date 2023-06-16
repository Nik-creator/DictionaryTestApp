import { PartOfSpeechCode } from "@/store/words/types"

type QueryStringDict = { [key: string]: unknown }

enum DataLoadingStates {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR'
}

type PartsOfSpeech = { [K in PartOfSpeechCode]: string }

export type { QueryStringDict, PartsOfSpeech }
export { DataLoadingStates }