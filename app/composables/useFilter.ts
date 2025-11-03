import type { Item } from "~/model";

const useFilter = ()=>{

    const listFilter = useState<Item.NhomVatTu[]>("list-filter", ()=>{
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
        toggleItemInList
    };
}

export default useFilter;