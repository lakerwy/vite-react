import {useStores} from "@/store";
import {Button} from 'antd';
import {observer} from 'mobx-react-lite';


const purchase = observer(() => {
    const {globalStore} = useStores()
    const {count, name, addCount} = globalStore;
    const handleClickAddCount = () => {
        addCount();
    };
    return (
        <div className={`bidding-w`}>
            <h2>这是采购信息</h2>
            <p> globalStore: {count}</p>
            <p> aboutStore: {name}</p>
            <div>
                <Button onClick={handleClickAddCount}>Mobx数据更新-addCount</Button>
            </div>
        </div>
    )
})

export default purchase
