const btnBorrar = document.querySelectorAll("#btnBorrar")

if (btnBorrar.length) {
    for (const btn of btnBorrar) {
        btn.addEventListener("click",event => {
            const resp = confirm("Esta opción no tiene marcha atrás. Cofirma?")
            if (!resp) event.preventDefault()
        } )
    }     
}