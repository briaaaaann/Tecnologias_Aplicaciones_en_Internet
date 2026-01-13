document.getElementById('download-btn').addEventListener('click', () => {
    const element = document.getElementById('contract-container');
    const opt = {
        margin:       10,
        filename:     'ContratoDeAprendizaje.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2},
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
});
