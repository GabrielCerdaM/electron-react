import { useState } from "react";

const paintSpan = async (setConnection) => {
    try {
        const resp = await window.electronAPI.handleChannel();
        console.log({ resp });
        // const resp = await window.electronAPI.test()
        // console.log({resp});
        // setConnection(resp);
    } catch (error) {
        console.log({ error });
    }
}

const getUsers = async () => {
    try {
        const resp = await window.electronAPI.handleChannel();
        console.log({ resp });
    } catch (error) {
        console.log({ error });
    }
}

function Main() {
    const [connection, setConnection] = useState(false);

    return (
        <div className="grid">
            <button
                onClick={() => {
                    paintSpan(setConnection)
                }}
            >
                <p>{connection ? 'Y' : 'N'}</p>
                Test Connection
            </button>
            <button
                onClick={() => {
                    getUsers();
                }}
            >
                Users
            </button>
            {/* <span className={ connection ? "p-1 m-auto bg-red" : "p-1 m-auto bg-green"}></span> */}
            <span className="p-1 m-auto bg-red"></span>
            <form>
                <h1 className="text-3xl font-bold underline">Definicion de contrato</h1>
                <div className="row p-5">
                    <h3>Informacion del Cliente</h3>
                    <label htmlFor="rut">Rut</label>
                    <input type="text" name="rut" id="rut" />

                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="email">phone</label>
                    <input type="text" name="phone" id="phone" />

                    <label htmlFor="email">email</label>
                    <input type="text" name="email" id="email" />

                    <label htmlFor="address">address</label>
                    <input type="text" name="address" id="address" />
                </div>
                {/* No, no se angular */}
                <div className="row p-5">
                    <h3>Informacion del fallecido</h3>
                    <label htmlFor="rut_deceased">Rut</label>
                    <input type="text" name="rut_deceased" id="rut_deceased" />

                    <label htmlFor="name_deceased">name</label>
                    <input type="text" name="name_deceased" id="name_deceased" />

                    <label htmlFor="dateDeceased">dateDeceased</label>
                    <input type="text" name="dateDeceased" id="dateDeceased" />

                    <label htmlFor="email_deceased">phone</label>
                    <input type="text" name="phone_deceased" id="phone_deceased" />

                    <label htmlFor="email_deceased">email</label>
                    <input type="text" name="email_deceased" id="email_deceased" />

                    <label htmlFor="address_deceased">address</label>
                    <input type="text" name="address_deceased" id="address_deceased" />
                </div>
                <div className="row p-5">
                    <h3>
                        Informacion del servicio
                    </h3>
                    <label htmlFor="wake_address">name</label>
                    <input type="text" name="wake_address" id="wake_address" />

                    <label htmlFor="urn">urn</label>
                    <input type="text" name="urn" id="urn" />

                    <label htmlFor="color">color</label>
                    <input type="text" name="color" id="color" />

                    <label htmlFor="cementery">cementerio</label>
                    <input type="text" name="cementery" id="cementery" />

                    <label>Carroza</label>
                    <input type="text" />
                    <label>Vehiculo de acompañamiento</label>
                    <input type="text" />
                    <label>anuncios</label>
                    <input type="text" />
                    <label>Valor</label>
                    <input type="text" />
                    <label>Tipo beneficio</label>
                    <input type="text" />
                    <label>Abono Beneficio</label>
                    <input type="text" />
                </div>
            </form>
        </div>
    );
}

export default Main;
