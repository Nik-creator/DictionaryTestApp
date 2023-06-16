import { MeaningsRequest, SearchRequest } from "@/services/types";
import { DataLoadingStates } from "@/types";
import { EntityState } from "@reduxjs/toolkit";
import { PayloadAction } from "../types";

type MeaningState = {
  [id: string]: Omit<Meanings, 'id'> & {
    isFavorite: boolean;
  }
}

type WordsState = {
  group: EntityState<GroupResponse>,
  meaningsDict: MeaningState
  groupLoadingStatus: DataLoadingStates
  meaningsFavoritesLoadingStatus: DataLoadingStates
  favorites: string[]
  meanings: EntityState<Meanings>
};

type ChangePositionProps = {
  dragIndex: number
  hoverIndex: number
}

type PayloadChangeMeaningsPosition = PayloadAction<{
  groupId: number
} & ChangePositionProps>

type PayloadChangeFavoritesPosition = PayloadAction<ChangePositionProps>

type PayloadFavorite = PayloadAction<string>

type PayloadSyncFavorite = PayloadAction<string[]>

type PartOfSpeechCode =
  | 'n' //noun
  | 'v' // verb
  | 'j' // adjective
  | 'r' // adverb
  | 'prp' // preposition
  | 'prn' // pronoun
  | 'crd' // cardinal number
  | 'cjc' // conjunction
  | 'exc' // interjection
  | 'det' // article
  | 'abb' // abbreviation
  | 'x' // particle
  | 'ord' // ordinal number
  | 'md' // modal verb
  | 'ph' // phrase
  | 'phi' // idiom

type Properties = {
  updatedAt: string
  mnemonics: string
}

type Translation = {
  text: string
  note: string
}

type Images = {
  url: string
}

type Definition = {
  text: string
  soundUrl: string
}

type Example = {
  text: string
  soundUr: string
}

type MeaningWithSimilarTranslation = {
  meaningId: number
  frequencyPercent: string
  partOfSpeechAbbreviation: string
  translation: Translation
}

type AlternativeTranslation = {
  text: string
  translation: Translation
}

type Meanings = {
  id: string
  wordId: number
  difficultyLevel: number
  partOfSpeechCode: PartOfSpeechCode
  prefix: string
  text: string
  soundUrl: string
  transcription: string
  properties: Properties
  translation: Translation
  images: Images[]
  definition: Definition
  examples: Example[]
  meaningsWithSimilarTranslation: MeaningWithSimilarTranslation[]
  alternativeTranslations: AlternativeTranslation[]
}

type Word = {
  id: number
  text: string
  meanings: Meanings[]
}

type GroupResponse = {
  id: number
  entity: {
    text: string
    meaningsIds: string[]
  }
}

type WordsActionResponse = {
  group: GroupResponse[]
  meaningsDict: MeaningState
}

type WordsActionRequest = SearchRequest

type MeaningsActionRequest = MeaningsRequest

type MeaningsActionResponse = (Meanings & {
  isFavorite: boolean
})[]

export type {
  WordsState,
  WordsActionResponse,
  WordsActionRequest,
  MeaningsActionResponse,
  MeaningsActionRequest,
  Meanings,
  PartOfSpeechCode,
  ChangePositionProps,
  PayloadChangeMeaningsPosition,
  PayloadChangeFavoritesPosition,
  PayloadFavorite,
  PayloadSyncFavorite,
  GroupResponse,
  Word
};