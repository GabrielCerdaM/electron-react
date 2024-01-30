import { DefaultTable } from "../Components/DefaultTable";
import FormContract from "./form/FormContract.js";

export default function Layout({ children }) {
    const payload = [
        { "id": 1, "name": "2", "email": "2" },
        { "id": 2, "name": "2", "email": "2" },
        { "id": 3, "name": "2", "email": "2" },
        { "id": 4, "name": "2", "email": "2" },
        { "id": 5, "name": "2", "email": "2" },
    ];
    return (<>
        <FormContract/>
        <section className="w-10/12 m-auto">
            <DefaultTable data={payload}></DefaultTable>
        </section>
    </>)
}