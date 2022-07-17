import { FlatList } from "react-native";
import ListItem from "./ListItem";

const List = ({
    list,
    onDeleteItem
}: { list: Array<string>, onDeleteItem: (itemId: number) => void }) => {
    return (
        <FlatList
            data={list}
            renderItem={({item, index}) => <ListItem item={({value: item, id: index})} onDeleteItem={onDeleteItem}></ListItem>}
            keyExtractor={(_, index) => index.toString()}
        ></FlatList>
    );
}

export default List;
