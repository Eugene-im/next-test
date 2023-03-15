import { ItemBlock } from "../ItemBlock"
import styles from "./datablock.module.css"

export const DataBlock = ()=>{
    return (
        <ItemBlock customStyles={styles.blockWidthHeight}>
            data
            {/* https://react-chartjs-2.js.org/examples/vertical-bar-chart */}
        </ItemBlock>
    )
}