type QueryStringDict = { [key: string]: unknown }

enum DataLoadingStates {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR'
}

export type { QueryStringDict }
export { DataLoadingStates }