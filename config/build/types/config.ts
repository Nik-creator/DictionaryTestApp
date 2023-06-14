type BuildMode = 'production' | 'development';

type BuildPaths = {
  entry: string
  build: string
  html: string
  src: string
  env: string
}

type BuildEnv = {
  port: number
  mode: BuildMode
}

type BuildOptions = {
  mode: BuildMode
  paths: BuildPaths
  port: number
  isDev: boolean
}

export { BuildOptions, BuildEnv, BuildPaths, BuildMode }