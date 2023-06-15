
class LocalStorage {
  private keyName = 'favorite'

  private splitFavoriteString(favorite: string = ''): string[] {
    if (favorite) {
      return favorite.split(',')
    }
    return []
  }

  private joinFavorites(favoriteArr: string[]): string {
    return favoriteArr.join(',')
  }

  getFavoritesIds(): string[] {
    const favoritesStrIds = localStorage.getItem(this.keyName) || ''
    return this.splitFavoriteString(favoritesStrIds)
  }

  setFavoriteId(id: string) {
    const allIds = this.getFavoritesIds()

    if (id) {
      allIds.push(id)
    }

    const uniqIds = [...new Set(allIds)]

    localStorage.setItem(this.keyName, this.joinFavorites(uniqIds))
  }

  deleteFavoriteId(id: string) {
    const allIds = this.getFavoritesIds()

    const filteredIds = allIds.filter((localStorageId) => Number(localStorageId) !== Number(id))

    localStorage.setItem(this.keyName, this.joinFavorites(filteredIds))
  }

  removeAll() {
    localStorage.removeItem(this.keyName)
  }
}

const localStorageService = new LocalStorage()

export { localStorageService }