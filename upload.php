<?php

    // Pang debug para makita kung nasa 2d array ba un si nend na image
    // print_r($_FILES);


    if(isset($_FILES) && is_array($_FILES) && count($_FILES)){

        //  Para ma access ung name ng file - paghihiwahiwalayin ung mga nsa 2d array
        $temp = explode(".", $_FILES['myfile']['name']);
        $newfilename = $temp[0].".png";
        move_uploaded_file($_FILES['myfile']['tmp_name'], "img/".$newfilename);

        echo "img/".$newfilename;

    } else{
        echo "default.png";
    }

?>