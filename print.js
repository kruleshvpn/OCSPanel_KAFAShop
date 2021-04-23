$("#btnPrint").live("click", function () {
var divContents = $("#dvContainer").html();
var printWindow = window.open('', '', 'height=1080,width=1080');
printWindow.document.write('<html><head><title>PDF Printing Sample</title>');
printWindow.document.write('</head><body>');
printWindow.document.write(divContents);
printWindow.document.write('</body></html>');
printWindow.document.write('<center>Copyright Saifullah Nasir</center>');
printWindow.document.close();
printWindow.print();
});
