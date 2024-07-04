export const toPaginatedItems = <TItem, TItemKey extends keyof TItem>({
  itemsPlusOne,
  limit,
  itemCursorKey,
}: {
  itemsPlusOne: TItem[]
  limit: number
  itemCursorKey: TItemKey
}): {
  items: TItem[]
  hasNextPage: boolean
  nextCursor?: TItem[TItemKey]
} => {
  const nextItem = itemsPlusOne.at(limit)
  const items = itemsPlusOne.slice(0, limit)
  const hasNextPage = !!nextItem
  const nextCursor = nextItem?.[itemCursorKey]
  return {
    items,
    hasNextPage,
    nextCursor,
  }
}
