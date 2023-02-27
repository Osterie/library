//---------------------------FILES-------------------------

async function load(file_name) {
    return await fetch(file_name).then((response) => response.text() );
}