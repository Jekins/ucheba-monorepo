export type TRecordOptional<K extends keyof any, T> = {
  [P in K]?: T
}
