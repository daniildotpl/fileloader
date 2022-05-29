function mark_deleted_image(id) {
    console.log('id: '+id)
    let input = document.getElementById(id)
    input.value = "";
    document.getElementById('prev_'+id).style.backgroundImage = 'url(images/photo.png)';
    document.getElementById('dele_'+id).style.visibility = 'collapse';
    document.getElementById('uplo_'+id).style.visibility = 'collapse';
    document.querySelector('.first').style.opacity = '1';

}


function show_loaded_image(id){
    console.log('id: '+id);
    let input = document.getElementById(id)
    input.addEventListener('change', function(e) {
        fileurl = window.URL.createObjectURL(e.target.files[0]);
        console.log('src:'+fileurl);
        document.getElementById('prev_'+id).style.backgroundImage = 'url('+fileurl+')';
        document.getElementById('prev_'+id).style.opacity = '1';
        document.getElementById('dele_'+id).style.visibility = 'visible';
        document.getElementById('uplo_'+id).style.visibility = 'visible';
        document.querySelector('.first').style.opacity = '1';
    })
}





