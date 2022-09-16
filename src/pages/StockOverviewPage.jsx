import { AutoComplete } from '../components/AutoComplete'
import { StockList } from '../components/StockList'
import trading from "../images/img.jpg"
export const StockOverviewPage = () => {
    return (
        <div>
            <div className='text-center'><img style={{ height: "300px", width: "300px" }} src={trading} alt="" /></div>
            <AutoComplete />
            <StockList />
        </div>
    )
}