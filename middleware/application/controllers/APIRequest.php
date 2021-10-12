<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class APIRequest extends CI_Controller {

	function __Construct(){
        parent ::__construct();
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: *");
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: *");
        header('Content-Type: application/json');       
        $this->load->library('JWT');
    }

	public function authentification(){
		$result = array();
		//$reqdata = json_decode( file_get_contents( 'php://input' ), true );
		$reqdata = $this->input->post();
		if($reqdata){ //ada isinya 
			//decription
			$key = "PWL123!@#$";
            $data_arr = (array) $this->jwt->decode($reqdata['token'],$key);
            //pengecekan kedalam database
            
			$result = $data_arr;
		}

		echo json_encode($result);
	}
}
