export default function Login() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('asd');
        // const resp = await window.electronAPI.getAllUsers();
        // console.log({resp});
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>asd</h1>
                <input type="text" placeholder="asd" />
                <button type="submit" >Login</button>
            </form>
        </>
    );
}