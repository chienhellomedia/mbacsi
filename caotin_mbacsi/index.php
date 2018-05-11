<?php 

date_default_timezone_set('Asia/Ho_Chi_Minh');

require "config.php"; 
require "simple_html_dom.php"; 



function download_image($image_url, $image_file) {
		//echo $image_url."</br>"; 
		//echo $image_file; die;
        $fp = fopen($image_file, 'w+');              // open file handle

        $ch = curl_init($image_url);
        // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // enable if you want
        curl_setopt($ch, CURLOPT_FILE, $fp);          // output to file
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 1000);      // some large value to allow curl to run for a long time
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
        curl_setopt($ch, CURLOPT_VERBOSE, true);   // Enable this line to see debug prints
		//curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $User_Agent = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.43 Safari/537.31';

        $request_headers = array();
        $request_headers[] = 'User-Agent: '. $User_Agent;
        $request_headers[] = 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';

        curl_setopt($ch, CURLOPT_HTTPHEADER, $request_headers);

        curl_exec($ch);

        curl_close($ch);                              // closing curl handle
        fclose($fp);                                  // closing file handle

    }

    function makeAlias($str, $lowerCase = true) {
    	$search = array(
    		'#(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)#',
    		'#(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)#',
    		'#(ì|í|ị|ỉ|ĩ)#',
    		'#(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)#',
    		'#(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)#',
    		'#(ỳ|ý|ỵ|ỷ|ỹ)#',
    		'#(đ)#',
    		'#(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)#',
    		'#(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)#',
    		'#(Ì|Í|Ị|Ỉ|Ĩ)#',
    		'#(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)#',
    		'#(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)#',
    		'#(Ỳ|Ý|Ỵ|Ỷ|Ỹ)#',
    		'#(Đ)#',
    		"/[^a-zA-Z0-9\-\_]/",
    	);
    	$replace = array(
    		'a',
    		'e',
    		'i',
    		'o',
    		'u',
    		'y',
    		'd',
    		'A',
    		'E',
    		'I',
    		'O',
    		'U',
    		'Y',
    		'D',
    		'-',
    	);
    	$str = preg_replace($search, $replace, $str);
    	$str = preg_replace('/(-)+/', '-', $str);
    	$str = preg_replace('/^-+|-+$/', '', $str);
    	if ($lowerCase)
    		$str = strtolower($str);
    	return $str;
    }
    function getBaseUrl() 
    {
    // output: /myproject/index.php
    	$currentPath = $_SERVER['PHP_SELF']; 

    // output: Array ( [dirname] => /myproject [basename] => index.php [extension] => php [filename] => index ) 
    	$pathInfo = pathinfo($currentPath); 

    // output: localhost
    	$hostName = $_SERVER['HTTP_HOST']; 

    // output: http://
    	$protocol = strtolower(substr($_SERVER["SERVER_PROTOCOL"],0,5))=='https://'?'https://':'http://';

    // return: http://localhost/myproject/
    	return $protocol.$hostName.$pathInfo['dirname']."/";
    }

	// for($i=30,$j=10;$i > 0; $i -= $j) {   



    $html = file_get_contents("http://mbacsi.net/chinh-phu-yeu-cau-lam-ro-thong-tin-keo-mut-can-sa-ban-tran-lan-tren-mang");

  // echo($html); die;

    $content = html_entity_decode($html);
    $html1 = str_get_html($content);

    $tins = $html1->find('div.listCategories div.item');
    $i = 2655;
    foreach ($tins as $key => $value) {
    	
       $a = $value->find("h3 a",0);

       $title = $a->attr["title"];

       $title =  html_entity_decode($title, ENT_QUOTES);

       $slug = $a->attr["title"];

       $slug = makeAlias($slug);

       $href = $a->href;
        // echo $href; echo '<br>'; die;

       $img = $value->find("div.img a img",0)->src;
       $img1 = basename($img);
       $img1 = makeAlias(str_replace('.jpg', '', $img1));
       $image = 'wp-content/uploads/images/'.$img1.'.jpg';

       file_put_contents($image, file_get_contents($img));

       $image2 = 'images/'.$img1.'.jpg';
        // echo $image2; echo '<br>'; die;


        // $desc = $value->find('div[class=wow fadeIn]', 0)->plaintext;
        // $desc = html_entity_decode($desc, ENT_QUOTES);

       $html_detail = str_get_html(file_get_contents('http://mbacsi.vn'.$href));
        // echo $html_detail; die;
       $time = str_get_html($html_detail->find('div.time',0)->plaintext);
       $time = html_entity_decode($time, ENT_QUOTES);
       $time = trim($time);
        // echo $time;
       $time = date('Y-m-d H:i', strtotime( $time )); 

        // $content = str_get_html($html_detail->find('div.content video',0)->src);
       $content = str_get_html($html_detail->find('div.content',0));
       $content = html_entity_decode($content, ENT_QUOTES);



//         $content1 = basename($content);
//         $content1 = str_replace('.mp4', '',  $content1);
//         $content1 = makeAlias($content1);
//         $content1 = $content1.'.mp4';
//         $content1 = 'wp-content/uploads/video/'.$content1;
// // echo $content1; die;
//         file_put_contents($content1, file_get_contents($content));

        // $content2 = getBaseUrl().$content1;

     //    $content2 = '<video src="'.$content1.'" autobuffer autoloop loop controls></video>';
     //    $content2 = html_entity_decode($content1, ENT_QUOTES);
       $post_excerpt = str_get_html($html_detail->find('div.summary',0)->plaintext);
       $post_excerpt = html_entity_decode($post_excerpt, ENT_QUOTES);

// echo $summary; die;
       $insert = 
       "INSERT INTO
       `wp_posts`(`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`)
       VALUES ('$i',1,'$time','$time','$content','$title','$post_excerpt','publish','open','  
       open','','$slug','','','','','',0,'',0,'post','',0)";

       mysqli_query($con, $insert);
// echo $key;
        // $i = $key + 3;
       $j = $i + 116;
       $insert1 = 
       "INSERT INTO
       `wp_posts`(`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`)
       VALUES ('$j',1,'$time','$time','','$img1','','inherit','open','  
       open','','$img1','','','','','','$i','$image',0,'attachment','image/jpeg',0)";
        //  // thiếu 2 trường post_type có value attachment và post_mime_type có value image/jpeg
       mysqli_query($con, $insert1);

       $insert2 = "INSERT INTO `wp_postmeta`(`meta_id`, `post_id`, `meta_key`, `meta_value`)  
       VALUES (null,'$i' ,'summary','$post_excerpt')";
       mysqli_query($con, $insert2);

       $insert3 = "
       INSERT INTO
       `wp_postmeta`(`meta_id`, `post_id`, `meta_key`, `meta_value`) 
       VALUES (null,'$j','_wp_attached_file', '$image2')";
       mysqli_query($con, $insert3);

       $insert4 = "INSERT INTO `wp_postmeta`(`meta_id`, `post_id`, `meta_key`, `meta_value`)  
       VALUES (null,'$i' ,'_thumbnail_id','$j')";
       mysqli_query($con, $insert4);

       $insert5 = "
       INSERT INTO
       `wp_postmeta`(`meta_id`, `post_id`, `meta_key`, `meta_value`) 
       VALUES (null,'$i','_wp_attached_metadata', '')";
       mysqli_query($con, $insert5);

       $insert6 = "
       INSERT INTO `wp_term_relationships`(`object_id`, `term_taxonomy_id`, `term_order`) VALUES ('$i',13,0)";
       mysqli_query($con, $insert6);



       echo $key;
       echo '<br>';
       $i = $i+1; 
     // }

    // echo $key;

   }


   ?>