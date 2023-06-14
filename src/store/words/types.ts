import { SearchRequest } from "@/services/types";
import { DataLoadingStates } from "@/types";
import { EntityState } from "@reduxjs/toolkit";
import { PayloadAction } from "../types";

type MeaningState = { [id: string]: Omit<Meanings, 'id'> }

type WordsState = {
  group: EntityState<GroupResponse>,
  meaningsDict: MeaningState
  status: DataLoadingStates
};

type ChangePositionProps = {
  dragIndex: number
  hoverIndex: number
}

type PayloadChangeMeaningsPosition = PayloadAction<{
  groupId: number
} & ChangePositionProps>

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

export type {
  WordsState,
  WordsActionResponse,
  WordsActionRequest,
  Meanings,
  ChangePositionProps,
  PayloadChangeMeaningsPosition,
  GroupResponse,
  Word
};