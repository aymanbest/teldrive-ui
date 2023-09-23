import { Dispatch, SetStateAction } from "react"
import { Media } from "@/api/schemas/file.schema"
import { AudioMetadata } from "@/ui/types"
import { FileData, MapFileActionsToData, SortOrder } from "@bhunter179/chonky"

import { ActionUnion, CustomActions } from "@/ui/hooks/useFileAction"

export type FileResponse = { results: File[]; nextPageToken?: string }

export type File = {
  name: string
  type: string
  mimeType: string
  path?: string
  size: number
  depth: number
  createdAt: string
  updatedAt: string
  userId: string
  parentId: string
  id: string
  starred: boolean
}

export type ModalState = {
  open: boolean
  operation: string
  type: string
  file: FileData
  selectedFiles: string[]
  name: string
  successful: boolean
}

export type Params = {
  nextPageToken: string
  perPage: number
  order: string
  path: string
  search: string
  sort: string
  starred: boolean
  type: string
  op: string
  view: string
}

export type FilePayload = {
  id?: string
  payload?: Record<string, any>
}

export type UploadPart = {
  id: string
  partId: number
  partNo: number
  channelId: number
}

export type AuthMessage = {
  type: string
  payload: Record<string, string | number | boolean>
  message: string
}

export type Message = {
  status: boolean
  message: string
  error?: string
}

export type Settings = {
  apiUrl: string
  accessToken: string
  splitFileSize: number
  uploadConcurrency: number
  channel?: Channel
  bots?: string
}

export type Session = {
  name: string
  userName: string
  isPremium: boolean
  hash: string
  expires: string
}

export type QueryParams = {
  type: string
  path: string
}

export type AccountStats = {
  totalSize: number
  totalFiles: number
  channelId: number
  channelName: string
  [key: string]: number
}
export type Channel = {
  channelName: string
  channelId: number
}

export type Tags = {
  [key: string]: any
}

export type AudioMetadata = {
  artist: string
  title: sting
  cover: string
}

export type SortField = "name" | "size" | "updatedAt"

export type SortState = {
  [key: string]: { sort: SortField; order: SortOrder }
}

export type SetValue<T> = Dispatch<SetStateAction<T>>
