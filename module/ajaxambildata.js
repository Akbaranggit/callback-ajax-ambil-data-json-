function ajaxAmbilData(url, iniCallback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {    //untuk mengambil data
        if (xhr.status === 200) {
            return iniCallback(JSON.parse(xhr.response));
        };
        // kalo xhr.response   = hasil data yang dipanggil berbentuk string
        // JSON.parse(xhr.response) = untuk hasil data yang dipanggil brbntuk object
      };
    xhr.send();
}
export default ajaxAmbilData;