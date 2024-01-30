export function DefaultTable({ data }) {
    return (
        <section className="mt-5">
            <table className="w-10/12 m-auto table-fixed text-center">
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data ?
                        data.map((item,index) => { 
                            return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                {/* Add more cells as needed */}
                            </tr>
                        )}) : <tr></tr>}
                </tbody>
            </table>
        </section>
    );
};

