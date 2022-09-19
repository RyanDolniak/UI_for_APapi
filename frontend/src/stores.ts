import create from "zustand";

function stores(set: any) {
  return {
    jwt: null,
    goto: null,
    setJwt: (jwt?: string) => set(() => ({ jwt })),
    setGoto: (goto?: string) => set(() => ({ goto })),
  };
}

export type IStores = ReturnType<typeof stores>;

const useStore = create<IStores>(stores);

export default useStore;
