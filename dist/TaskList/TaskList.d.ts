/// <reference types="react" />
import './TaskList.css';
import { tskinterface } from "../Task/Task";
export interface task {
    tasks: tskinterface[];
    loading: boolean;
}
export default function TaskList({ loading, tasks }: task): JSX.Element;
