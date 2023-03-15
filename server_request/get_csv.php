<?php



require_once "csv_maker.php";


$csv = new csv_maker();
fileDownload(__DIR__ . DIRECTORY_SEPARATOR . 'result.csv');

function fileDownload($pathFileName){
	if(file_exists($pathFileName) && is_file($pathFileName)){	
			// header("Content-type: multipart/form-data");
			// header("Content-length: ".filesize($pathFileName));
			// header('Content-disposition: inline; filename="result.csv"');
			// header('Content-transfer-encoding: binary');
			
		header('Content-type: application/octet-stream');
		header("Content-Type: ".mime_content_type($pathFileName));
		header("Content-Disposition: attachment; filename=Результаты.csv");
		while (ob_get_level()) {
			ob_end_clean();
		}
		readfile($pathFileName);
		}	
}
