import { create } from "zustand"

interface LangaugeStore {
    lan: string,
    select: (selectedLan: string) => void
}

const useLanguageStore = create<LangaugeStore>(set => ({
    lan: 'EN',
    select: (selectedLan: string) => set(() => ({lan: selectedLan}))
}))

export default useLanguageStore 