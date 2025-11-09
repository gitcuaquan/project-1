import type { Item } from "~/model";

type UseFilterReturn = {
    listFilter: ReturnType<typeof useState<Item.NhomVatTu[]>>,
    toggleItemInList: (item: Item.NhomVatTu) => void,
}

let _instance: UseFilterReturn | null = null;
const useFilter = (): UseFilterReturn => {
    if (_instance) return _instance;
    const listFilter = useState<Item.NhomVatTu[]>("list-filter", () => {
        return []
    });



    const toggleItemInList = (item: Item.NhomVatTu) => {
        const index = listFilter.value.findIndex(i => i.ma_nh === item.ma_nh && i.loai_nh === item.loai_nh);
        if (index !== -1) {
            listFilter.value.splice(index, 1);
        } else {
            listFilter.value.push(item);
        }
    };

    return {
        listFilter,
        toggleItemInList,
    };
}

export default useFilter;