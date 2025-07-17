import { defineStore } from 'pinia'

interface ServisData {
  kod: string
  data: any
  timestamp: number
}

export const useServisStore = defineStore('servis', {
  state: () => ({
    servisData: new Map<string, ServisData>()
  }),

  actions: {
    setData(kod: string, data: any) {
      this.servisData.set(kod, {
        kod,
        data,
        timestamp: Date.now()
      })
    },

    getData(kod: string) {
      const servisData = this.servisData.get(kod)
      
      // 5 dakika cache süresi
      if (servisData && (Date.now() - servisData.timestamp) < 5 * 60 * 1000) {
        return servisData.data
      }
      
      // Cache süresi dolmuş, sil
      if (servisData) {
        this.servisData.delete(kod)
      }
      
      return null
    },

    clearData(kod?: string) {
      if (kod) {
        this.servisData.delete(kod)
      } else {
        this.servisData.clear()
      }
    }
  }
})