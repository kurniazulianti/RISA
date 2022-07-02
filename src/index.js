import ReactDOM from "react-dom/client";

// ReactDOM.createRoot(document.body).render(<h1>Hello World!!</h1>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<button>Login</button>);

// let nama = "Risa";

// function getNama(){
//     return "Risa";
// }



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<button>Login {getNama()}</button>);

function Welcome(a){
return <h1>Selamat Datang {a.name} yang berumur {a.umur} tempat tinggal di {a.alamat}!!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Welcome name="Aris" umur = {20} alamat="Pangandaran"/>
        <Welcome name="Risa" umur = {21} alamat="Sumatra Utara"/>
        <Welcome name="Sari" umur = {22} alamat="Ciamis"/>

    </>
);